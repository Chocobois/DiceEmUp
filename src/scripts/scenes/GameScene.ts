import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";
import { Grid } from "./../components/Grid";
import { Music } from "./../components/Music";
// import { Background } from "../components/Background";
import { UI } from "../components/UI";
import { Particles } from "../components/Particles";
import { Player } from "../components/Player";
import { Enemy, EnemyKinds, EnemyType } from "../components/Enemy";
import { Dice, DiceStyle, diceStyles } from "../components/Dice";
import { AttackButton } from "../components/AttackButton";
import { MiniButton } from "../components/MiniButton";
import { Dragon } from "../components/Dragon";
import { GrayScalePostFilter } from "../pipelines/GrayScalePostFilter";
import { interpolateColor } from "../utils";
import { GRID_COLS, GRID_ROWS, GRID_LEFT, GRID_TOP, CELL_WIDTH, CELL_HEIGHT } from "../constants";

import level from "../components/Levels";


enum State {
	ThrowDice,
	MoveDice,
	DamagePhase,
	MovementPhase,
	AttackPhase,
	GameOverPhase,
}


export class GameScene extends BaseScene {
	public state: State;

	// Background
	// public background: Background;
	public bg_shadow: Phaser.GameObjects.Image;
	public grid: Grid;
	public dices: Dice[];
	public enemies: Enemy[];
	public dragon: Dragon;
	public attackButton: AttackButton;
	public musicButton: MiniButton;
	public audioButton: MiniButton;
	public resetButton: MiniButton;

	// UI texts
	private ui: UI;
	public overlayText: Phaser.GameObjects.Text;

	// Enemies
	// private enemies: Enemy[];

	// Particles
	public particles: Particles;

	// public sounds: Map<string, Phaser.Sound.BaseSound>;
	// public sounds: {[key: string]: Phaser.Sound.WebAudioSound};
	public music: Music;
	public music_light: Music;
	public music_isFull: Boolean;
	public ambience: Music;

	// Score
	public score: number;
	public highscore: number;
	public initialHighscore: number;
	public highscoreFanfarePlayed: boolean;

	public round: number;


	constructor() {
		super({key: "GameScene"});
	}

	init(data): void {
	}

