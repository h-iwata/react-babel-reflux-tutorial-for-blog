'use strict';

import fs          from 'fs';
import gulp from 'gulp';

const TASKS = fs.readdirSync('./gulp/tasks/');

TASKS.forEach(function(task) {
  require('./tasks/' + task);
});
