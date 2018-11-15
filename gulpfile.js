const gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('scss', function(){
  return gulp.src('./gulp/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
  gulp.watch('./gulp/scss/**/*.scss', ['scss']);
});


gulp.task('default',['scss', 'watch']);