import babel from '@rollup/plugin-babel';
import packageJson from './package.json' assert { type: 'json' };

const dependencies = [
  ...Object.keys(packageJson.peerDependencies ?? {}),
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
];

export default {
  input: 'src/index.js',
  external: dependencies.map((name) => {
    return new RegExp(`^${name}(/.*)?`);
  }),

  plugins: [
    babel({
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      babelrc: false,
      configFile: false,
      presets: [
        [
          '@babel/preset-react',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
};
