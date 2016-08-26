'use strict';
angular.module("myapp").config(["$routeProvider","$locationProvider", function($routeProvider,$locationProvider){
        $routeProvider
        .when("/about",{
            templateUrl:"scripts/app/sub_modules/about/about.html"
            })
        .when("/contact",{
            templateUrl:"scripts/app/sub_modules/contact/contact.html"
            })
        .otherwise({redirectTo:"/" })
        $locationProvider.html5Mode(true);
    }]);
