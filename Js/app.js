'use strict';

(function () {
    const app = angular.module("interviewApp",["ngRoute"]);
    app.config(["$routeProvider","$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when("/", {
            controller: "testsController",
            templateUrl: "/Templates/testsView.html"
        });
        $routeProvider.when("/test/:id", {
            controller:"singleTestController",
            templateUrl: "/Templates/singleTestView.html"
        });
       


        $routeProvider.otherwise({ redirectTo: "/" });

    }]);
})();

