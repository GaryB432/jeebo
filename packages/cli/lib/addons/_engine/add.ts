import type { Addon, OptionValues, PackageManager } from 'sv/core';

export type InstallOptions<Addons extends AddonMap> = {
	cwd: string;
	addons: Addons;
	options: OptionMap<Addons>;
	packageManager?: PackageManager;
};

export type AddonMap = Record<string, Addon<any>>;
export type OptionMap<Addons extends AddonMap> = {
	[K in keyof Addons]: Partial<OptionValues<Addons[K]['options']>>;
};
