var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

var browserSync = require('./browser-sync');

var common = require('../common');
var sassGlob = require('../gulp-sass-glob');

gulp.task('styles', function () {
  return common.getCombinerPipe('styles', [
    gulp.src('src/styles/main.scss'),
    sassGlob(),
    sourcemaps.init(),
    sass(),
    sourcemaps.write(),
    gulp.dest('.tmp/styles'),
    browserSync.stream()
  ]);
});
