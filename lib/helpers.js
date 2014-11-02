'use strict';
/**
* Grunt helpers
*
* @package    GruntJS
* @category   Helpers
* @author     Vitaly Rybka <vitaly.rybka@gmail.com>
* @license    ISC
*/
module.exports = function(grunt) {
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
  * Use for add cusom config in sprite
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
  return {
    registerTask: registerTask,
    addSprite: addSprite,
    addConfig: addConfig
  };
}