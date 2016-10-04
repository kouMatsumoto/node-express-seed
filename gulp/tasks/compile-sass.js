'use strict';
const gulp = require('gulp'),
      gulpAutoprefixer = require('gulp-autoprefixer'),
      gulpPlumber = require('gulp-plumber'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat');


exports.task = () => {
  let srcFiles = [
          './views/scss/**/*.scss'
      ],
      sassOptions = {
        outputStyle: 'compressed'
      },
      destFileName = 'main.css',
      destDir = './public/css';


  return gulp.src(srcFiles)
    .pipe(gulpPlumber())
    .pipe(sass(sassOptions))
    .pipe(gulpAutoprefixer())
    .pipe(concat(destFileName))
    .pipe(gulp.dest(destDir));
};