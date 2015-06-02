'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task('build', function() {
    webpackConfig.devtool = "source-map";

    return gulp.src('./')
      .pipe(webpack( webpackConfig ))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
    gulp.watch([
      './react/init.js',
      './react/components/**/*',
      './react/stores/**/*',
      './react/actions/**/*',
      './react/utils/**/*',
      './react/constants/**/*'
    ], ['build']);
});

gulp.task('default', ['build', 'watch']);
