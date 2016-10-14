/**
 * Created by Mikkel on 13/10/16.
 */

var app = angular.module("personApp", ['ngRoute']);


app.service("users",function () {
    var self = this;
   self.persons =  [
       {id:1, name:'Jens', age:18},
       {id:2, name:'Peter', age:23},
       {id:3, name:'Hanne', age:24}
   ];

    self.saveUser = function(user){
        user.id = self.persons.length +1;
        self.persons.push(user);
    };
});

app.controller("DataController", ['$routeParams', '$scope','users', function($routeParams, $scope, users){
    $scope.persons = [
        {id:1, name:'Jens', age:18},
        {id:2, name:'Peter', age:23},
        {id:3, name:'Hanne', age:24}
    ];
    $scope.currentUser =  users.persons[$routeParams.id - 1];

    $scope.saveUser = function(){
        users.saveUser($scope.newuser);
    };

    $scope.persons = users.persons;
}]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/table.html',
            controller: 'DataController',
            controllerAs: 'dataCtrl'
        }).
        when('/details/:id', {
            templateUrl: 'partials/details.html',
            controller: 'DataController',
            controllerAs: 'dataCtrl'
        }).
        when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'DataController',
            controllerAs: 'dataCtrl'
        });
    }]);

