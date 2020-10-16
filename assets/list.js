const bibtex = `@article{schwab20-visconnect,
  author={Michail {Schwab} and David {Saffo} and Yixuan {Zhang} and Shash {Sinha} and Cristina {Nita-Rotaru} and James {Tompkin} and Cody {Dunne} and Michelle A. {Borkin}},
  journal={IEEE Transactions on Visualization and Computer Graphics}, 
  title={{VisConnect}: Distributed Event Synchronization for Collaborative Visualization}, 
  year={2020},
  doi={10.1109/TVCG.2020.3030366},
  eprint={10.31219/osf.io/ut7e6},
  volume={},
  number={},
  pages={1-1},
}`;

angular.module('visconnectDemos', [])
    .controller('visconnectDemosListController', function ($scope) {
        $scope.examples = examples;
        $scope.interactions = interactions;
        $scope.authors = [
            {name: 'Schwab', first: 'Michail', imgUrl: 'micha.png', url: 'https://michailschwab.com'},
            {name: 'Saffo', first: 'David', imgUrl: 'david.jpg', url: 'https://www.khoury.northeastern.edu/people/david-saffo/'},
            {name: 'Zhang', first: 'Yixuan', imgUrl: 'janice.jpg', url: 'https://zjanice.github.io/'},
            {name: 'Sinha', first: 'Shash', imgUrl: 'shash.jpeg', url: 'https://www.linkedin.com/in/shash873/'},
            {name: 'Nita-Rotaru', first: 'Cristina', imgUrl: 'cristina.jpg', url: 'https://cnitarot.github.io/'},
            {name: 'Tompkin', first: 'James', imgUrl: 'james.png', url: 'http://jamestompkin.com/'},
            {name: 'Dunne', first: 'Cody', imgUrl: 'cody.jpg', url: 'https://cody.khoury.northeastern.edu/'},
            {name: 'Borkin', first: 'Michelle A.', imgUrl: 'michelle.jpg', url: 'https://khoury.northeastern.edu/people/michelle-borkin/'}];

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