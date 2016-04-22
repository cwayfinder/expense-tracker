angular.module('app').component('nav', {
  templateUrl: '/nav/nav.html',
  controller: function ($firebaseObject, fbRef) {
    this.userPreferences = $firebaseObject(fbRef.getPreferencesRef());

    this.loaded = false;
    this.userPreferences.$loaded().then((data) => {
      this.loaded = true;
    });
  }
});
