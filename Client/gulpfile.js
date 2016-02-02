var gulp = require('gulp');
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: 8081
  });
});

gulp.task('default', ['connect']);