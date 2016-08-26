angular.module("myapp").controller("AboutCtrl",["$scope","$routeParams",function($scope, $routeParams){
   $scope.input2= $routeParams.parm2;
}]);
