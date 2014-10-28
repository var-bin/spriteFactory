//ls.js
'use strict';
var fs = require('fs'),
    path = require('path'),
    root = '.' + path.sep + 'spriteFactory';
    var myObj = {};
function ls(p) {
  return function() {
    fs.readdir(p, function(err, files) {
      if(err) {
        console.log('Error' + err);
      }
      for(var i = 0; i < files.length; i++) {
        if(files[i] == 'undefined') {
          break;
        }
        pushToArray(files[i]);
      }
    });
  };
  function pushToArray(item) {
    ls(p + path.sep + item)();
    var str, obj = {};
    if(item == 'sprite') {
      str = path.normalize(p + path.sep + item);
    }
    else {
      return false;
    }
    obj[str.split('\\')[1]] = str;
    console.log(obj);
  }
};

ls(root)();
