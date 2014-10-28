//fs-lab.js
'use strict';
var fs = require('fs'),
    path = require('path');
function ls() {
  var root = __dirname;
  return root;
}

function list(p) {
  p = p || __dirname;
  var dirs = [];

  fs.readdir(p, function(err, files) {
    if(err) {
      throw new Error('Can\'t read' + p);
    }
  });
}

function getDirs(d) {
  d = d || '';
  var dirs = [];
  dirs.push(d);
}

function getFiles(f) {
  f = f || '';
  var files = [];
  files.push(f);
}

console.log(list(ls()));
//console.log(ls());