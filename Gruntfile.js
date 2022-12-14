module.exports = function(grunt) {
  require("jit-grunt")(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "assets/css/styles.min.css": "assets/less/styles.less"
        }
      }
    },
    watch: {
      styles: {
        files: ["assets/less/**/*.less"], // which files to watch
        tasks: ["less"],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask("default", ["less", "watch"]);
};