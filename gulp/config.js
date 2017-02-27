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

  styles: {
    src: './app/styles/**/*.scss',
    dest: './build/css/',
  },

  templates: {
    component: './gulp/templates/EmptyComponent.js',
    html: './gulp/templates/EmptyComponent.html'
  },

};

export default config;
