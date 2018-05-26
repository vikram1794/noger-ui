const ejs = require('ejs');

function setUp(app, nogerFile, port) {

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    // index/get page 
    app.get('/noger-ui', function (req, res) {
        res.render('get', {
            noger: nogerFile,
            port: port
        });
    });

    // post page 
    app.get('/noger-ui/post', function (req, res) {
        res.render('post', {
            noger: nogerFile,
            port: port
        });
    });

    // put page 
    app.get('/noger-ui/put', function (req, res) {
        res.render('put', {
            noger: nogerFile,
            port: port
        });
    });

    // delete page 
    app.get('/noger-ui/delete', function (req, res) {
        res.render('delete', {
            noger: nogerFile,
            port: port
        });
    });
}

module.exports.setUp = setUp;