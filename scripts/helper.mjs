#!/usr/bin/env node

import {spawn} from "child_process";

export function run(cmd, args, opts = {}) {
  console.log(`→ ${cmd} ${args.join(' ')}`);

  return new Promise((resolve, reject) => {
    const childProcess = spawn(cmd, args, { stdio: 'inherit', ...opts });

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      }
      reject(new Error(`${cmd} exited ${code}`));
    });
    childProcess.on('error', (err) => {
      reject(err);
    });
    childProcess.stdout?.on('data', (data) => {
      console.log(`Received data ${data}`);
    });
    childProcess.stderr?.on('data', (data) => {
      console.log(`Received data ${data}`);
    });
  });
}