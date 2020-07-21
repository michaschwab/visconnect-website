function loadGist()
{
    var idOnly = getGistId();

    document.getElementById('block-link').setAttribute('href', 'https://bl.ocks.org/' + idOnly);

    d3.select('#iframe')
        .attr('src', window.location.origin + '/' + idOnly + '/raw/index.html');
}

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
}

function getSettingsObject(modes, options, modeSettings) {
    const easypzSettings = {
        "applyTransformTo": "svg > *"
    };
    if(modes) {
        easypzSettings['modes'] = modes;
    }
    if(options) {
        easypzSettings['options'] = options;
    }
    if(modeSettings) {
        easypzSettings['modeSettings'] = modeSettings;
    }
    return easypzSettings;
}

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
}

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
                addInteractivity();
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

const modeNames = ["SIMPLE_PAN", "FLICK_PAN", "HOLD_ZOOM_IN", "HOLD_ZOOM_OUT", "CLICK_HOLD_ZOOM_IN",
    "CLICK_HOLD_ZOOM_OUT", "DBLCLICK_ZOOM_IN", "DBLCLICK_ZOOM_OUT", "DBLRIGHTCLICK_ZOOM_IN", "DBLRIGHTCLICK_ZOOM_OUT",
    "WHEEL_ZOOM", "WHEEL_ZOOM_EASE", "WHEEL_ZOOM_MOMENTUM", "PINCH_ZOOM", "PINCH_ZOOM_QUADRATIC", "PINCH_ZOOM_POWER_FOUR",
    "PINCH_ZOOM_MOMENTUM", "PINCH_PAN", "WHEEL_PAN_X", "WHEEL_PAN_Y", "BRUSH_ZOOM", "BRUSH_ZOOM_X", "BRUSH_ZOOM_Y",
    "DYNAMIC_ZOOM_X_STATIC", "DYNAMIC_ZOOM_X_ORIGINAL_PAN", "DYNAMIC_ZOOM_X_NORMAL_PAN", "DYNAMIC_ZOOM_X_ADJUSTABLE",
    "DYNAMIC_ZOOM_Y_STATIC", "DYNAMIC_ZOOM_Y_ORIGINAL_PAN", "DYNAMIC_ZOOM_Y_NORMAL_PAN", "DYNAMIC_ZOOM_Y_ADJUSTABLE",
    "RUB_ZOOM_IN_X", "RUB_ZOOM_IN_Y", "RUB_ZOOM_OUT_X", "RUB_ZOOM_OUT_Y"];
const defaultModes = ["SIMPLE_PAN", "HOLD_ZOOM_IN", "CLICK_HOLD_ZOOM_OUT", "WHEEL_ZOOM_EASE", "PINCH_ZOOM", /*"DBLCLICK_ZOOM_IN",*/ "DBLRIGHTCLICK_ZOOM_OUT"];

