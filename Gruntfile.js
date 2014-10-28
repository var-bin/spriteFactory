'use strict';
module.exports = function(grunt) {
  var ls = require('./lsv1');
  var basePath: './site/spriteFactory';
  grunt.initConfig({
    sprite: {
      options: {
        'cssTemplate': 'spritesmith-template.mustache',
        'padding': 2,
        'imgPath': '../images/sprite.png',
        'cssFormat': 'less',
      },
      mobSiteLVH: {
        'src': ['<%= basePath %>/LVH/_mobSite/images/*.png'],
      },
      webSiteLVH: {

      },
      paymentLVH: {

      }
    }
    /*sprite: {
      mobSite: {
        src: ls._mobSite().imgSrc(),
        destImg: ls._mobSite().destImg(),
        destCSS: ls._mobSite().destCSS(),
        padding: 2,
        imgPath: '../images/sprite.png',
        cssTemplate: 'spritesmith-template.mustache',
        cssFormat: 'less'
      }
    }*/

  });
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['sprite']);
};