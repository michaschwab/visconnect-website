

angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function($scope)
    {
        $scope.examples = [
            { name: 'Streamgraph', blockid: '4060954', imgUrl: 'https://d3js.org/ex/stream.png'},
        ];

        $scope.interactions = [
            { name: 'Streamgraph', blockid: '4060954', imgUrl: 'https://d3js.org/ex/stream.png'},
        ];
    });
