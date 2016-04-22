angular.module('app').component('expenseListDisplay', {
  templateUrl: '/expenses/expenseListDisplay.html',
  bindings: {
    expenses: '=expenseData'
  },
  controller: function () {
    this.deleteExpense = function(expense) {
      this.expenses.$remove(expense);
    }
  }
});
