'use strict';
const gulp = require('gulp'),
  nodeInspector = require('gulp-node-inspector');


exports.task = () => {
  gulp.src([])
    .pipe(nodeInspector({
      debugPort: 5858,
      webHost: '0.0.0.0',
      webPort: 5859,
      preload: false,
    }));
};