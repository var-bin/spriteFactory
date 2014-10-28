//lsv1.js
'use strict';
var fs = require('fs'),
    path = require('path'),
    root = './site/spriteFactory',
    themes = {},
    spriteType = {
      _mobSite: {
        images: '_mobSite\\images',
        sprite: '_mobSite\\sprite'
      },
      _webSite: {
        images: '_webSite\\images',
        sprite: '_webSite\\sprite'
      },
      _payment: {
        images: '_payment\\images',
        sprite: '_payment\\sprite'
      }
    };
function ls(p) {
  function iter() {
    var dirs = fs.readdirSync(p);
    for(var i = 0; i < dirs.length; i++) {
      themes[dirs[i]] = path.normalize(p + path.sep + dirs[i]) + path.sep;
    }
    return themes;
  }
  return iter();
};
function _mobSite() {
  function imgSrc() {
    var src = [];
    for(var key in themes) {
      src.push(themes[key] + spriteType['_mobSite']['images'] + '\\*.png');
    }
    return src;
  };
  function destImg() {
    var src = [];
    for(var key in themes) {
      src.push(themes[key] + spriteType['_mobSite']['sprite'] + '\\sprite.png');
    }
    return src;
  };
  function destCSS() {
    var src = [];
    for(var key in themes) {
      src.push(themes[key] + spriteType['_mobSite']['sprite'] + '\\sprite.less');
    }
    return src;
  };
  return {
    imgSrc: imgSrc,
    destImg: destImg,
    destCSS: destCSS
  };
}

/*ls(root);
console.log(_mobSite().destImgToString(_mobSite().destImg()));*/

exports.ls = ls(root);
exports._mobSite = _mobSite;