'use strict';

import gulp           from 'gulp';
import sass           from 'gulp-sass';
import moduleImporter from 'sass-module-importer';
import gulpif         from 'gulp-if';
import insert         from 'gulp-insert';
import browserSync    from 'browser-sync';
import autoprefixer   from 'gulp-autoprefixer';
import handleErrors   from '../util/handle-errors';
import config         from '../config';

gulp.task('sass', function() {

  const CDN_ENV = process.env.CDN_ENV || 'local';

  return gulp.src(config.styles.src)
    .pipe(insert.prepend(`$CDN_ENV: "${CDN_ENV}";`))
    .pipe(sass({
      sourceComments: global.isProd ? false : 'map',
      sourceMap: global.isProd ? false : 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested',
      importer: moduleImporter()
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
