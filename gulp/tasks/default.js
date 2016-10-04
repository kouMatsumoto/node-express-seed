'use strict';
const runSequence = require('run-sequence');


exports.task = () => {
  runSequence(
    'init-nodemon',
    'bs-init',
    'watch'
  );
};