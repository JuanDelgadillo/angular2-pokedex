import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'public/app/main.js',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'es', // valid options are amd, cjs, es, iife, umd
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**'
      }),
      uglify()
  ]
}