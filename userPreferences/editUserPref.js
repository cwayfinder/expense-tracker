angular.module('app').component('editUserPref' , {
  templateUrl: '/userPreferences/editUserPref.html',
  bindings: {
    userPrefData: '=userPreferences'
  },
  controller: function (fbRef, $firebaseObject, $location, $scope) {
    console.log(this.userPreferences);

    this.themes = ['light', 'dark'];

    this.userPrefData.$bindTo($scope, "$ctrl.userPreferences").then(() => {
      if (!this.userPreferences.theme) {
        this.userPreferences.theme = this.themes[0]
      }
    });

    this.save = function() {
      this.userPreferences.$save();
    };

    this.cancel = function() {
      $location.path('/home')
    };
  }
});
