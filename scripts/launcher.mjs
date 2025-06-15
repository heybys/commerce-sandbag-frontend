#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';
import dotenvFlow from 'dotenv-flow';
import fs from 'fs';
import path from 'path';

const ENVIRONMENTS = ['development', 'stage', 'production'];

const program = new Command();
program.name('launcher');
program.description(`Build & run Next.js standalone for ${ENVIRONMENTS.join('/')}`);
program.addOption(
  new Option('-e, --env <env>', `environment to deploy (${ENVIRONMENTS.join('|')})`)
    .default('development')
    .choices(ENVIRONMENTS),
);
program.addOption(new Option('-p, --port <port>', 'port for standalone server').default('3000'));
program.parse(process.argv);

const { env: ENV, port: PORT } = program.opts();

dotenvFlow.config({ node_env: ENV });
console.log(`▶ Loaded .env for NODE_ENV="${ENV}"\n`);

(async () => {
  try {
    await run('rm', ['-rf', '.next']);

    // build
    await run('next', ['build'], { env: { ...process.env } });

    // check output
    const svr = path.join('.next', 'standalone', 'server.js');
    if (fs.existsSync(svr)) {
      const sizeMB = (fs.statSync(svr).size / 1024 / 1024).toFixed(2);
      console.log(`ℹ️  standalone/server.js: ${sizeMB} MB`);
    }

    // start
    // const serverPath = path.join('.next', 'standalone', 'server.js');
    await run('node', ['.next/standalone/server.js', '--port', PORT]);
    // const serverPath = path.join('./node_modules/.bin/next');
    // await run('node', ['-r', './node_modules/.bin/next', 'start', '-p', '80']);

    console.log('\n✅ Finished launching Next.js standalone!');
  } catch (err) {
    console.error(`\n❌ Error: ${err.message}`);
    process.exit(1);
  }
})();
