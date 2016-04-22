angular.module('app').component('home', {
  templateUrl: '/home/home.html',
  bindings: {
    expensesInOrder: '='
  },
  controller: function (rootRef) {
    rootRef.on('value', function () {
      console.log('connected')
    })
  }
});
