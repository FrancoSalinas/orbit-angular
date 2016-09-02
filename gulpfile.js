'use strict';

var gulp         = require('gulp');
var less         = require('gulp-less');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var copy         = require('gulp-copy');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');
var cleanCSS     = require('gulp-clean-css');
var merge        = require('merge-stream');

gulp.task('js', function(){
  return gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './bower_components/angular-sanitize/angular-sanitize.min.js',
    './bower_components/angular-cookies/angular-cookies.min.js',
    './bower_components/angular-translate/angular-translate.min.js',
    './bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
    './bower_components/angular-slugify/angular-slugify.js',

    './app/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./javascripts'))
});

gulp.task('serve', function() {
  browserSync({
    open: false,
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./less/default/*.less", ['less']);

  gulp.watch("./*.html")
  .on('change', browserSync.reload);

  gulp.watch("./app/app.js", ['js']);

  gulp.watch("./javascripts/app.min.js")
  .on('change', browserSync.reload);
});

gulp.task('css', [], function() {
  var lessStream = gulp.src([
    './less/default/styles.less'
  ])
  .pipe(less())
  .pipe(concat('less-files.less'));

  var cssStream = gulp.src([
    './bower_components/bootstrap-css-only/css/bootstrap.min.css',
    './bower_components/components-font-awesome/css/font-awesome.min.css'
  ])
  .pipe(concat('css-files.css'));

  var mergedStream = merge(lessStream, cssStream)
  .pipe(concat('styles.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./stylesheets'))
  .on('end', browserSync.reload);

  return mergedStream;
});

gulp.task('setup', [], function() {
  /* Set up awesome font. */
  gulp.src('./bower_components/components-font-awesome/fonts/*.*')
  .pipe(gulp.dest('./fonts'));
})

gulp.task('build', [], function() {
  runSequence('js', 'css');
});

gulp.task('default', ['build'], function() {});
