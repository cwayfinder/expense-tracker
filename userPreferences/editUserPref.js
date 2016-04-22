angular.module('app').component('editUserPref' , {
  templateUrl: '/userPreferences/editUserPref.html',
  bindings: {
    userPreferences: '='
  },
  controller: function (fbRef, $firebaseObject, $location) {
    console.log(this.userPreferences);
    console.log($firebaseObject(fbRef.getPreferencesRef()).$loaded());

    this.themes = ['light', 'dark'];

    this.save = function() {
      this.userPreferences.$save();
    };

    this.cancel = function() {
      $location.path('/home')
    };
  }
});
