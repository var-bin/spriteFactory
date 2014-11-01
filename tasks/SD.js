'use strict';
module.exports = function(grunt) {
  grunt.config('sprite', {
    mobSiteSD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/SD/_mobSite/images/*.png'],
      'destImg': '<%= basePath %>/SD/_mobSite/sprite/sprite.png',
      'destCSS': '<%= basePath %>/SD/_mobSite/sprite/sprite.less'
    },
    webSiteSD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/SD/_webSite/images/*.png'],
      'destImg': '<%= basePath %>/SD/_webSite/sprite/sprite.png',
      'destCSS': '<%= basePath %>/SD/_webSite/sprite/sprite.less'
    },
    paymentSD: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/SD/_payment/images/*.png'],
      'destImg': '<%= basePath %>/SD/_payment/sprite/sprite.png',
      'destCSS': '<%= basePath %>/SD/_payment/sprite/sprite.less'
    }
  });
}