import "phaser";
import { PreloadScene } from "./scripts/scenes/PreloadScene";
import { MenuScene } from "./scripts/scenes/MenuScene";
import { GameoverScene } from "./scripts/scenes/GameoverScene";
import { OverworldScene } from "./scripts/scenes/OverworldScene";
import { GameScene } from "./scripts/scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.WEBGL,
	width: 1920,
	height: 1080,
	disableContextMenu: true,
	mipmapFilter: "LINEAR_MIPMAP_LINEAR",
	scale: {
		mode: Phaser.Scale.FIT
	},
	scene: [
		PreloadScene,
		MenuScene,
		OverworldScene,
		GameScene,
		GameoverScene,
	],
	plugins: {
		global: [
		]
	}
};

const game = new Phaser.Game(config);