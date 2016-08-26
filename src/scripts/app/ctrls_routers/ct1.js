'use strict';
angular.module("myapp").controller("myController",function(myService,$scope){
    $scope.name=myService.myfct();
});
