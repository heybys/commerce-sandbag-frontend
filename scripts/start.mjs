#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';
import path from 'path';
import fs from 'fs';

const program = new Command();
program.name('pnpm run start');
program.addOption(new Option('-p, --port <port>', 'port for standalone server').default('3000'));
program.parse(process.argv);

const { port: PORT } = program.opts();

const svr = path.join('.next', 'standalone', 'server.js');

if (!fs.existsSync(svr)) {
  console.error('\x1b[31m✘\x1b[0m .next/standalone/server.js does not exist.\n');
  console.error('\x1b[31m✘\x1b[0m Please run \x1b[33mpnpm run build\x1b[0m first!\n');
  program.help();
  process.exit(1);
}

(async () => {
  try {
    await run('node', ['.next/standalone/server.js', '--port', PORT]);

    console.log('\x1b[32m✔\x1b[0m Finished start Next.js standalone mode!');
  } catch (err) {
    console.error(`\x1b[31m✘\x1b[0m Error: ${err.message}`);
    process.exit(1);
  }
})();
