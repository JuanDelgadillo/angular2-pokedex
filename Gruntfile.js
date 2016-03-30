module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      project: {
        files: [
          'public/app/*.ts',
          'public/app/**/*.ts',
          'public/app/**/**/*.ts'
        ],
        tasks: ['shell']
      }
    },
    shell: {
        multiple: {
            command: [
                'tsc'
            ].join('&&')
        }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch', 'shell'])
}
