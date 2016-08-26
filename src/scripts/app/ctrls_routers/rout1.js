'use strict';
angular.module("myapp").config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/about",{
            templateUrl:"scripts/app/ctrls_routers/about.html"
            })
        .when("/contact",{
            templateUrl:"scripts/app/ctrls_routers/contact.html"
            })
        .otherwise({
            templateUrl:"scripts/app/ctrls_routers/404.html"
            })
    }]);
