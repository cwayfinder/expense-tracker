angular.module('app').component('expenseListDisplay', {
  templateUrl: '/expenses/expenseListDisplay.html',
  bindings: {
    expenses: '=expenseData'
  }
});
