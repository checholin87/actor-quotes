module.exports = function(grunt) {

	grunt.initConfig({
		browserify: {
			dist:{
				options:{
					transform:[['babelify', { 'presets':"es2015"}]]
				},
				files: {
					'./dist/app.js':['./src/client/index.js']
				}
			}
		},
		copy: {
			assets: {
				expand: true,
				cwd: 'public/',
				src: '**',
				dest: 'dist/'
			}
		},
		run: {
			server: {
				exec: 'json-server db.json --static ./dist'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-run');

	grunt.registerTask('build',['copy:assets', 'browserify']);
	grunt.registerTask('server',['build', 'run:server']);
	grunt.registerTask('default',['build']);

};
