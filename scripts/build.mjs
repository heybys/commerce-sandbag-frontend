#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';
import fs from 'fs';
import path from 'path';
import * as dotenvFlow from 'dotenv-flow';
import { cp } from 'node:fs/promises';

const ENVIRONMENTS = ['on-local', 'dev', 'stg', 'prd'];

const program = new Command();
program.name('pnpm run build');
program.addOption(new Option('-e, --env <env>', `environment to build`).choices(ENVIRONMENTS));
program.parse(process.argv);

const { env: ENV } = program.opts();

if (!ENV) {
  console.error("\x1b[31m✘\x1b[0m error: required option \'-e, --env <env>\' not specified\n");
  program.help();
  process.exit(1);
}

dotenvFlow.config({ node_env: ENV });
console.log(`\x1b[32m✔\x1b[0m Loaded .env.${ENV} file.\n`);

(async () => {
  try {
    await run('rm', ['-rf', '.next']);

    await cp(`.env.${ENV}`, '.env.production');

    await run('next', ['build']);

    const standaloneDir = path.join('.next', 'standalone');

    const publicSrc = path.join(process.cwd(), 'public');
    const publicDest = path.join(standaloneDir, 'public');
    await cp(publicSrc, publicDest, { recursive: true });

    const staticSrc = path.join(process.cwd(), '.next', 'static');
    const staticDest = path.join(standaloneDir, '.next', 'static');
    await cp(staticSrc, staticDest, { recursive: true });

    const svr = path.join(standaloneDir, 'server.js');
    if (fs.existsSync(svr)) {
      const sizeMB = (fs.statSync(svr).size / 1024 / 1024).toFixed(2);
      console.log(`\x1b[32m✔\x1b[0m standalone/server.js: ${sizeMB} MB\n`);
    }
    console.log('\x1b[32m✔\x1b[0m Finished build Next.js standalone mode!\n');

    console.log('\x1b[36mⓘ\x1b[0m You can now start the standalone server with \x1b[33mpnpm run start\x1b[0m.\n');
  } catch (err) {
    console.error(`\x1b[31m✘\x1b[0m Error: ${err.message}`);
    process.exit(1);
  }
})();
