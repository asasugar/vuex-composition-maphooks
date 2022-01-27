import { uglify } from "rollup-plugin-uglify";
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path'

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

const getPath = _path => path.resolve(__dirname, _path)
export default {
  input: "src/index.ts",
  external: ['vuex'],
  output: {
    file: "dist/index.js",
    format: "es",
  },
  plugins: [
    resolve(extensions),
    uglify(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: getPath('./tsconfig.json'),
      extensions
    })
  ]
};