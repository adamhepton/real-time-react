'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    nodemon = require('gulp-nodemon'),
    webpackConfig = require('./webpack.config.js');

gulp.task('build', function() {
    webpackConfig.devtool = "source-map";

    return gulp.src('./')
      .pipe(webpack( webpackConfig ))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'app.js',
    ignore: ['public/*', 'node_modules/*'],
    ext: 'js'
  });
});

gulp.task('default', [ 'nodemon', 'build' ]);
