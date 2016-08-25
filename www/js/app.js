// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('starter', ['ionic','todo.services']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



app.controller('toDo', function($scope,$ionicPopup,$timeout,toDos){
  
  $scope.toDoList = toDos.all();

  $scope.toDoItem = function(content){
    this.content = content;
    this.createdOn = Date().substring(0,24) ;
    this.completedOn = null;

  };

  ;

  $scope.completeToDo = function(toDo){
     console.log('Completing Todo Task :' + toDo.content);
     toDo.completedOn = Date();
     $scope.persist();
  };
  
  $scope.persist = function(){
    toDos.toDos = $scope.toDoList;
    toDos.persist();
  }


  

// Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" maxlength="60" ng-model="data.newToDo">',
      title: 'New toDo Item',
      subTitle: 'Enter To-Do Description',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.newToDo) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.newToDo;
            }
          }
        }
      ]
    });

    myPopup.then(function(res) {

      console.log('Tapped!', res);
      
      console.log($scope);
      if (res){
        $scope.toDoList.push(new $scope.toDoItem(res));
        $scope.persist();  
      }
      else{
        console.log("Not valid");
      }
      
    });

    $timeout(function() {
       myPopup.close(); //close the popup after 20000 mil just to avoid to see if it was not pressed by mistake
    }, 20000);
   };



});
