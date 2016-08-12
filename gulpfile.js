'use strict';

var gulp         = require('gulp');
var less         = require('gulp-less');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');

gulp.task('js', function(){
  return gulp.src([
    './bower_components/angular/angular.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

    './assets/js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
  
  gulp.watch("./assets/less/default/*.less", ['less']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('less', [], function() {
  return gulp.src('./assets/less/default/styles.less')
  .pipe(less())
  .pipe(gulp.dest('./assets/css'))
  .on('end', browserSync.reload);
});

gulp.task('build', [], function() {
  runSequence('js', 'less');
});

gulp.task('default', ['build'], function() {});