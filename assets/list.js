angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function ($scope) {
        $scope.examples = examples;
        $scope.interactions = interactions;
    });
