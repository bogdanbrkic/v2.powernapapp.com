module.exports = function(grunt) {

  "use strict";
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //*************
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true
        },
        files: {
          'build/css/master.css': 'build/css/master.css'
        }
      }
    },

    sass: {
      build: {
        files: {
          'build/css/master.css': 'css/sass/master.scss'
        }
      }
    },

    cssmin: {
      build: {
        src: ['bower_components/normalize.css/normalize.css', 'build/css/master.css'],
        dest: 'build/css/master.css'
      }
    },


    //*************
    // JS
    //*************
    concat: {
      options: {
        separator: ';', sourceMap: true,
      },
      dist: {
        src: ['bower_components/modernizr/modernizr.js' ,'js/plugins.js', 'js/classie.js', 'js/main.js' ],
        dest: 'build/js/base.js',
      },
    },

    uglify: {
      build: {
        files: {
          'build/js/base.min.js': ['build/js/base.js']
        }
      }
    },

    //*************
    // Watch
    //*************
    watch: {

      css: {
        files: ['css/sass/*.scss'],
        tasks: ['buildcss']
      }
      //,
      // js: {
      //   files: ['build/js/base.js'],
      //   tasks: ['buildjs']
      // }
    },

    //************
    // Imageoptim
    //*************
    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: false,
          quitAfter: true
        },
        src: ['img']
      }
    },

    //*************
    // CacheBurst
    //*************
    cacheBust: {
      files: {
        src: ['index.html']
      }
    }

  });

  //run all
  grunt.registerTask('all', ['buildjs', 'buildcss', 'imageoptim' , 'cacheBust']);
  grunt.registerTask('all--img', ['buildjs', 'buildcss', 'cacheBust']);


  //run small tasks:
  grunt.registerTask('buildsass', ['buildcss', 'cacheBust']);
  grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
  grunt.registerTask('buildjs',   ['concat', 'uglify']);
  grunt.registerTask('buildimgs', ['imageoptim']);

};
