export interface Image {
	key: string;
	path: string;
}

export interface SpriteSheet {
	key: string;
	path: string;
	width: number;
	height: number;
}

export interface Audio {
	key: string;
	path: string;
	volume?: number;
	rate?: number;
}

const imageGlob = import.meta.glob<string>('./images/**/*.png', {query: '?url', import: 'default', eager: true});
export const image = (path: string, key: string): Image => {
	return { key, path: imageGlob[`./images/${path}.png`] };
}

export const spritesheet = (path: string, key: string, width: number, height: number): SpriteSheet => {
	return { key, width, height, path: imageGlob[`./images/${path}.png`] };
};

const musicGlob = import.meta.glob<string>('./music/**/*.mp3', {query: '?url', import: 'default', eager: true});
export const music = (path: string, key: string, volume?: number, rate?: number): Audio => {
	return { key, volume, rate, path: musicGlob[`./music/${path}.mp3`] };
}

const audioGlob = import.meta.glob<string>('./sounds/**/*.mp3', {query: '?url', import: 'default', eager: true});
export const sound = (path: string, key: string, volume?: number, rate?: number): Audio => {
	return { key, volume, rate, path: audioGlob[`./sounds/${path}.mp3`] };
}

const fontGlob = import.meta.glob<string>('./fonts/**/*.woff2', {query: '?url', import: 'default', eager: true});
export const loadFont = async (path: string, name: string) => {
	const face = new FontFace(name, `url(${fontGlob[`./fonts/${path}.woff2`]})`, {style: 'normal', weight: '400'});
	await face.load();
	document.fonts.add(face);
}

// Return interpolated color between two color1 and color2 at value (0-1)
export function interpolateColor(color1: number, color2: number, value: number): number {
	return Phaser.Display.Color.ObjectToColor(Phaser.Display.Color.Interpolate.ColorWithColor(Phaser.Display.Color.ValueToColor(color1), Phaser.Display.Color.ValueToColor(color2), 255, value * 255)).color;
}

// Convert hex number color to hex string color
export function colorToString(color: number): string {
	let c = Phaser.Display.Color.ValueToColor(color);
	return Phaser.Display.Color.RGBToString(c.red, c.green, c.blue);
}

// Convert hex string color to hex number color
export function colorToNumber(color: string): number {
	return Phaser.Display.Color.HexStringToColor(color).color;
}
