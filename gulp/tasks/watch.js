'use strict';

import gulp   from 'gulp';
import config from '../config';
import watch from 'gulp-watch';
import runSequence from 'run-sequence';

gulp.task('watch:front', ['browserSync'], function() {
  gulp.watch([config.sampleHTML.src], ['copy:sampleHTML']);
  gulp.watch([config.styles.src], ['sass']);
});
