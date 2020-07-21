function loadGist()
{
    var idOnly = getGistId();

    //document.getElementById('block-link').setAttribute('href', 'https://bl.ocks.org/' + idOnly);

    d3.select('#iframe')
        .attr('src', window.location.origin + '/' + idOnly + '/raw/index.html');
}
/*
function addInteractivity()
{
    var iframeElementx = document.getElementById("iframe"),
        iframeElementy = (iframeElementx.contentWindow || iframeElementx.contentDocument),
        iframeElementz = iframeElementy.document.body;

    var iframe = d3.select(iframeElementz);

    iframe.append('script')
        .attr('src', 'https://code.easypz.io/easypz.latest.js');
    //.attr('src', '/easypz.js');

    iframe.append('link')
        .attr('rel', 'stylesheet')
        .attr('href', '../../demo-styles.css');

    setSettings();
}*/
/*
function setSettings(modes, options, modeSettings, other) {
    var iframeElementx = document.getElementById("iframe"),
        iframeElementy = (iframeElementx.contentWindow || iframeElementx.contentDocument),
        iframeElementz = iframeElementy.document.body;

    var iframe = d3.select(iframeElementz);

    var svgs = iframe.selectAll('svg');
    var easypzSettings = getSettingsObject(modes, options, modeSettings);

    if(other) {
        for(let key in other) {
            if(other.hasOwnProperty(key))
                easypzSettings[key] = other[key];
        }
    }

    var easyPzString = JSON.stringify(easypzSettings);

    svgs.attr('easypz', easyPzString);
}*/

function bodyLoaded()
{
    if(window.location.pathname.length > 3)
    {
        loadGist();

        var idOnly = getGistId();

        var demosFiltered = demos.filter(function(d) { return d.blockid === idOnly });
        if (demosFiltered.length === 1)
        {
            document.getElementById('title').innerText += ': ' + demosFiltered[0].name;
        }
    }
}


document.addEventListener("DOMContentLoaded", function()
{
    var iframeEl = document.getElementById('iframe');
    var maxtries = 100;
    var tries = 0;

    var trial = function()
    {
        tries++;

        if(tries < maxtries)
        {
            var iframeElementx = document.getElementById("iframe"),
                iframeElementy = (iframeElementx.contentWindow || iframeElementx.contentDocument),
                body = iframeElementy.document.body;

            if(iframeEl.src && body && body.querySelector('svg'))
            {
                //addInteractivity();
            }
            else
            {
                window.setTimeout(trial, 50);
            }
        }
        else
        {
            console.error('no iframe src!');
        }
    };

    trial();
});

function getGistId() {
    var href = window.location.href;
    if(href[href.length-1] !== '/')
    {
        href += '/';
    }
    var base_url = window.location.origin;
    var baseRemoved = href.substr(base_url.length + 1);
    return baseRemoved.substr(0, baseRemoved.indexOf('/'));
}

angular.module('visconnectDemos', [], function ($compileProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

})
    .controller('visconnectDemosCustomSettingsController', function($scope, $sce)
    {
        /*$scope.demos = demos;
        $scope.modeNames = modeNames;
        $scope.modes = $scope.modeNames.map(function(settingName) {
            return {
                name: settingName,
                active: defaultModes.indexOf(settingName) !== -1
            };
        });
        $scope.activeModeNames = defaultModes;
        $scope.showSettings = 'none'; // 'none' | 'panmodes' | 'zoommodes' | 'scalebounds' | 'modeoptions' | 'export';

        $scope.capitalizeFirstLetter = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        $scope.transformModeName = function(string) {
            return $scope.capitalizeFirstLetter(string.replace(/_/g, ' ').toLowerCase());
        };

        $scope.map = function(arr, f) { return arr.map(f); };*/
    });

const demos = [
    { name: 'Drag', blockid: '20b08f298684c4b0e95f5a4a6c35d0e1', imgUrl: 'https://user-images.githubusercontent.com/288117/88079151-5064f200-cb4b-11ea-9957-bfcac4bbd9af.png'},
];
