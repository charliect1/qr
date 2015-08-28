//connect.js

module.exports = {
	server: {
		options: {
			hostname: 'localhost',
			port: 3000,
			base: 'builds/development/',
			livereload: true,
			open: {
		        target: 'http://localhost:3000',
		        callback: function() {}
		    }
		}
	}
};