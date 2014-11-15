'use strict';

var fs = require('fs'),
    path = require('path');
/**
* Grunt helpers
*
* @package    GruntJS
* @category   Helpers
* @author     Vitaly Rybka <vitaly.rybka@gmail.com>
* @license    ISC
*/
module.exports = function(grunt) {
  var list = [],
      root = path.resolve(__dirname, './../', 'site/spriteFactory');

  list = initThemesList();
  /**
  * return grunt.registerTask(alias, type)
  * 
  * registerTask('LVH', ['mobSite', 'webSite']);
  *
  * @param string alias - name of task for run by Grunt
  * @param array type - array of sprites type.
  */
  function registerTask(alias, type) {
    alias = alias || 'default';
    type = type || [];
    var typeLength = type.length;
    if(typeLength == 1) {
      return grunt.registerTask(alias, ['sprite:' + type + alias]);
    }
    else {
      for(var i = 0; i < typeLength; i++) {
        type[i] = 'sprite:' + type[i] + alias;
      }
      return grunt.registerTask(alias, type);
    }
  }
  /**
  * return grunt.config.set(prop, value);
  * 
  * addConfig('sprite', themes);
  *
  * @param string prop - config name
  * @param object value - object name for access to config value
  */
  function addConfig(prop, value) {
    prop = prop || '';
    value = value || {};
    return grunt.config.set(prop, value);
  }
  /**
  * Use for add custom config in sprite
  *
  * @param object obj - extend object name 
  * @param string type - type of sprite: 'mobSite', 'webSite', 'payment'
  * @param string theme - shortcut name of theme: Loveaholics LVH
  */
  function addSprite(obj, type, theme) {
    obj = obj || {};
    type = type || '';
    theme = theme || '';
    var basePath = './site/spriteFactory',
        options = {
          'cssTemplate': 'spritesmith-template.mustache',
          'padding': 2,
          'imgPath': '../images/sprite.png',
          'cssFormat': 'less',
          'algorithm': 'binary-tree',
          'src': [basePath + '/' + theme + '/_' + type +'/images/*.png'],
          'destImg': basePath + '/' + theme + '/_' + type +'/sprite/sprite.png',
          'destCSS': basePath + '/' + theme + '/_' + type +'/sprite/sprite.less'
        };
    return obj[type + theme] = options;
  }

  function initThemesList() {
    return fs.readdirSync(root).filter(function(file) {
      return fs.statSync(path.resolve(root, file)).isDirectory();
    });
  }

  function getThemesList() {
    var listLength = list.length;
    console.log('====== Start of list ======');
    list.forEach(function(v) {
      console.log(v);
    });
    return '======= End of list =======';
  }

  function initAddSprite(obj) {
    obj = obj || {};
    list.forEach(function(directory) {
      var subDir = path.resolve(root, directory);

      var subDirectories = fs.readdirSync(subDir).filter(function(file) {
        return fs.statSync(path.resolve(subDir, file)).isDirectory();
      });

      subDirectories.forEach(function(subDirectory){
        addSprite(obj, subDirectory.substr(1), directory);
      });
    });
  }
  return {
    registerTask: registerTask,
    addSprite: addSprite,
    addConfig: addConfig,
    getThemesList: getThemesList,
    initAddSprite: initAddSprite
  };
}