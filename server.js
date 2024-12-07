var server = require('http')
var file = require('fs');

server.createServer(function (req, res) {
    var data = file.readFile('movies.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.write(data);
        }
        
        res.end();
    })

}).listen(3035);