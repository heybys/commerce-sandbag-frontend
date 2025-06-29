#!/usr/bin/env node

import { run } from './helper.mjs';
import { Command, Option } from 'commander';

const program = new Command();
program.name('start');
program.description(`Start Next.js standalone`);
program.addOption(new Option('-p, --port <port>', 'port for standalone server').default('3000'));
program.parse(process.argv);

const { port: PORT } = program.opts();

(async () => {
  try {
    await run('node', ['.next/standalone/server.js', '--port', PORT]);

    console.log('\n✅ Finished start Next.js standalone!');
  } catch (err) {
    console.error(`\n❌ Error: ${err.message}`);
    process.exit(1);
  }
})();
