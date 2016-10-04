'use strict';
const gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

exports.dependencies = ['node-inspector'];
exports.task = () => {
  nodemon({
    debug: true,
    env: {
      'NODE_ENV': 'development'
    },
    ext: 'js',
    exec: 'node --debug',
    script: 'dist/index.js',
    watch: [
      'dist/**/*'
    ]
  }).on('restart', () => {});
};