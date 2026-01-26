#!/usr/bin/env node
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';
import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';

const dir = fileURLToPath(new URL('.', import.meta.url));

const pkg = JSON.parse(fs.readFileSync(`${dir}/package.json`, 'utf8'));

p.intro(
	`Welcome to the ${pc.bgBlueBright(pc.whiteBright('Jeebo'))} CLI! ${pc.gray(`(v${pkg.version})`)}`
);

await setTimeout(2000);

p.outro("You're all set!");
