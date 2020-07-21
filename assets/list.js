angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function ($scope) {
        $scope.examples = [
            {
                name: 'Streamgraph',
                blockid: '4060954',
                imgUrl: 'https://d3js.org/ex/stream.png'
            },
        ];

        $scope.interactions = [
          
            {
                name: 'Mouse Events',
                blockid: 'a018a51a1a9d9b2fea4387c73215ba9e',
                imgUrl: 'https://user-images.githubusercontent.com/13991410/88092056-e0ac3280-cb5d-11ea-8793-11029af2a629.PNG',
            },
            {
                name: 'Drag',
                blockid: '20b08f298684c4b0e95f5a4a6c35d0e1',
                imgUrl: 'https://user-images.githubusercontent.com/288117/88079151-5064f200-cb4b-11ea-9957-bfcac4bbd9af.png',
            },
            {
                name: 'Brushing',
                blockid: '28ec42110dd88094540938793ce4dd50',
                imgUrl: 'https://user-images.githubusercontent.com/13991410/88092538-a2634300-cb5e-11ea-9e71-1723b8150944.PNG',
            },
             {
                name: 'Zoom',
                blockid: '020760869ab8bbff1d96e836e02cc9be',
                imgUrl: 'https://gist.github.com/dsaffo/020760869ab8bbff1d96e836e02cc9be/raw/e2152cc48a9e16054509201dac53f30a73e20391/thumbnail.png',
            },
            
        ];
    });
