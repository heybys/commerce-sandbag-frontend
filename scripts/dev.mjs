#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';
import { cp } from 'node:fs/promises';

const ENVIRONMENTS = ['on-local', 'dev', 'stg', 'prd'];

const program = new Command();
program.name('pnpm run local');
program.addOption(
    new Option('-e, --env <env>', `environment to develop`)
    .choices(ENVIRONMENTS),
);
program.parse(process.argv);

const { env: ENV } = program.opts();

if (!ENV) {
  console.error("\x1b[31m✘\x1b[0m error: required option \'-e, --env <env>\' not specified\n");
  program.help();
  process.exit(1);
}

(async () => {
  try {
    await cp(`.env.${ENV}`, '.env.development');

    await run('next', ['dev']);

    console.log('\x1b[32m✔\x1b[0m Finished start Next.js development mode!');
  } catch (err) {
    console.error(`\x1b[31m✘\x1b[0m Error: ${err.message}`);
    process.exit(1);
  }
})();
