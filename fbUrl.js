angular.module('app')
  // .constant('FirebaseUrl', 'http://je-expense-tracker.firebaseio.com')
  .constant('FirebaseUrl', 'https://flickering-fire-5027.firebaseio.com/')
  .service('rootRef', ['FirebaseUrl', Firebase]);
