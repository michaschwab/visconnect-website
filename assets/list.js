

angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function($scope)
    {
        $scope.examples = [
            { name: 'Streamgraph', blockid: '4060954', imgUrl: 'https://d3js.org/ex/stream.png'},
        ];

        $scope.interactions = [
            { name: 'Drag', blockid: '20b08f298684c4b0e95f5a4a6c35d0e1', imgUrl: 'https://user-images.githubusercontent.com/288117/88079151-5064f200-cb4b-11ea-9957-bfcac4bbd9af.png'},
        ];
    });
