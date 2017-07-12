import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  dest: 'field-van.js',
  format: 'iife',
  moduleName: 'VAN',
  plugins: [
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': [
          'Component'
        ]
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ],
  external: [
    'react',
    'react-dom'
  ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
