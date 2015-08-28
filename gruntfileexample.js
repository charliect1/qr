module.exports = function(grunt) {
	grunt.initConfig({
		concat : {
			//task name can be called anything
			options: {
				separator: '\n\n//-----------------------------------------------\n',
				banner: '\n\n//-----------------------------------------------\n'

			},
			dist: {
			//specifies a job can be called anything
				src: {'components/scripts/*'};		// * means any file within that folder
				//location of the place that we want to put together
				dest: 'builds/development/js/script.js'
				//destination where everything should be stored once its processed
			},//concat
			prod: {
				src:{'components/scripts/'};
				dest: 'builds/production/js/scripts.js'
			},
			//prod: an example that multiple can be run
			sass:{
				dist: {
					options: {
						style: 'compressed'
					},
					files: [{
						src: 'componets/sass/style.scss'
					}]
				}
			},  //sass 
			connect: {
				server: {
					options: {
						hostname: 'localhost',
						port: 3000,
						base: 'builds/development/',
						livereload: true;
					}
				}
			},
			watch: {
				options: {
					spawn: false,
					livereload: true,
				}
				scripts: {
					files: ['builds/development/**/*.html',
							'componets/scripts/**/*.js',
							'componets/sass/**/*.scss'];
				}
				task: ['concat','sass', 'connect', 'watch']
			}
		}




	}); //init Config
	grunt.leadNpmTask('grunt-contrib-concat');
	//means that we are going to combine files together
	grunt.leadNpmTask('grunt-sass');
	grunt.leadNpmTask('grunt-contrib-watch');
	grunt.leadNpmTask('grunt-contrib-connect');


	grunt.registerTask('default', ['concat', 'sass']);
	//default task that can take an array in which if you had more task you could put them in the order you want them to run

}; //wrapper function