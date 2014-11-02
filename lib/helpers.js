'use strict';
module.exports = function(grunt) {
  /*
  *
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

  function addConfig(prop, value) {
    prop = prop || '';
    value = value || {};
    return grunt.config.set(prop, value);
  }

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