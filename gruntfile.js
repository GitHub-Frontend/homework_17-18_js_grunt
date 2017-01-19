module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      },
      css: {
        src: ["css/*.css"],
        dest: "dist_css/styles.main.css"
      },
    },
    uglify:{
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },
    cssmin: {
     target: {
       files: {
         'dist_css/style.main.min.css': ['dist_css/styles.main.css']
       }
     }
   },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
