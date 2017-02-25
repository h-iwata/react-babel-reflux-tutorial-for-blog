'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copy:sampleHTML', function() {
  return gulp.src(config.sampleHTML.src, {
    base: config.sampleHTML.base
  }).pipe(gulp.dest(config.buildDir));
});
