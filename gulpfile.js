var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
   karma = require('gulp-karma'),
  rename = require('gulp-rename'),
 express = require('express'),
   gutil = require('gulp-util'),
    path = require('path'),
minifyHtml = require('gulp-minify-html'),
stripDebug = require('gulp-strip-debug'),
ngAnnotate = require('gulp-ng-annotate');



gulp.task('build', function () {
  gulp.src('src/angular-vimeo-embed.js')
      .pipe(ngAnnotate())
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(rename(function (path) {
          path.basename += '.min';
      }))
      .pipe(gulp.dest('dist/'));

  gulp.src('src/index.html')
      .pipe(minifyHtml())  
      .pipe(gulp.dest('dist/'));

  gulp.src('bower_components/**/*.*') 
      .pipe(gulp.dest('dist/bower_components/'));

});

gulp.task('host', function () {
    var app = express(), port = 8888;
    app.use(express.static('src'));
    app.use('/bower_components', express.static('bower_components'));
    app.listen(port, function() {
      gutil.log('Listening on', port);
    });
});

gulp.task('default', ['host']);
