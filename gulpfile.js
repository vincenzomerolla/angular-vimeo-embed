var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
   karma = require('gulp-karma'),
  rename = require('gulp-rename'),
 express = require('express'),
   gutil = require('gulp-util'),
    path = require('path'),
serveStatic = require('serve-static');

build = 'dist/';

gulp.task('test', function () {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'src/angular-youtube-embed.js',
        'test/unit/**/*.js'
    ])
    .pipe(karma({
        configFile: 'test/config/karma.conf.js',
        action: 'watch'
    }));
});


gulp.task('dist', function () {
    gulp.src('src/angular-vimeo-embed.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(build));
});

gulp.task('host', function () {
    var app = express(),
       port = 8888,
      serve = serveStatic('src/', {'index': ['index.html']});

    app.use(serve);
    app.listen(port, function() {
        gutil.log('Listening on', port);
    });
});

gulp.task('default', ['dist', 'host', 'test']);
