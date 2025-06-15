#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';
import dotenvFlow from 'dotenv-flow';
import fs from 'fs';
import path from 'path';

const ENVIRONMENTS = ['development', 'stage', 'production'];

const program = new Command();
program.name('build');
program.description(`Build Next.js standalone for ${ENVIRONMENTS.join('/')}`);
program.addOption(
  new Option('-e, --env <env>', `environment to deploy (${ENVIRONMENTS.join('|')})`)
    .default('development')
    .choices(ENVIRONMENTS),
);
program.parse(process.argv);

const { env: ENV } = program.opts();

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

    console.log('\n✅ Finished build Next.js standalone!');
  } catch (err) {
    console.error(`\n❌ Error: ${err.message}`);
    process.exit(1);
  }
})();
