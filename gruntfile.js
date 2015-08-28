//gruntfile.js

module.exports = function(grunt) {

	require('load-grunt-config')(grunt);

	grunt.registerTask('default', ['concat', 'connect', 'watch']);
};