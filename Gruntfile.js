'use strict';
module.exports = function(grunt) {
  //load helpers
  var helpers = require('./lib/helpers')(grunt);

  //load tasks
  grunt.loadTasks('./tasks');
  //register default task
  grunt.registerTask('default', ['sprite']);
  //register custom task
  helpers.registerTask('LVH', ['mobSite', 'webSite', 'payment']);
  helpers.registerTask('SD', ['mobSite', 'webSite']);
  helpers.registerTask('MD', ['payment']);
  helpers.registerTask('BN', ['webSite']);

  grunt.registerTask('spriteList', 'Get list themes...', function() {
    grunt.log.write(helpers.getThemesList());
  });
};