angular.module('visconnectDemos', []).controller('visconnectSingleDemoController', function ($scope) {
    $scope.init = () => {
        if(window.location.pathname.length > 3)
        {
            $scope.loadGist();
            var idOnly = $scope.getGistId();

            const demosAndInteractions = examples.concat(interactions);

            var demosFiltered = demosAndInteractions.filter(function(d) { return d.blockid === idOnly });
            if (demosFiltered.length === 1)
            {
                $scope.exampleInfo = demosFiltered[0];
                $scope.addExampleInfo();
            }
        }
    }

    $scope.loadGist = () => {
        var idOnly = $scope.getGistId();

        //document.getElementById('block-link').setAttribute('href', 'https://bl.ocks.org/' + idOnly);

        d3.select('#iframe')
            .attr('src', window.location.origin + '/' + idOnly + '/raw/index.html');
        
        d3.select('#markdown')
            .attr('src', window.location.origin + '/' + idOnly + '/raw/README.md');
        
        console.log(window.location.origin + '/' + idOnly + '/raw/README.md');
        
    }
    


    $scope.addExampleInfo = () => {
        var idOnly = $scope.getGistId();
        d3.select('#code-block').attr('data-src', idOnly + '/raw/index.html');

        if(!$scope.exampleInfo) {
            return;
        }

        document.getElementById('title').innerText += ': ' + $scope.exampleInfo.name;

        if($scope.exampleInfo.codeHighlights && $scope.exampleInfo.codeHighlights["index.html"]) {
            //5,7,18,38
            d3.select('#code-block').attr('data-line', $scope.exampleInfo.codeHighlights["index.html"]);
        }

        if($scope.exampleInfo.codeComments && $scope.exampleInfo.codeComments["index.html"]) {
            $scope.codeCommentsIndex = $scope.exampleInfo.codeComments["index.html"];
        }

        setTimeout(() => {
            Prism.fileHighlight();
        }, 100);
    }

    $scope.getGistId = () => {
        var href = window.location.href;
        if(href[href.length-1] !== '/')
        {
            href += '/';
        }
        var base_url = window.location.origin;
        var baseRemoved = href.substr(base_url.length + 1);
        return baseRemoved.substr(0, baseRemoved.indexOf('/'));
    }

    $scope.init();
});
