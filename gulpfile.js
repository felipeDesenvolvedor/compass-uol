var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('cssmin');

var saaspath = "src/assets/sass/*.scss";    
var csspath  = "src/assets";


gulp.task('watch', function(){
  gulp.watch("src/assets/sass/*.scss").on('change', function() {
    gulp.src(saaspath)
    .pipe(sass())
  //.pipe(cssmin())
    .pipe(gulp.dest(csspath));
  });
  
});

gulp.task('sass', function () {
  gulp.src(saaspath)
  .pipe(sass())
//.pipe(cssmin())
  .pipe(gulp.dest(csspath));
});

gulp.task('default', gulp.series ('watch', gulp.parallel('sass'),

    function (done) { done(); }    
));