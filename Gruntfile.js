module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js', 'js/*.js']
    },
    watch: {
      files: ['**/*','src/**/*.js', 'spec/**/*.js', 'js/*.js', '*.js'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  grunt.loadNpmTasks('grunt-contrib-watch');

};