document.addEventListener('DOMContentLoaded', function () {
    let totalIncome = 0;
    let totalExpense = 0;
  
    document.getElementById('addIncome').addEventListener('click', function () {
      const description = document.getElementById('incomeDescription').value;
      const amount = parseFloat(document.getElementById('incomeAmount').value);
  
      if (description && !isNaN(amount) && amount > 0) {
        totalIncome += amount;
        addTransactionToTable(description, amount, 'Income');
        updateBudgetSummary();
      } else {
        alert("Please enter a valid description and amount.");
      }
  
      document.getElementById('incomeDescription').value = '';
      document.getElementById('incomeAmount').value = '';
    });
  
    document.getElementById('addExpense').addEventListener('click', function () {
      const description = document.getElementById('expenseDescription').value;
      const category = document.getElementById('expenseCategory').value;
      const amount = parseFloat(document.getElementById('expenseAmount').value);
  
      if (description && !isNaN(amount) && amount > 0) {
        totalExpense += amount;
        addTransactionToTable(description, amount, 'Expense');
        updateBudgetSummary();
      } else {
        alert("Please enter a valid description and amount.");
      }
  
      document.getElementById('expenseDescription').value = '';
      document.getElementById('expenseCategory').value = 'housing';
      document.getElementById('expenseAmount').value = '';
    });
  
    function addTransactionToTable(description, amount, type) {
      const tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = description;
      row.insertCell(1).textContent = amount;
      row.insertCell(2).textContent = type;
    }
  
    function updateBudgetSummary() {
      document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
      document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);
      document.getElementById('balance').textContent = (totalIncome - totalExpense).toFixed(2);
    }
  
    document.getElementById('clearAll').addEventListener('click', function () {
      totalIncome = 0;
      totalExpense = 0;
      document.getElementById('transactionTable').getElementsByTagName('tbody')[0].innerHTML = '';
      updateBudgetSummary();
    });
  });
  