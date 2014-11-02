//obj-extend.js
'use strict';
var themes = {
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
  },
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
  },
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
}

function getThemes(obj) {
  obj = obj || {};
  for (var item in obj) {
    console.log(item, ':', obj[item]);
  }
};

getThemes(themes);