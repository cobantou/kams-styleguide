var gulp = require('gulp');
var sass = require('gulp-sass');
var styleguide = require('devbridge-styleguide');

gulp.task('start-styleguide', function () {
  styleguide.startServer();
});