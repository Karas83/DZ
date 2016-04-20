module.exports = function(grunt) {

  grunt.initConfig({
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
	cssmin: {
	 target: {
      files: [{
       expand: true,
       cwd: 'css/',
       src: ['*.css', '!*.min.css'],
       dest: 'css/',
       ext: '.min.css'
    }]
  }
}
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat','uglify','cssmin']);

};