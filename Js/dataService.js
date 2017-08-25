'use strict';

(function (app) {
    app.factory("dataService", ["$http", "$q", function ($http,$q) {
        let _tests = [];

        let _getTests = function () {
            let deferred = $q.defer();

            $http.get("/api/Tests")
            .then(function (result) {
                angular.copy(result.data, _tests);
                deferred.resolve();
            }, function () {
                deferred.reject();
            });

            return deferred.promise;
        };

        let _getTestById = function (id) {
            let test = null;
            $.each(_tests, (i, item) => {
                if (item.id == id){
                    test = item
                    return false;
                }
            });

            return test;
        };

        return {
            tests: _tests,
            getTests: _getTests,
            getTestById : _getTestById
        };
    }]);

})(angular.module("interviewApp"));