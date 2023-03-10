import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { cwd } from 'node:process';
import { parseArgs } from 'node:util';
import babel from '@rollup/plugin-babel';
import chalk from 'chalk';
import ora from 'ora';
import { rollup, watch } from 'rollup';

const args = parseArgs({
  strict: true,
  options: {
    input: {
      type: 'string',
      short: 'i',
    },
    watch: {
      type: 'boolean',
      short: 'w',
      default: false,
    },
  },
});

if (!args.values.input) {
  throw new Error('Expected an input filepath to be provided with --input');
}

const workspace = cwd();
const OUT_DIR = path.join(workspace, 'dist');

if (existsSync(OUT_DIR)) {
  await fs.rm(OUT_DIR, { recursive: true });
}
await fs.mkdir(OUT_DIR);

const packageJsonPath = path.join(workspace, 'package.json');
const packageJson = await fs.readFile(packageJsonPath).then((contents) => {
  return JSON.parse(contents);
});
const dependencies = [
  ...Object.keys(packageJson.peerDependencies ?? {}),
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
];
const rollupConfig = {
  input: args.values.input,
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
      plugins: [
        '@babel/plugin-transform-runtime',
        'babel-plugin-dev-expression',
      ],
    }),
  ],
  output: {
    format: 'esm',
    file: path.join(OUT_DIR, 'index.js'),
  },
};

if (args.values.watch) {
  const watcher = watch(rollupConfig);
  const spinner = ora();

  watcher.on('event', (event) => {
    if (event.code === 'BUNDLE_START') {
      spinner.start('Bundling 🚧');
    }

    if (event.code === 'BUNDLE_END') {
      spinner.succeed(`Bundled ✨\n${chalk.gray('Waiting for changes...')}`);
    }

    if (event.code === 'ERROR') {
      spinner.fail(event.error.message);
    }
  });

  watcher.on('event', ({ result }) => {
    if (result) {
      result.close();
    }
  });
} else {
  const spinner = ora().start('Bundling 🚧');
  const start = Date.now();

  const bundle = await rollup(rollupConfig);
  await bundle.write(rollupConfig.output);

  const duration = chalk.gray(`${Date.now() - start}ms`);
  spinner.succeed(`Bundled ✨ ${duration}`);
}
