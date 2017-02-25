'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: './build/',

  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/',
    gulp: './gulp/**/*.js',
  },

  sampleHTML: {
    src: './app/sample-html/**/*.html',
    base: './app/sample-html/'
  },

};

export default config;
