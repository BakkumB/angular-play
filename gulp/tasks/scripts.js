var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var assets = require('gulp-assets');
var filter = require('gulp-filter');

var browserSync = require('./browser-sync');

var common = require('../common');

gulp.task('scripts:libs', function () {
  return gulp
    .src('src/index.html')
    .pipe(assets.js())
    .pipe(filter([
      'bower-components/**/*.js'
    ]))
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('scripts:components', function () {
  return common.getCombinerPipe('scripts', [
    gulp.src([
      'src/components/**/*.js',
      'src/views/**/*.js',
      '!src/components/**/*.spec.js'
    ]),
    sourcemaps.init(),
    ngAnnotate(),
    concat('components.js'),
    sourcemaps.write(),
    gulp.dest('.tmp/scripts')
  ]);
});

gulp.task('scripts:app', function () {
  return common.getCombinerPipe('scripts', [
    gulp.src('src/scripts/**/*.js'),
    sourcemaps.init(),
    ngAnnotate(),
    concat('app.js'),
    sourcemaps.write(),
    gulp.dest('.tmp/scripts')
  ]);
});

gulp.task('scripts', ['scripts:libs', 'scripts:app', 'scripts:components', 'templates']);