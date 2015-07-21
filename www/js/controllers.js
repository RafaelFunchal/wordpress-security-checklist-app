angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('BlogPosts', function($scope) {
  $scope.posts = [
    { title: 'Post 1', id: 1 },
    { title: 'Post 2', id: 2 },
    { title: 'Post 3', id: 3 },
    { title: 'Post 4', id: 4 },
    { title: 'Post 5', id: 5 }
  ];
})

.controller('Blog', function($scope, $stateParams) {
});