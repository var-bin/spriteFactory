'use strict';
module.exports = function(grunt) {
  //load helpers
  var helpers = require('./lib/helpers')(grunt);

  //
  grunt.loadTasks('./tasks');
  
  grunt.registerTask('default', ['sprite']);

  helpers.registerTask('LVH');
};