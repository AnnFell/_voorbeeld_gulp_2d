var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('scss', function(){
  return gulp.src('./gulp/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('/map'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
});


gulp.task('default',['scss', 'serve']);