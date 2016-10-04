'use strict';
const gulp = require('gulp');
const tslint = require("gulp-tslint");


exports.task = () => {
  let srcFiles = [
    "app/**/*.ts"
  ];


  return gulp.src(srcFiles)
    .pipe(tslint({
      configuration: __dirname + "/../../tslint.json"
    }))
    .pipe(tslint.report());
};