angular.module('easypzDemos', [], function ($compileProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

})
    .controller('easypzDemosCustomSettingsController', function($scope, $sce)
    {

        $scope.demos = demos;
        $scope.modeNames = modeNames;
        $scope.modes = $scope.modeNames.map(function(settingName) {
            return {
                name: settingName,
                active: defaultModes.indexOf(settingName) !== -1
            };
        });
        $scope.activeModeNames = defaultModes;
        $scope.showSettings = 'none'; // 'none' | 'panmodes' | 'zoommodes' | 'scalebounds' | 'modeoptions' | 'export';
        $scope.changesByType = {
            'panmodes': 0,
            'zoommodes': 0,
            'scalebounds': 0,
            'modeoptions': 0,
        };
        $scope.easypzBookmarkHref = $scope.easypzBookmarkHref = $sce.trustAsJs('javascript:(function(){var flash = function(el){var bcr=el.getBoundingClientRect(); var div=document.createElement("div"); div.style.position="absolute"; div.style.pointerEvents="none"; div.style.zIndex=10000; div.style.width=bcr.width+"px"; div.style.height=bcr.height+"px"; div.style.left=bcr.left+"px"; div.style.top=bcr.top+"px"; div.style.background="#d70"; div.style.transition="background ease-in-out 150ms"; el.parentElement.appendChild(div); setTimeout(function(){div.style.background="transparent"}, 15);setTimeout(function(){div.parentElement.removeChild(div)}, 200); }; var transformSvgs=function(doc){var svgs=doc.getElementsByTagName("svg"); for(var i=0;i<svgs.length;i++){ flash(svgs[i]); svgs[i].setAttribute("easypz"); } doc.body.appendChild(document.createElement("script")).src="https://code.easypz.io/easypz.latest.min.js";};transformSvgs(document);var frames=document.getElementsByTagName("iframe");for(var i=0;i<frames.length;i++){transformSvgs(frames[i].contentDocument);}})();');

        $scope.options = {
            minScale: 0.25,
            maxScale: 12,
            bounds: { top: -150, right: 150, bottom: 150, left: -150 }
        };

        $scope.modeSettings = EasyPZ.modes.map(function(unresolvedMode) {
            const mode = unresolvedMode();
            return {
                ids: mode.ids,
                settings: mode.settings,
                settingsKeys: Object.keys(mode.settings)
            };
        });

        $scope.getModesThatInclude = function(s) {
            return $scope.modes.filter(function(m) {
                return m.name.indexOf(s) !== -1;
            });
        };

        $scope.disableAll = function(s) {
            $scope.getModesThatInclude(s).forEach(mode => {
                mode.active = false;
            });
        };

        $scope.isRelevantMode = function(mode) {
            let relevant = false;

            for(const id of mode.ids) {
                if($scope.activeModeNames.indexOf(id) !== -1) {
                    relevant = true;
                    break;
                }
            }

            return relevant;
        };

        $scope.updateEasyPz = function() {
            if($scope.showSettings === 'none') return;

            $scope.changesByType[$scope.showSettings]++;

            const changedSettings = $scope.getChangedSettings();

            setSettings(changedSettings.modes, changedSettings.options, changedSettings.modeSettings);

            const settingsString = JSON.stringify(getSettingsObject(changedSettings.modes, changedSettings.options, changedSettings.modeSettings));
            $scope.easypzBookmarkHref = $sce.trustAsJs('javascript:(function(){var flash = function(el){var bcr=el.getBoundingClientRect(); var div=document.createElement("div"); div.style.position="absolute"; div.style.pointerEvents="none"; div.style.zIndex=10000; div.style.width=bcr.width+"px"; div.style.height=bcr.height+"px"; div.style.left=bcr.left+"px"; div.style.top=bcr.top+"px"; div.style.background="#d70"; div.style.transition="background ease-in-out 150ms"; el.parentElement.appendChild(div); setTimeout(function(){div.style.background="transparent"}, 15);setTimeout(function(){div.parentElement.removeChild(div)}, 200); }; var transformSvgs=function(doc){var svgs=doc.getElementsByTagName("svg"); for(var i=0;i<svgs.length;i++){ flash(svgs[i]); svgs[i].setAttribute("easypz", \''+settingsString+'\'); } doc.body.appendChild(document.createElement("script")).src="https://code.easypz.io/easypz.latest.min.js";};transformSvgs(document);var frames=document.getElementsByTagName("iframe");for(var i=0;i<frames.length;i++){transformSvgs(frames[i].contentDocument);}})();');
        };

        $scope.getChangedSettings = function() {
            $scope.activeModeNames = $scope.modes.filter(function(mode) {
                return mode.active;
            }).map(function(mode) { return mode.name; });

            let modeSettings = {};
            for(const modeSetting of $scope.modeSettings) {
                modeSettings[modeSetting.ids[0]] = modeSetting.settings;
            }

            const modes = $scope.changesByType['panmodes'] || $scope.changesByType['zoommodes'] ? $scope.activeModeNames : undefined;
            const options = $scope.changesByType['scalebounds'] ? $scope.options : undefined;
            modeSettings = $scope.changesByType['modeoptions'] ? modeSettings : undefined;

            return {
                modes: modes,
                options: options,
                modeSettings: modeSettings,
            };
        };

        $scope.getChangedSettingsObject = function() {
            const changedSettings = $scope.getChangedSettings();
            return getSettingsObject(changedSettings.modes, changedSettings.options, changedSettings.modeSettings);
        };

        $scope.capitalizeFirstLetter = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        $scope.transformModeName = function(string) {
            return $scope.capitalizeFirstLetter(string.replace(/_/g, ' ').toLowerCase());
        };

        $scope.map = function(arr, f) { return arr.map(f); };

        $scope.$watch('modes', $scope.updateEasyPz, true);
        $scope.$watch('options', $scope.updateEasyPz, true);
        $scope.$watch('modeSettings', $scope.updateEasyPz, true);


        // These are for the coding demo

        $scope.addModeBodyLoaded = function() {
            if(typeof(CodeMirror) !== 'undefined') {
                $scope.codeMirror = CodeMirror.fromTextArea(document.getElementById('mode-code'));
                $scope.codeMirror.setSize(500, 500);

                setTimeout(() => $scope.submitEasyPZMode(), 1500);
            }
        };

        $scope.easypzChanges = 0;

        $scope.submitEasyPZMode = function() {
            const codeString = $scope.codeMirror.doc.getValue();

            const code = new Function('easypz', codeString);

            const resolved = code();
            const id = resolved.ids[0];

            const iframeElementx = document.getElementById("iframe"),
                iframeElementy = (iframeElementx.contentWindow || iframeElementx.contentDocument);


            if($scope.easypzChanges !== 0) {
                iframeElementy.EasyPZ.modes = iframeElementy.EasyPZ.modes.slice(0, iframeElementy.EasyPZ.modes.length - 1);
            }
            iframeElementy.EasyPZ.addMode(code);

            // Change settings to force EasyPZ to update.
            //setSettings([id], {easyPzChanges: $scope.easypzChanges});

            const settings = $scope.getChangedSettings();
            settings.modes = $scope.activeModeNames;

            setSettings(settings.modes.concat([id]), settings.options, settings.modeSettings, {easyPzChanges: $scope.easypzChanges});

            $scope.easypzChanges++;
        };

        $scope.addModeBodyLoaded();



    });

const demos = [
    { name: 'Drag', blockid: '20b08f298684c4b0e95f5a4a6c35d0e1', imgUrl: 'https://user-images.githubusercontent.com/288117/88079151-5064f200-cb4b-11ea-9957-bfcac4bbd9af.png'},
];
