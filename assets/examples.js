let examples = [
    {
        name: 'Drawing',
        blockid: '432feae93ee2af995a427ad459afd454',
        imgUrl: 'https://gist.github.com/dsaffo/432feae93ee2af995a427ad459afd454/raw/d245ae1b2e53eb398f294d443bfc78a38ebbcea0/thumbnail.png',
    },
    {
        name: 'Fire Fighters',
        blockid: '489cabbb7a6ae4c26f9bdd5b473e8d5b',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88224072-f9990e80-cc57-11ea-9fd8-15260aa5edf2.PNG',
    },
    {
        name: 'Wheres Waldo',
        blockid: '05f53164cc14b375065404eca18247a0',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88224728-ef2b4480-cc58-11ea-9cd3-95512e5825d1.png',
    },
    {
        name: 'Planarity Party',
        blockid: '02e285a64149618cfe8429a323f9c91a',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88226635-e0925c80-cc5b-11ea-8e61-be3457897e4e.PNG',
    },
    


];

let interactions = [
    {
        name: 'Mouse Events',
        blockid: 'a018a51a1a9d9b2fea4387c73215ba9e',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88092056-e0ac3280-cb5d-11ea-8793-11029af2a629.PNG',
        codeHighlights: {
            'index.html': "8,9"
        },
        codeComments: {
            'index.html': [
                "Line 8: Add the PeerJS Dependency",
                "Line 9: Add the VisConnect Dependency",
            ]
        }
    },
    {
        name: 'Drag',
        blockid: '9129f44cea5aabd962b54e93b523e632',
        imgUrl: 'https://user-images.githubusercontent.com/288117/88079151-5064f200-cb4b-11ea-9957-bfcac4bbd9af.png',
        codeHighlights: {
            'index.html': "5,6,23,43"
        },
        codeComments: {
            'index.html': [
                "Line 5: Add the PeerJS Dependency",
                "Line 6: Add the VisConnect Dependency",
                "Line 23: Replace d3.drag with vc.drag",
                "Line 43: Highlight circles with the color of the collaborator to distinguish them"]
        }
    },
    {
        name: 'Divide-and-Conquer Brush',
        blockid: 'b2d66e94bf90016cb285ebc9515ebc0a',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88092538-a2634300-cb5e-11ea-9e71-1723b8150944.PNG',
        codeHighlights: {
            'index.html': "4,5,6,20,82"
        },
        codeComments: {
            'index.html': [
                "Line 4: Add the collaberation='live' attribute to body tag",
                "Line 5: Add the PeerJS Dependency",
                "Line 6: Add the VisConnect Dependency",
                "Line 20: Replace Math.random with vc.random",
                "Line 82: Replace d3.brush with vc.brush",

            ]
        }
    },
    {
        name: 'Zoom',
        blockid: '020760869ab8bbff1d96e836e02cc9be',
        imgUrl: 'https://gist.github.com/dsaffo/020760869ab8bbff1d96e836e02cc9be/raw/e2152cc48a9e16054509201dac53f30a73e20391/thumbnail.png',
        codeHighlights: {
            'index.html': "37,38"
        },
        codeComments: {
            'index.html': [
                "Line 37: Add the PeerJS Dependency",
                "Line 38: Add the VisConnect Dependency",
            ]
        }
    },
    {
        name: 'UI',
        blockid: 'ff0f1abebb0a72520411940bf82cbedf',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88219451-1e3db800-cc51-11ea-8003-7540dcbe550c.PNG',
        codeHighlights: {
            'index.html': "8,9,18"
        },
        codeComments: {
            'index.html': [
                "Line 8: Add the PeerJS Dependency",
                "Line 9: Add the VisConnect Dependency",
                "Line 18: Add the collaberation='live' attribute to body tag",
            ]
        }
    },
    {
        name: 'Custom Events',
        blockid: 'd29cd8bb5b596697d92f5da2e6d5c49c',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88573973-93253f00-d00f-11ea-80bf-9faa3d94bee5.PNG',
        codeHighlights: {
            'index.html': "4,5,10,45"
        },
        codeComments: {
            'index.html': [
                "Line 4: Add the PeerJS Dependency",
                "Line 5: Add the VisConnect Dependency",
                "Line 10: Add the collaberation='live' attribute to body tag, include the custom event, ignore the events you dont want to sync",
                "Line 45: Define the custom event to sync"
            ]
        }
    },
    {
        name: 'Lasso',
        blockid: '994a1ab12de6fb4bf21ee5c7a2461466',
        imgUrl: 'https://user-images.githubusercontent.com/13991410/88575492-f44e1200-d011-11ea-97c2-afdda23243c0.PNG',
        codeHighlights: {
            'index.html': "4,15,16,32,71"
        },
        codeComments: {
            'index.html': [
                "Line 4: 'collaberation' attribute on body tag to sync the mode switch button",
                "Line 15: Add the PeerJS Dependency",
                "Line 16: Add the VisConnect Dependency",
                "Line 32: Code to handle lasso events",
                "Line 71: Code to switch lasso modes"
            ]
        }
    },
];
