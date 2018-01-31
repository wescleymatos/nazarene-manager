module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      temp: [
        'public/js/dist/libs.js',
        'public/js/dist/main.js',
        'public/js/dist/main.js.map'
      ],
      all: [
        'public/js/dist/*.js'
      ]
    },
    jshint: {
      options: {
        esversion: 6
      },
      app: {
        src: [
          'public/js/app/**/*.js',
          'Gruntfile.js'
        ]
      }
    },
    concat: {
      app: {
        src: [
          'public/js/app/app.js',
          'public/js/app/models/*.js',
          //'public/js/app/collections/*.js'
          'public/js/app/views/*.js',
          'public/js/app/controllers/*.js',
          'public/js/app/dispatch.js'
        ],
        dest: 'public/js/dist/main.js'
      },
      libs: {
        src: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js',
          'node_modules/admin-lte/plugins/fastclick/fastclick.min.js',
          'node_modules/admin-lte/dist/js/adminlte.js',
          'node_modules/admin-lte/plugins/sparkline/jquery.sparkline.min.js',
          'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
          'node_modules/sweetalert/dist/sweetalert.min.js',
          'node_modules/inputmask/dist/min/jquery.inputmask.bundle.min.js',
          'node_modules/underscore/underscore-min.js',
          'node_modules/backbone/backbone-min.js',
          'node_modules/handlebars/dist/handlebars.min.js',
          'node_modules/bootstrap-table/dist/bootstrap-table.min.js',
          'node_modules/bootstrap-table/dist/bootstrap-table-locale-all.min.js'
        ],
        dest: 'public/js/dist/libs.js'
      }
    },
    uglify: {
      dist: {
        src: [
          'public/js/dist/libs.js',
          'public/js/dist/main.js'
        ],
        dest: 'public/js/dist/app.min.js'
      }
    },
    cssmin: {
      all: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/admin-lte/dist/css/AdminLTE.min.css',
          'node_modules/admin-lte/dist/css/skins/skin-blue.min.css',
          'node_modules/bootstrap-table/dist/bootstrap-table.min.css',
          'node_modules/sweetalert/dist/sweetalert.css'
        ],
        dest: 'public/css/style.min.css'
      }
    },
    watch: {
      scripts: {
        files: ['public/js/app/**/*.js'],
        tasks: ['dev'],
        options: {
          spawn: false,
        },
      },
    },
    processhtml: {
      dist: {
        files: {
          'views/partials/footer.ejs': ['views/partials/footer.ejs'],
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: {
          'public/js/dist/main.js': 'public/js/dist/main.js'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'views/accounts/login.ejs': 'views/accounts/login.ejs'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('dev', ['jshint:app', 'concat:libs', 'concat:app', 'cssmin']);
  grunt.registerTask('default', ['jshint:app', 'clean:all', 'concat:libs', 'concat:app', 'babel', 'uglify', 'cssmin', 'clean:temp']);
  grunt.registerTask('build', ['clean:all', 'concat:libs', 'concat:app', 'babel', 'uglify', 'cssmin', 'clean:temp', 'processhtml:dist']);
};
