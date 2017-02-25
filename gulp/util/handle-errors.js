'use strict';

import notify from 'gulp-notify';

export default function(error) {
  if( !global.isProd ) {
    const args = Array.prototype.slice.call(arguments);
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end');
  } else {
    console.log(error);
    process.exit(1);
  }
};
