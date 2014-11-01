'use strict';
module.exports = function(grunt) {
  grunt.config('sprite', {
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
    paymentLVH: {
      'cssTemplate': 'spritesmith-template.mustache',
      'padding': 2,
      'imgPath': '../images/sprite.png',
      'cssFormat': 'less',
      'algorithm': 'binary-tree',
      'src': ['<%= basePath %>/LVH/_payment/images/*.png'],
      'destImg': '<%= basePath %>/LVH/_payment/sprite/sprite.png',
      'destCSS': '<%= basePath %>/LVH/_payment/sprite/sprite.less'
    }
  });
}