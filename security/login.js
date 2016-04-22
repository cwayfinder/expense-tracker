angular.module('app').component('login', {
  templateUrl: 'security/login.html',
  bindings: {
    currentAuth: '='
  },
  controller: function (auth, $location) {
    this.loggedIn = !!this.currentAuth;
    
    this.anonLogin = function () {
      auth.$authAnonymously()
        .then(() => $location.path('/home'))
        .catch(err => this.errorMessage = err.code);
    };

    this.twitterLogin = function () {
      auth.$authWithOAuthPopup('twitter')
        .then(() => $location.path('/home'))
        .catch(err => this.errorMessage = err.code);
    };
  }
});
