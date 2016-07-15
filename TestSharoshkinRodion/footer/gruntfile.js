module.exports = function(grunt) {
	
grunt.initConfig({
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['*.scss'],
        dest: 'css/dest',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/src/*.scss'],
      tasks: ['sass'],
    },
  },
  concat: {

      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dest/script.main.js'
      }
    },
	 uglify: {
      dist: {
        src: ['js/dest/script.main.js'],
        dest: 'js/dest/script.main.min.js'
      }
    },
});
	
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['concat','uglify']);

};