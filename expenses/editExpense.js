angular.module('app').component('editExpense', {
  templateUrl: '/expenses/editExpense.html',
  bindings: {
    categories: '=',
    createNewExpense: '&'
  },
  controller: function() {
    this.setDefaults = function() {
      this.amount = '';
      this.desc = '';
      this.payee = '';
      this.date = new Date('3/3/1985').toLocaleDateString();
      this.selectedCategory = this.categories[0];
    };
    this.setDefaults();

    this.create = function() {
      this.expenseData = {
        amount: parseFloat(this.amount),
        description: this.desc,
        payee: this.payee,
        category: {name: this.selectedCategory.name, id: this.selectedCategory.$id},
        date: new Date(this.date).toJSON()
      };
      this.setDefaults();
      this.createNewExpense({expenseData: this.expenseData});
    }
  }
});
