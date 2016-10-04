'use strict';
const browserSync = require('browser-sync');

exports.task = () => {
  browserSync.init({
    open: false,
    proxy: 'http://localhost:3000',
    port: 8080
  });
};
