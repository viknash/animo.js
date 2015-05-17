module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  var concatAnim;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      options: {
        sourceMap: true
      },
      minify: {
        expand: true,
        src: ['*.css', '!*.min.css'],
        ext: '.min.css'
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      all: {
        files: {
          'animo.min.js': ['animo.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['animo.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['animate-animo.css'],
        tasks: ['cssmin']
      }

    }

  });

  grunt.loadNpmTasks('grunt-travis-lint');
  // register task
  grunt.registerTask('all', ['cssmin', 'uglify']);
  grunt.registerTask('default', ['all']);
  grunt.registerTask('travis', ['travis-lint', 'all']);
  grunt.registerTask('dev', ['watch']);

};