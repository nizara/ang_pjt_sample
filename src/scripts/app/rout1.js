'use strict';
angular.module("myapp").config(["$routeProvider","$locationProvider", function($routeProvider,$locationProvider){
        $routeProvider
        .when("/about/:parm2",{
            templateUrl:"scripts/app/sub_modules/about/about.html",
            controller: "AboutCtrl"
            })
        .when("/contact/:parm1",{
            templateUrl:"scripts/app/sub_modules/contact/contact.html",
            controller: "contactCtrl"
            })
        .otherwise({redirectTo:"/" })
        $locationProvider.html5Mode(true);
    }]);
