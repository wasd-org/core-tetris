const rollup = require('rollup')
const buble = require('rollup-plugin-buble')
const cjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

rollup
  .rollup({
    entry: 'src/index.js',
    plugins: [
      buble(),
      cjs(),
      resolve()
    ]
  })
  .then(bundle => {
    bundle.write({
      format: 'cjs',
      moduleName: 'core-tetris',
      dest: 'dist/core-tetris.js'
    })
  })
  .catch(err => {
    console.error(err)
  })
