angular.module("myapp").controller("contactCtrl",["$scope","$routeParams",function($scope,$routeParams){
    $scope.input1= $routeParams.parm1;
}]);
