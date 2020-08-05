import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './index.ts',
    output: {
      file: './index.js',
      format: 'cjs',
      exports: 'default',
    },
    external: ['xregexp'],
    plugins: [
      typescript({
        tsconfigDefaults: {
          compilerOptions: {
            declaration: true,
          },
        },
      }),
    ],
  },
  {
    input: './index.ts',
    output: {
      file: './index.mjs',
      format: 'es',
    },
    external: ['xregexp'],
    plugins: [typescript()],
  },
  {
    input: './index.ts',
    output: {
      file: './index.iife.js',
      format: 'iife',
      name: 'raattori',
    },
    plugins: [
      commonjs(),
      nodeResolve({ browser: true }),
      typescript(),
      terser(),
    ],
  },
];
