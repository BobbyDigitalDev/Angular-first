module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');//loads the npm modules
  grunt.loadNmpTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({//fires up our modules with their options
    uglify: {//invokes the uglify module
      my_target:{//specifies our target dirs
        files: {
          '_/js/script.js': ['_/components/js/*.js']//minify's all js files it finds in the component/js file and shuttles the processed files to the main js file
        }//files
      }//my target
    },//uglify
    compass: {//files up the compass module
      dev: {
        options: {
          config: 'config.rb'//tells compass where to get the config file
        }//options
      }//dev
    },//compass
    watch: { //fires up the watch module
      options: {livereload: true}, //handy page reloader
      scripts: {
        files: ['_/components/js/*.js'],//watches for any changes to js files in the component folder
        tasks: ['uglify'] //runs the uglify task on the watched files
      },//scripts
      sass: {
        files: ['_/components/sass/*.scss'],//watches for any changes to the scss files
        tasks: ['compass:dev']//preprocessor for the sass to css
      },//sass
      html: {//watches for changes to any html files
        files: ['*.html']
      }//html
    }//watch
  });//initConfig
  grunt.registerTask('default', 'watch');//sets the default task to watch which processes all the files 
};//module exports