var gulp = require('gulp');
var watch = require('gulp-watch');

var browserSync = require('./browser-sync');

gulp.task('watch', function () {
  watch([
    'src/views/**/*.html',
    'src/components/**/*.html'
  ], function () {
    gulp.start('templates');
  });

  watch([
    'src/components/**/*.scss',
    'src/views/**/*.scss',
    'src/styles/**/*.scss'
  ], function () {
    gulp.start('styles');
  });

  watch([
    'src/components/**/*.js',
    'src/views/**/*.js',
    '!src/components/**/*.spec.js'
  ], function () {
    gulp.start('scripts:components');
  });

  watch([
    'src/*.html',
    'src/views/**/*.html',
    'src/components/**/*.html',
    'src/images/**/*',
    'src/scripts/**/*',
    '.tmp/scripts/**/*.js',
    '.tmp/scripts/components.js',
    '.tmp/scripts/templates.js'
  ], browserSync.reload);
});