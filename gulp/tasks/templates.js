var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');

gulp.task('templates', function () {
  return gulp
    .src([
      'src/components/**/*.html',
      'src/views/**/*.html'
    ])
    .pipe(templateCache({module: 'pt'}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('.tmp/scripts'));
});