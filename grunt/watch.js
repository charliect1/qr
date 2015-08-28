module.exports = {
  		
	options: {
		spawn: false,
		livereload: true
	},
	scripts: {
		files: ['builds/development/**/*.html',
		'components/scripts/**/*.js',
		'components/sass/**/*.scss'],
		tasks: ['concat', 'sass'],
		options: {
      		spawn: false
    	}
	}
		
};