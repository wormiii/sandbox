module.exports = function(grunt) {

  grunt.registerTask('speak', function() 
    {
      console.log("I'm speaking");
    });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        beautify: false
      },
      build: {
        src: 'js/*.js',
        dest: 'dist/*.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};

