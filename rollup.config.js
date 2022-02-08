import { uglify } from "rollup-plugin-uglify";
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import path from 'path'

import packageJSON from './package.json'

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

const getPath = _path => path.resolve(__dirname, _path)
export default {
  input: "src/index.ts",
  external: ['vuex'],
  output: [
    {
      file: packageJSON.main, // commonjs模块
      format: 'cjs',
      name: packageJSON.name,
    },
    {
      file: packageJSON.browser, // 通用模块
      format: 'umd',
      name: packageJSON.name,
      globals: {
        vuex: 'vuex'
      }
    },
    {
      name: packageJSON.name,
      file: packageJSON.module, // es模块
      format: "es",
    }
  ],
  plugins: [
    resolve(extensions),
    commonjs(),
    uglify(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: getPath('./tsconfig.json'),
      extensions
    })
  ]
};