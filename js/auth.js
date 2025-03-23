document.addEventListener("DOMContentLoaded", function () {
    // Registration
    document.getElementById("registrationForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Registration successful! Redirecting to login...");
        window.location.href = "login.html";
    });

    // Login
    document.getElementById("loginForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("loginUsername").value;
        let password = document.getElementById("loginPassword").value;

        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Login successful! Redirecting...");
            window.location.href = "expense_tracker.html";
        } else {
            alert("Invalid username or password!");
        }
    });
});
