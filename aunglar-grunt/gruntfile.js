module.exports = function(grunt){
	//Project.configuration.
	grunt.initConfig({
		jshint:{
			all:['controller.js']
		}, 
		// Concatena los archivos en un solo JS
		concat:{
			dis: {
				src: ['controller.js', 'script1.js', 'script2.js'],
				dest: 'unidos.js'
				}
			},
		//Minimifica el archivo js
		uglify:{
			dist:{
				src: 'unidos.js',
				dest: 'build/unidos.min.js'
				}
			},
		//
		shell: {
			multiple: {
				command: [
					'del unidos.js',
					'mkdir deploy',
					'move build\\unidos.min.js deploy\\unidos.min.js'
				].join('&&')
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	//default task.
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);
};