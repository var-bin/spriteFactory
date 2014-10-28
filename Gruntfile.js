'use strict';
module.exports = function(grunt) {
  var ls = require('./lsv1');
  grunt.initConfig({
    basePath: './site/spriteFactory',
    sprite: {
      mobSiteLVH: {
        'cssTemplate': 'spritesmith-template.mustache',
        'padding': 2,
        'imgPath': '../images/sprite.png',
        'cssFormat': 'less',
        'algorithm': 'binary-tree',
        'src': ['<%= basePath %>/LVH/_mobSite/images/*.png'],
        'destImg': '<%= basePath %>/LVH/_mobSite/sprite/sprite.png',
        'destCSS': '<%= basePath %>/LVH/_mobSite/sprite/sprite.less'
      },
      webSiteLVH: {
        'cssTemplate': 'spritesmith-template.mustache',
        'padding': 2,
        'imgPath': '../images/sprite.png',
        'cssFormat': 'less',
        'algorithm': 'binary-tree',
        'src': ['<%= basePath %>/LVH/_webSite/images/*.png'],
        'destImg': '<%= basePath %>/LVH/_webSite/sprite/sprite.png',
        'destCSS': '<%= basePath %>/LVH/_webSite/sprite/sprite.less'
      },
      payment: {
        'cssTemplate': 'spritesmith-template.mustache',
        'padding': 2,
        'imgPath': '../images/sprite.png',
        'cssFormat': 'less',
        'algorithm': 'binary-tree', 
        'src': ['<%= basePath %>/LVH/_payment/images/*.png'],
        'destImg': '<%= basePath %>/LVH/_payment/sprite/sprite.png',
        'destCSS': '<%= basePath %>/LVH/_payment/sprite/sprite.less'
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
  grunt.registerTask('mobSiteLVH', ['sprite:mobSiteLVH']);
  grunt.registerTask('webSiteLVH', ['sprite:webSiteLVH']);
  grunt.registerTask('paymentLVH', ['sprite:paymentLVH']);
};