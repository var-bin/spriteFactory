'use strict';
module.exports = function(grunt) {
  var ls = require('./lsv1');
  grunt.initConfig({
    sprite: {
      mobSite: {
        src: ls._mobSite().imgSrc(),
        destImg: ls._mobSite().destImg(),
        destCSS: ls._mobSite().destCSS(),
        padding: 2,
        imgPath: '../images/sprite.png',
        cssTemplate: 'spritesmith-template.mustache',
        cssFormat: 'less'
      }
    }
  });
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['sprite']);
};