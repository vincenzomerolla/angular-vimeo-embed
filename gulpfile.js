var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
   karma = require('gulp-karma'),
  rename = require('gulp-rename'),
 express = require('express'),
   gutil = require('gulp-util'),
    path = require('path'),
stripDebug = require('gulp-strip-debug'),
ngAnnotate = require('gulp-ng-annotate');



gulp.task('dist', function () {
    gulp.src('src/angular-vimeo-embed.js')
        .pipe(ngAnnotate())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('host', function () {
    var app = express(),
       port = 8888;
    app.use(express.static(__dirname + '/src/'));
    app.listen(port, function() {
        gutil.log('Listening on', port);
    });
});

gulp.task('default', ['host']);
