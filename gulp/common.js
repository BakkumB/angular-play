var combiner = require('stream-combiner2');
var browserSync = require('./tasks/browser-sync');
var gutil = require('gulp-util');

function getCombinerPipe (taskName, tasks) {
  var combined = combiner.obj(tasks);

  combined.on('error', function (error) {
    browserSync.notify('Styles error: ' + error.message);
    gutil.log(gutil.colors.red('Error'), error.message);
    this.emit('end');
  });

  return combined;
}

module.exports = {
  getCombinerPipe: getCombinerPipe
};