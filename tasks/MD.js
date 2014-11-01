'use strict';
module.exports = function(grunt) {
  grunt.config('sprite', {
    mobSiteMD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/MD/_mobSite/images/*.png'],
      'destImg': '<%= basePath %>/MD/_mobSite/sprite/sprite.png',
      'destCSS': '<%= basePath %>/MD/_mobSite/sprite/sprite.less'
    },
    webSiteMD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/MD/_webSite/images/*.png'],
      'destImg': '<%= basePath %>/MD/_webSite/sprite/sprite.png',
      'destCSS': '<%= basePath %>/MD/_webSite/sprite/sprite.less'
    },
    paymentMD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/MD/_payment/images/*.png'],
      'destImg': '<%= basePath %>/MD/_payment/sprite/sprite.png',
      'destCSS': '<%= basePath %>/MD/_payment/sprite/sprite.less'
    }
  });
}