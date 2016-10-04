'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');


exports.task = () => {
  gulp.watch([
    './*.ts',
    './config/**/*.ts',
    './libs/**/*.ts',
    './models/**/*.ts',
    './routes/**/*.ts'
  ], () => runSequence('tsc-server'));

  gulp.watch(['./views/scss/**/*'], () => runSequence('compile-sass', 'bs-reload'));
  gulp.watch(['./views/**/*', '!./views/scss/**/*'], () => runSequence('bs-reload'));
};