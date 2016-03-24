var server = require('./server.js');
var changeWatcher = require('./changeWatcher.js');

var walker = changeWatcher.walk.walkSync(changeWatcher.root, changeWatcher.options);
console.log('Change watcher started.');
server.listen(server.get('port'), function() {
  console.log('Server started: http://localhost:' + server.get('port') + '/');
});