import { PluginOption } from 'vite';
import { rimrafSync } from 'rimraf';
import { writeFileSync } from 'fs';
import { build_path, title_dashed } from './util/constants';

export default function buildCleanup() {
	return {
		name: 'build-cleanup',
		apply: 'build',
		enforce: 'post',
		closeBundle: () => {
			rimrafSync(build_path);
			writeFileSync('./dist/meta.json', JSON.stringify({title_dashed}));
		},
	} as PluginOption;
}
