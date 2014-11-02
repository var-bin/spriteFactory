'use strict';
var themes = {};

module.exports = function(grunt) {
  //load helpers
  var helpers = require('../lib/helpers')(grunt);

  //LVH
  helpers.addSprite(themes, 'mobSite', 'LVH');
  helpers.addSprite(themes, 'webSite', 'LVH');
  helpers.addSprite(themes, 'payment', 'LVH');
  //SD
  helpers.addSprite(themes, 'mobSite', 'SD');
  helpers.addSprite(themes, 'webSite', 'SD');
  //MD
  helpers.addSprite(themes, 'payment', 'MD');
  //BN
  helpers.addSprite(themes, 'webSite', 'BN');

  /* 
  * !!! add config to grunt.initConfig !!!
  * -------------------------------------------
  * If you call helpers.addConfig(prop, value)
  * then you'll set that property and its corresponding
  * value on the grunt.initConfig object
  */
  helpers.addConfig('sprite', themes);

  //load task for spritesmith
  grunt.loadNpmTasks('grunt-spritesmith');
}