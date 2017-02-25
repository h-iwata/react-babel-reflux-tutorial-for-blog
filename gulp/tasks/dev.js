'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev:front', function(cb){
  cb = cb || function() {};
  global.isProd = false;
  return runSequence(
    'clean',
    ['browserify', 'copy:sampleHTML'],
    'browserSync', cb);
});
