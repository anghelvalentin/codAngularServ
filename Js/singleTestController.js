'use strict';

(function (app) {
    app.controller("singleTestController", ["$scope","$location","$routeParams", "dataService", function ($scope, $location,$routeParams,dataService) {
        $scope.test = dataService.getTestById($routeParams.id);
        $scope.isTestStarted = false;
        $scope.startTest = () => {
            $scope.isTestStarted = true;
        }
    }]);
})(angular.module("interviewApp"));