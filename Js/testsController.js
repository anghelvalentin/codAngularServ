'use strict';

(function (app) {
    app.controller("testsController", ["$scope","dataService",function ($scope,dataService) {
        $scope.data = dataService;
        dataService.getTests().then(function () {
            console.log(dataService);
        }, function (error) {
            alert(error);
        })
    }]);
    

})(angular.module("interviewApp"));