var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

module.exports = browserSync;

gulp.task('browser-sync', ['scripts', 'styles', 'watch'], function (callback) {
  browserSync.init({
    server: {
      baseDir: ['src', '.tmp'],
      middleware: [historyApiFallback()]
    }
  }, callback);
});