const express = require('express');
const fs = require('fs');
const request = require('request');
const app = express();
var https = require('https');
/*
var key = fs.readFileSync('/etc/apache2/ssl/easypzdemos-privkey.pem');
var cert = fs.readFileSync( '/etc/apache2/ssl/easypzdemos-cert.pem' );

var options = {
  key: key,
  cert: cert
};*/

app.use(express.static('./assets'));

function loadGist(gistId, callback)
{
    var cachedFilePath = 'gist-data/' + gistId + '.json';

    if(fs.existsSync(cachedFilePath))
    {
        fs.readFile(cachedFilePath, function(err, body)
        {
            var data = JSON.parse(body);

            callback(null, data);
        });
    }
    else
    {
        var url = 'https://api.github.com/gists/' + gistId;

        var options = {
            url: url,
            headers: {
                'User-Agent': 'VisConnect',
            }
        };

        request(options, function(err, response, body)
        {
            if(err)
            {
                callback(err);
            }
            else
            {
                fs.writeFile(cachedFilePath, body, function(err)
                {
                    if (err) throw err;
                    console.log('The file has been saved!');

                    var data = JSON.parse(body);

                    callback(null, data);
                });
            }
        });
    }
}

app.get('/:gistId/raw/:filePath', function (req, res) {
    //res.send(req.params)

    var gistId = req.params.gistId;
    var filePath = req.params.filePath;

    loadGist(gistId, function(err, data)
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
            try {
                res.send(data.files[filePath].content);
            }
            catch(e)
            {
                res.send(data);
            }
        }

    });
});

app.get('/:gistId/cachereset', function (req, res) {

    var gistId = req.params.gistId;
    var cachedFilePath = 'gist-data/' + gistId + '.json';

    if(fs.existsSync(cachedFilePath))
    {
        try {
            fs.unlinkSync(cachedFilePath);
            res.send("Success!");
        } catch(err) {
            console.error(err);
            res.send(err);
        }
    } else {
        res.send("No such file.");
    }
});

app.get('/', function (req, res) {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('', function (req, res) {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/addmode', function (req, res)
{
    res.sendFile('./add-mode.html', { root: __dirname });
});

app.get('/:gistId/', function (req, res)
{
    var gistId = req.params.gistId;

    if(!gistId)
    {
        res.sendFile('./index.html', { root: __dirname });
    }
    else
    {
        res.sendFile('./single.html', { root: __dirname });
    }
});

app.listen(3002, function () {
//https.createServer(options, app).listen(3000, function () {
    console.log('VisConnect demos app listening on port 3002!')
});
