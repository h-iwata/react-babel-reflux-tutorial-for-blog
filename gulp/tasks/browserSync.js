'use strict';

import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.buildDir
    },
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });
});
