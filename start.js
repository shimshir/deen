var webpackWatcher = require('./watcher.js');
var serverStarter = require('./server.js');

serverStarter.start();
webpackWatcher.watch();
