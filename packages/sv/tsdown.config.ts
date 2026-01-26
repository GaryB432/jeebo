import path from 'node:path';
import { env } from 'node:process';
import { setTimeout } from 'node:timers/promises';
import { defineConfig } from 'tsdown';

export default defineConfig([
	{
		entry: ['./lib/index.ts', './lib/testing.ts', './bin.ts'],
		sourcemap: !env.CI,
		dts: {
			oxc: true
		},
		plugins: [],
		inputOptions: {
			experimental: {
				resolveNewUrlToAsset: false
			}
		},
		hooks: {
			async 'build:before'() {
				await buildCliTemplates();
			}
		}
	}
]);

async function buildTemplates(p: string) {
	console.log('taking forever to build', p);
	await setTimeout(1000);
}

export async function buildCliTemplates() {
	const start = performance.now();
	await buildTemplates(path.resolve('sv/dist'));
	await buildTemplates(path.resolve('sv/lib/create/dist'));
	const green = '\x1b[32m';
	const reset = '\x1b[0m';
	console.log(`${green}✔${reset} Templates built in ${Math.round(performance.now() - start)}ms`);
}
