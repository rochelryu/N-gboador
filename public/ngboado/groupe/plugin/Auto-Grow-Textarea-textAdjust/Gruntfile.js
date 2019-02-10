module.exports = function(grunt)
{

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: '<%= pkg.main %>.js',
        dest: '<%= pkg.main %>.min.js'
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register tasks
  grunt.registerTask('default', ['uglify']);

};