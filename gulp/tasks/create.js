'use strict';

import gulp   from 'gulp';
import gutil  from 'gulp-util';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import config from '../config';
import args   from 'yargs';

gulp.task('create:component', function() {
  let componentName = getComponentNameFromArgv('component');
  if (!componentName) return false;

  return gulp.src(config.templates.component)
    .pipe(rename(componentName + '.js'))
    .pipe(replace('EmptyComponent', componentName))
    .pipe(gulp.dest(config.sourceDir + '/js/samples/component/'));
});

gulp.task('create:html', function() {
  let componentName = getComponentNameFromArgv('html');
  if (!componentName) return false;

  return gulp.src(config.templates.html)
    .pipe(rename(componentName + '.html'))
    .pipe(replace('EmptyComponent', componentName))
    .pipe(gulp.dest(config.sourceDir + '/sample-html/'));
});

const getComponentNameFromArgv = function(name) {
  const USAGE = `
  [${gutil.colors.blue('create:' + name)}]
  ------------------------------------
       USAGE:   gulp create:${name} --name ${gutil.colors.magenta('<component_name>')}
       EXAMPLE: gulp create:${name} --name SomethingNewComponent
  ------------------------------------
  [${gutil.colors.blue('create:' + name)}]
  `;
  if (typeof args.argv === 'undefined' || typeof args.argv.name === 'undefined' || args.argv.name === true) {
    gutil.log(USAGE);
    return false;
  } else {
    return args.argv.name
  }
}
