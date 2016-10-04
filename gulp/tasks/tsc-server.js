'use strict';
const gulp = require('gulp'),
      tsc = require("gulp-typescript"),
      sourcemaps = require('gulp-sourcemaps');


exports.task = () => {
  let serverTsFiles = [
      'typings/index.d.ts',
      './*.ts',
      './config/**/*.ts',
      './libs/**/*.ts',
      './models/**/*.ts',
      './routes/**/*.ts'
    ],
    tsConfig = tsc.createProject("tsconfig.json");


  return gulp.src(serverTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsConfig))
    .pipe(sourcemaps.write('.', { sourceRoot: (file) => file.cwd + 'dist' }))
    .pipe(gulp.dest("dist"));
};