	create(): void {
		this.fade(false, 1000, 0x000000);

		this.round = 0;
		this.state = State.MovementPhase;
		this.initAnimations();

		this.cameras.main.resetPostPipeline();

		// Backgrounds
		let bg = this.add.image(this.CX, this.CY, 'bg_town');
		this.containToScreen(bg);
		this.bg_shadow = this.add.image(this.CX, this.CY, 'bg_shadow');
		this.containToScreen(this.bg_shadow);
		let fg = this.add.image(this.CX, this.CY, 'fg_town');
		this.containToScreen(fg);
		fg.setDepth(1000);

		this.dragon = new Dragon(this, -2, this.CY);
		this.dragon.setDepth(10);
		this.dragon.on('throw', this.onDragonThrow, this);
		this.dragon.on('death', this.onDragonDeath, this);

		// Grid
		this.grid = new Grid(this);

		this.dices = [];
		this.enemies = [];

		this.attackButton = new AttackButton(this, GRID_LEFT+CELL_WIDTH*(GRID_ROWS+1)/2, GRID_TOP - 60);
		this.attackButton.setVisible(false);
		this.attackButton.on('click', this.onAttack, this);

		const bsize = 35;
		this.musicButton = new MiniButton(this, this.W-2.5*bsize, 0.8*bsize, 'music');
		this.musicButton.on('click', (active: boolean) => {
			this.musicButton.toggle();
			this.music.volume 			= (this.musicButton.active ? (this.music_isFull ? 0.25 : 0.0001) : 0);
			this.music_light.volume = (this.musicButton.active ? (this.music_isFull ? 0.0001 : 0.25) : 0);
			this.ambience.volume = (this.musicButton.active ? 0.35 : 0);
		}, this);
		this.audioButton = new MiniButton(this, this.W-bsize, 0.8*bsize, 'audio');
		this.audioButton.on('click', (active: boolean) => {
			this.audioButton.toggle();
			this.sound.mute = !this.audioButton.active;
		}, this);

		// Temporary reset button
		this.resetButton = new MiniButton(this, bsize, 0.8*bsize, 'reset');
		this.resetButton.on('click', (active: boolean) => {
			this.dragon.damage(10000000);
		}, this);
		this.resetButton.toggle();
		this.resetButton.setAlpha(0.3);


		// UI
		this.ui = new UI(this);
		this.ui.setDepth(10000);

		this.overlayText = this.createText(this.W/2 + 0.5, this.H/2 + 0.5, 32, "#fff", "Overlay");
		this.overlayText.setOrigin(0.5);
		this.overlayText.setStroke("#000", 5);
		this.overlayText.setDepth(20);
		this.overlayText.setAlpha(0);

		// Characters
		// this.player = new Player(this, this.CX, this.CY);
		// this.player.setDepth(PLAYER_LAYER);

		// this.enemies = [];

		this.particles = new Particles(this);
		this.particles.setDepth(1000);


		// Touch controls
		this.input.addPointer(2);

		this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
			// if (!this.player.isTouched) {
			// 	this.player.touchStart(pointer.x, pointer.y);
			// 	touchId = pointer.id;
			// 	touchButton = pointer.button;
			// }
			// else if (this.player.isTouched && !this.player.isTapped) { // Allow second touch to toggle
			// 	this.onDayToggle();
			// }
		});
		this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
			// if (touchId == pointer.id) {
			// 	this.player.touchDrag(pointer.x, pointer.y);
			// }
		});
		this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
			for (let dice of this.dices) {
				if (dice.dragging) {
					dice.onRelease();
				}
			}
			// if (touchId == pointer.id && touchButton == pointer.button) {
			// 	// this.ui.debug.setText(`${new Date().getTime()} - id:${pointer.id} button:${pointer.button}`);
			// 	this.player.touchEnd(pointer.x, pointer.y);
			// }
		});

		// this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', this.onDayToggle, this);


		// Sounds

		// this.loadSounds();
		this.music = new Music(this, 'm_main_music', { volume: 0.00001 });
		this.music_light = new Music(this, 'm_main_music_light', { volume: 0.25 });
		this.ambience = new Music(this, 'm_city_ambience', { volume: 0.35 });
		this.music.play();
		this.music_light.play();
		this.ambience.play();
		this.music_isFull = false;


		this.score = 0;
		this.highscore = 0;
		this.highscoreFanfarePlayed = false;
		this.loadHighscore();
		this.onNewRound();
	}

	update(timeMs: number, deltaMs: number) {
		this.dragon.update(timeMs, deltaMs);
		for (const dice of this.dices) {
			dice.update(timeMs, deltaMs);
		}
		for (const enemy of this.enemies) {
			enemy.update(timeMs, deltaMs);
		}
		this.attackButton.update(timeMs, deltaMs);
		this.musicButton.update(timeMs, deltaMs);
		this.audioButton.update(timeMs, deltaMs);
		this.resetButton.update(timeMs, deltaMs);
		this.particles.update(timeMs/1000, deltaMs/1000);
		this.ui.update(timeMs/1000, deltaMs/1000);
		this.grid.update(timeMs/1000, deltaMs/1000);

		// Camera shake
		if (this.cameraShakeValue > 0) {
			this.cameras.main.x = this.cameraShakeValue*Math.sin(0.1*timeMs);
		}
		else {
			this.cameras.main.x = 0;
		}

		// Game over text flash
		if (this.state == State.GameOverPhase) {
			// this.overlayText.setTint(interpolateColor(0xFF7777, 0XFFFFFF, Math.sin(0.005*timeMs)*0.5+0.5));
		}
	}


	initAnimations() {
		this.anims.create({
			key: 'dragon_idle',
			frames: [
				{ key: 'dragon_idle', frame: 0, duration: 600 },
				{ key: 'dragon_idle', frame: 1, duration: 400 },
				{ key: 'dragon_idle', frame: 2, duration: 600 },
				{ key: 'dragon_idle', frame: 1, duration: 400 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'dragon_prepare',
			frames: [
				{ key: 'dragon_prepare', frame: 0, duration: 300 },
				{ key: 'dragon_prepare', frame: 1, duration: 400 },
			],
			frameRate: undefined,
		});
		this.anims.create({
			key: 'dragon_throw',
			frames: [
				{ key: 'dragon_throw', frame: 0, duration: 500 },
				{ key: 'dragon_throw', frame: 1, duration: 300 },
				{ key: 'dragon_throw', frame: 2, duration: 200 },
			],
			frameRate: undefined,
		});
		this.anims.create({
			key: 'dragon_hurt',
			frames: [
				{ key: 'dragon_hurt', frame: 0, duration: 1500 },
			],
			frameRate: undefined,
			repeat: -1
		});

		this.anims.create({
			key: 'enemy_peasant_idle',
			frames: [
				{ key: 'enemy_peasant', frame: 0, duration: 500 },
				{ key: 'enemy_peasant', frame: 1, duration: 500 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_peasant_walk',
			frames: [
				{ key: 'enemy_peasant', frame: 2, duration: 100 },
				{ key: 'enemy_peasant', frame: 0, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_peasant_attack',
			frames: [
				{ key: 'enemy_peasant', frame: 1, duration: 100 },
				{ key: 'enemy_peasant', frame: 2, duration: 100 },
				{ key: 'enemy_peasant', frame: 3, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});

		this.anims.create({
			key: 'enemy_squire_idle',
			frames: [
				{ key: 'enemy_squire', frame: 0, duration: 500 },
				{ key: 'enemy_squire', frame: 1, duration: 500 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_squire_walk',
			frames: [
				{ key: 'enemy_squire', frame: 2, duration: 100 },
				{ key: 'enemy_squire', frame: 0, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_squire_attack',
			frames: [
				{ key: 'enemy_squire', frame: 0, duration: 100 },
				{ key: 'enemy_squire', frame: 2, duration: 100 },
				{ key: 'enemy_squire', frame: 3, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});

		this.anims.create({
			key: 'enemy_tank_idle',
			frames: [
				{ key: 'enemy_tank', frame: 0, duration: 500 },
				{ key: 'enemy_tank', frame: 1, duration: 500 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_tank_walk',
			frames: [
				{ key: 'enemy_tank', frame: 2, duration: 100 },
				{ key: 'enemy_tank', frame: 0, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_tank_attack',
			frames: [
				{ key: 'enemy_tank', frame: 0, duration: 100 },
				{ key: 'enemy_tank', frame: 2, duration: 100 },
				{ key: 'enemy_tank', frame: 3, duration: 60 },
				{ key: 'enemy_tank', frame: 4, duration: 120 },
			],
			frameRate: undefined,
			repeat: -1
		});

		this.anims.create({
			key: 'enemy_trojan_idle',
			frames: [
				{ key: 'enemy_trojan', frame: 0, duration: 500 },
				{ key: 'enemy_trojan', frame: 1, duration: 500 },
			],
			frameRate: undefined,
			repeat: -1
		});
		this.anims.create({
			key: 'enemy_trojan_walk',
			frames: [
				{ key: 'enemy_trojan', frame: 2, duration: 100 },
				{ key: 'enemy_trojan', frame: 1, duration: 100 },
				{ key: 'enemy_trojan', frame: 0, duration: 100 },
			],
			frameRate: undefined,
			repeat: -1
		});
	}


	generateDice() {
		let diceCount = 3;
		let styles: number[] = [0, 0, 1, 1, 2, 2];

		// Pick 3 random styles from set of 6 dice
		styles = styles.sort(() => 0.5 - Math.random()).slice(0, diceCount);

		// Generate 3 values until sum is >= 6
		let values: number[] = [];
		while (values.reduce((a,b) => a+b, 0) < diceCount * 2) {
			values = [];
			for (let index of styles) {
				values.push(Phaser.Math.Between(1, diceStyles[index].sides));
			}
		}

		// Create dice
		for (let i = 0; i < diceCount; i++) {
			const style = diceStyles[styles[i]];
			const value = values[i];

			this.addDice(style, value);
		}
	}

	addDice(diceStyle: DiceStyle, diceValue: number) {
		const dice = new Dice(this, 300, this.CY, diceStyle, diceValue);
		this.dices.push(dice);

		const coord = this.grid.getRandomFree();
		if (coord) {
			this.grid.addDice(coord, dice);
		}

		dice.on('drag', (x: number, y: number) => {
			this.grid.snap(x, y, dice);
		});
	}

	addEnemy(kind: EnemyType, y?: number) {
		// console.log(`Spawn kind ${kind} (${EnemyType[kind]})`);
		let spawner = EnemyKinds.get(kind);
		if( spawner != null ) {
			const newEnemies = spawner.spawn(this, this.grid, y);
			this.enemies.push(...newEnemies);
			return newEnemies;
		}
		return [];
	}

	onAttack() {
		this.sound.play("u_attack_button", {volume: 0.5});

		this.state = State.DamagePhase;
		this.attackButton.setVisible(false);

		// Cache damage grid
		const damageGrid = this.grid.getDamageGrid();

		// Explode dice
		this.flash(3000, 0xFF9977, 0.6);
		this.shake(500, 4, 0);
		this.grid.explodeGrid();
		for (const dice of this.dices) {
			if (!dice.inStorage) {
				// this.particles.createExplosion(dice.x, dice.y, 0.8, 1.0);
				this.grid.clear(dice.coord);
				dice.destroy();
			}
		}
		this.grid.updateGrid();
		this.dices = this.dices.filter(dice => dice.inStorage);

		// this.addEvent(200, () => {
		for (const enemy of this.enemies) {
			if (enemy.coord) {
				const dmg = damageGrid[enemy.coord.j][enemy.coord.i];
				if (dmg > 0) {
					enemy.damage(dmg);
				}
			}
		}
		// });

		this.addEvent(1000, this.onEnemyMove);
	}

	onEnemyMove() {
		this.state = State.MovementPhase;

		for (const enemy of this.enemies) {
			if (!enemy.alive) {
				this.addScore(enemy.behaviour.score);
				enemy.destroy();
			}
		}
		this.enemies = this.enemies.filter(enemy => enemy.alive);

		// Move enemies forward
		let playScatterSound = false;
		let switchDelay = 800;
		if (this.enemies.length > 0) {
			this.grid.moveEnemies();
		} else {
			if(level.length <= this.round) {
				this.addScore(100);
				this.overlayText.setColor("#fd0");
				this.overlayText.setText("Perfect Clear!");
				this.dragon.heal(1);
				this.sound.play("m_sparkle", { volume: 0.7, pan: -0.2 });
				this.tweens.add({
					targets: this.overlayText,
					duration: 200,
					ease: "Cubic.Out",
					alpha: { from: 0, to: 1 },
					scale: { from: 2, to: 1 },
				})
				this.tweens.add({
					targets: this.overlayText,
					delay: 1400,
					duratioonEnemyAttackn: 800,
					ease: "Linear",
					alpha: { from: 1, to: 0 }
				})
			}
			switchDelay = 0;
			playScatterSound = true;
		}

		// Spawn new wave
		do {
			const roundData = level[this.round++];
			if (roundData) {

				if (roundData.event) {
					roundData.event(this);
				}
				if (roundData.optional && this.enemies.filter(enemy => enemy.alive).length == 0) {
					continue;
				}
				roundData.group.forEach( enemyParams => {
					this.addEnemy(enemyParams.type, enemyParams.y);
				});

			} else {
				let type = Phaser.Math.Between(EnemyType.SQUIRE, EnemyType.SPAWNABLE_COUNT-1);

				if (type == EnemyType.PEASANT) {
					for (let i = Phaser.Math.Between(1,4); i >= 0; i--) {
						this.addEnemy(type);
					}
				}
				else if (type == EnemyType.SQUIRE) {
					for (let i = Phaser.Math.Between(1,3); i >= 0; i--) {
						this.addEnemy(type);
					}
				}
				else {
					this.addEnemy(type);

					if (Math.random() < 0.3) {
						console.log("+ peasant");
						this.addEnemy(EnemyType.PEASANT);
					}
					if (Math.random() < 0.3) {
						console.log("+ squire");
						this.addEnemy(EnemyType.SQUIRE);
					}
				}

			}
		} while (this.enemies.filter(enemy => enemy.alive).length < 1);

		for (let enemy of this.enemies) {
			enemy.playWalk();
		}

		if (this.enemies.length > 0 && !this.grid.needMoreEnemies()) {
			this.sound.play("e_advance", {
				volume: this.enemies.length == 1 ? 0.3 : 0.5
			});
		}

		this.addEvent(switchDelay, () => {
			playScatterSound && this.sound.play("m_scatter", { volume: 0.5, delay: 0.2 });
			this.onEnemyAttack();
		});
	}

	onEnemyAttack() {
		this.state = State.AttackPhase;

		let attackingEnemies = this.enemies.filter(enemy => enemy.coord && enemy.coord.i == 0);

		for (let enemy of this.enemies) {
			enemy.playIdle();
		}

		if (attackingEnemies.length > 0) {

			for (let enemy of attackingEnemies) {
				enemy.playAttack();
			}

			this.addEvent(500, () => {
				this.dragon.damage(attackingEnemies.length);
			});

			this.addEvent(1000, () => this.dragon.alive && this.onNewRound());
		}
		else {
			this.onNewRound();
		}
	}

	onNewRound() {
		this.state = State.ThrowDice;

		this.attackButton.setVisible(false);

		// Used to spawn enemies here

		for (let enemy of this.enemies) {
			enemy.playIdle();
		}

		if (this.grid.needMoreEnemies()) {
			this.addEvent(200, this.onEnemyMove);
		}
		else {
			// this.addEvent(500, () => {
			this.dragon.throw();
			// });
			// Animation -> this.onDragonThrow
		}
	}

	onDragonThrow() {
		// Throwing animation finished

		this.sound.play(
			`m_whoosh_${Phaser.Math.RND.pick(["hard", "medium"])}_${Phaser.Math.Between(1, 4)}`,
			{ volume: 0.35, pan: -0.3, rate: 1.28 }
		)
		this.generateDice();

		this.shake(300, 2, 0);

		// Show attack button after a while
		this.addEvent(1800, this.onPlayerTurn, this);
	}

	onPlayerTurn() {
		this.state = State.MoveDice;

		this.tweens.add({
			targets: this.attackButton.fire,
			scaleY: { from: 0, to: 0.6 },
			duration: 200,
			ease: "Cubic.Out"
		});
		this.attackButton.setVisible(true);
		this.sound.play(`m_fire_ignite_${Phaser.Math.Between(1, 3)}`, {volume: 0.85});
	}

	onDragonDeath() {
		for (let enemy of this.enemies) {
			enemy.playIdle();
		}

		this.state = State.GameOverPhase;
		// this.overlayText.setColor("#fff");
		// this.overlayText.setText("Game Over");
		// this.tweens.add({
		// 	targets: this.overlayText,
		// 	duration: 400,
		// 	ease: "Elastic.Out",
		// 	alpha: { from: 0, to: 1 },
		// 	scale: { from: 0, to: 1 },
		// })

		// this.music_isFull = false;
		// if (this.musicButton.active) {
		// 	this.music.volume = 0.001;
		// 	this.music_light.volume = 0.25;
		// }

		this.cameras.main.setPostPipeline(GrayScalePostFilter);
		this.music.stop();
		this.music_light.stop();

		this.addEvent(2000, () => {
			this.fade(true, 1000, 0x000000);
			this.addEvent(1050, () => {
				this.ambience.stop();
				this.scene.start("GameoverScene");
			});
		});
	}


	loadSounds() {
		// this.sounds = {};
		// for (let audio of audios) {
			// this.sounds[audio.key] = this.sound.add(audio.key, { volume: audio.volume, rate: audio.rate || 1 }) as Phaser.Sound.WebAudioSound;
		// }
	}

	onPlayerDeath() {
		// this.introPlaying = true;
		// this.sounds.playerDeath.play();

		// this.shake(1400, 8, 2);
	}


	// spawnEnemy(enemyParams: EnemyParams) {
	// }


	/* Score */

	loadHighscore() {
		try {
			let data = JSON.parse(localStorage.getItem("DiceSaveData")!);
			if (data) {

				if (data.highscore && !isNaN(parseInt(data.highscore))) {
					this.highscore = Phaser.Math.Clamp(data.highscore, 0, 99999999);
					this.initialHighscore = this.highscore;
					this.ui.setScore(this.score, this.highscore);
				}
			}
		} catch (error) {}
	}

	saveHighscore() {
		// Crashes in incognito
		try {
			localStorage.setItem("DiceSaveData", JSON.stringify({
				version: 1,
				highscore: this.highscore,
			}));
		} catch (error) {}
	}

	addScore(value: number) {
		this.score += value;
		this.highscore = Math.max(this.highscore, this.score);
		this.ui.setScore(this.score, this.highscore);

		this.saveHighscore();
		if (this.score > this.highscore && !this.highscoreFanfarePlayed && this.initialHighscore > 10) {
			this.sound.play("j_trumpet", { volume: 0.5 });
			this.highscoreFanfarePlayed = true;
		}
	}

	setStageName(name: string) {
		console.log("Stage:", name);
		this.sound.play("j_timpani", { volume: 0.9, pan: -0.2 });
		this.overlayText.setColor("#0df");
		this.overlayText.setText(name);
		this.tweens.add({
			targets: this.overlayText,
			duration: 200,
			ease: "Cubic.Out",
			alpha: { from: 0, to: 1 },
			scale: { from: 2, to: 1 },
		})
		this.tweens.add({
			targets: this.overlayText,
			delay: 3000,
			duration: 800,
			ease: "Linear",
			alpha: { from: 1, to: 0 }
		})
		if (name != "Move the dice to attack") {
			this.music_isFull = true;
			if (this.musicButton.active) {
				this.music.volume = 0.25;
				this.music_light.volume = 0;
				// The code below freezes the game
				/* this.tweens.add({
					target: this.music,
					duration: 1000,
					volume: { from: 0, to: 0.25 }
				})
				this.tweens.add({
					target: this.music_light,
					duration: 1000,
					volume: { from: 0.25, to: 0 }
				}) */
			}
		}
	}
}
