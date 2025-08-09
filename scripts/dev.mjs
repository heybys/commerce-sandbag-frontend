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

let { env: ENV } = program.opts();

if (!ENV) {
  ENV = 'on-local';
  console.log('\x1b[33m!\x1b[0m No environment specified, defaulting to \'on-local\'');
  console.log('\x1b[36mi\x1b[0m To use other environments, run with: -e dev | -e stg | -e prd\n');
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
