'use strict';
module.exports = function(grunt) {
  /*
  *
  */
  function registerTask(alias, tasks) {
    alias = alias || 'default',
    tasks = tasks || [];
    return grunt.registerTask(alias, ['sprite:mobSite' + alias, 'sprite:webSite' + alias, 'sprite:payment' + alias]);
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
          'src': basePath + '/' + theme + '/_' + type +'/images/*.png'],
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