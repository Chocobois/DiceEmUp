import { GameScene } from "../scenes/GameScene";
import { RoundRectangle } from "./RoundRectangle";

const FONT_SIZE = 48;
const STROKE = 6;


export class UI extends Phaser.GameObjects.Container {
	public scene: GameScene;

	public highscore: Phaser.GameObjects.Text;
	public score: Phaser.GameObjects.Text;
	public scoreBounce: number;


	constructor(scene: GameScene) {
		super(scene);
		this.scene = scene;
		scene.add.existing(this);


		let hx = 0.021 * scene.W;
		let swidth = 460;
		let ty = 0.83 * scene.H;

		let scoreBg = new RoundRectangle(scene, hx-10-6, ty+40, swidth+12, 1.4*FONT_SIZE+12, 34, 0x593929);
		scoreBg.setOrigin(0, 0.5);
		this.add(scoreBg);
		let scoreBg2 = new RoundRectangle(scene, hx-10, ty+40, swidth, 1.4*FONT_SIZE, 28, 0xcba17f);
		scoreBg2.setOrigin(0, 0.5);
		this.add(scoreBg2);

		let sLabel = scene.createText(hx+140, ty+6, FONT_SIZE, "#000", "Score");
		sLabel.setOrigin(0.5, 0);
		sLabel.setStroke("#FFFFFF", STROKE);
		this.add(sLabel);

		// ty += 1.2 * FONT_SIZE;
		this.score = scene.createText(hx + 280, ty+10, FONT_SIZE, "#FFF", "0");
		this.score.setOrigin(0, 0);
		// this.score.setStroke("#FFFFFF", STROKE);
		this.add(this.score);

		ty += 1.8 * FONT_SIZE;
		let highscoreBg = new RoundRectangle(scene, hx-10-6, ty+40, swidth+12, 1.4*FONT_SIZE+12, 34, 0x593929);
		highscoreBg.setOrigin(0, 0.5);
		this.add(highscoreBg);
		let highscoreBg2 = new RoundRectangle(scene, hx-10, ty+40, swidth, 1.4*FONT_SIZE, 28, 0xcba17f);
		highscoreBg2.setOrigin(0, 0.5);
		this.add(highscoreBg2);

		let hsLabel = scene.createText(hx+140, ty+6, FONT_SIZE, "#000", "High score");
		hsLabel.setOrigin(0.5, 0);
		hsLabel.setStroke("#FFFFFF", STROKE);
		this.add(hsLabel);

		this.highscore = scene.createText(hx + 280, ty+10, FONT_SIZE, "#FFF", "0");
		this.highscore.setOrigin(0, 0);
		// this.highscore.setStroke("#FFFFFF", STROKE);
		this.add(this.highscore);

		this.scoreBounce = 0;


		this.setScore(0, 0);
	}

	update(time: number, delta: number) {

		// Score
		this.scoreBounce += 10 * (0 - this.scoreBounce) * delta;
		this.score.setScale(1 + 0.15 * this.scoreBounce, 1 - 0.05 * this.scoreBounce);
	}

	setScore(score: number, highscore: number) {
		this.score.setText(score.toString().padStart(0, '0'));
		this.highscore.setText(highscore.toString().padStart(0, '0'));
		this.scoreBounce = 1;
	}
}
