const bibtex = `@article{schwab20-visconnect,
  author={M. {Schwab} and D. {Saffo} and Y. {Zhang} and S. {Sinha} and C. {Nita-Rotaru} and J. {Tompkin} and C. {Dunne} and M. A. {Borkin}},
  journal={IEEE Transactions on Visualization and Computer Graphics}, 
  title={{VisConnect: Distributed Event Synchronization for Collaborative Visualization}}, 
  year={2020},
  doi={10.1109/TVCG.2020.3030366}
  volume={},
  number={},
  pages={1-1},
}`;

angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function ($scope) {
        $scope.examples = examples;
        $scope.interactions = interactions;

        $scope.copyBibtex = function() {
            copyToClipboard(bibtex);
            alert('BibTex copied!')
        };
    });


// From https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    //console.log(str);
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selection = document.getSelection();
    const selected = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected && selection) {
        selection.removeAllRanges();
        selection.addRange(selected);
    }
};