//use-lsv1.js
'use strict';
var root = './site/spriteFactory',
    ls = require('./lsv1'),
    themes = ls.ls(root),
    spriteType = {
      _mobSite: '_mobSite\\sprite',
      _webSite: '_webSite\\sprite',
      _payment: '_payment\\sprite'
    };
for(var key in themes) {
  console.log(key, themes[key] + spriteType["_webSite"]);
}