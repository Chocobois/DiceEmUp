import { PluginOption } from 'vite';
import { title, title_dashed, game_dir, build_path, git_count,
		description, git_version, team, year_copyright } from './constants';
import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { NtExecutable, NtExecutableResource, Data, Resource } from 'resedit';
import pngToIco from 'png-to-ico';

const BuildWinApp = async () => {
	console.log(`Packaging Windows exe...`);

	const out_dir = `./dist/win/${title_dashed}`;

	mkdirSync('./dist/win');
	mkdirSync(out_dir);
	copyFileSync(`${build_path}/resources.neu`, `${out_dir}/resources.neu`);

	const data = readFileSync(`${build_path}/${game_dir}-win_x64.exe`);
	const exe = NtExecutable.from(data);
	const res = NtExecutableResource.from(exe);

	const pngData = readFileSync('./src/public/icon.png');
	const iconFile = Data.IconFile.from(await pngToIco(pngData));
	Resource.IconGroupEntry.replaceIconsForResource(
		res.entries, 101, 1033,
		iconFile.icons.map((item) => item.data)
	);

	const vi = Resource.VersionInfo.createEmpty();
	vi.setFileVersion(0, 0, Number(git_count), 0, 1033);
	vi.setStringValues(
		{ lang: 1033, codepage: 1200 },
		{
			FileDescription: description,
			ProductName: title,
			ProductVersion: git_version,
			CompanyName: team,
			LegalCopyright: `© ${team} ${year_copyright}`,
		}
	);
	vi.outputToResourceEntries(res.entries);

	res.outputResource(exe);
	writeFileSync(`${out_dir}/${title}.exe`, Buffer.from(exe.generate()));
};

export default function buildWinApp() {
	return {
		name: 'build-windows-bundle',
		apply: 'build',
		enforce: 'pre',
		closeBundle: {
			handler: BuildWinApp,
			sequential: true
		},
	} as PluginOption;
}
