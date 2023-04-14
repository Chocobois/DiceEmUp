/* Interface */

interface Asset {
	key: string;
	path: string;
}

interface SpriteSheet {
	key: string;
	path: string;
	width: number;
	height: number;
}

interface Audio {
	key: string;
	path: string;
	volume: number;
	rate?: number;
}


/* Images */

// Backgrounds
import bg_gameover from "/assets/images/backgrounds/gameover.png";
import bg_shadow from "/assets/images/backgrounds/shadow.png";
import bg_town from "/assets/images/backgrounds/town/bg.png";
import fg_town from "/assets/images/backgrounds/town/fg.png";

// Dice
import dice_shadow from "/assets/images/dice/dice_shadow.png";
import dice from "/assets/images/dice/dice.png"

// Characters
import dragon_idle from "/assets/images/characters/dragon/idle.png";
import dragon_prepare from "/assets/images/characters/dragon/prepare.png";
import dragon_throw from "/assets/images/characters/dragon/throw.png";
import dragon_hurt from "/assets/images/characters/dragon/hurt.png";
import enemy_peasant from "/assets/images/characters/peasant.png";
import enemy_squire from "/assets/images/characters/squire.png";
import enemy_tank from "/assets/images/characters/tank.png";
import enemy_trojan from "/assets/images/characters/trojan.png";

// Particles
import meme_explosion from "/assets/images/particles/meme_explosion.png";
import fire_explosion from "/assets/images/particles/fire_explosion.png"

// UI
import board_border from "/assets/images/ui/board_border.png";
import board_tile from "/assets/images/ui/board_tile.png";
import healthbar from "/assets/images/ui/healthbar.png";
import attack_button from "/assets/images/ui/attack_button.png";
import attack_button_fire from "/assets/images/ui/attack_button_fire.png";
import music from "/assets/images/ui/music.png";
import audio from "/assets/images/ui/audio.png";
import reset from "/assets/images/ui/reset.png";
import heart_1 from "/assets/images/ui/heart/heart_1.png";
import heart_2 from "/assets/images/ui/heart/heart_2.png";
import heart_3 from "/assets/images/ui/heart/heart_3.png";
import heart_4 from "/assets/images/ui/heart/heart_4.png";
import heart_empty from "/assets/images/ui/heart/heart_empty.png";
import heart_full from "/assets/images/ui/heart/heart_full.png";

// Cover
import cover_background_orange from "/assets/images/cover/background_orange.png";
import cover_body from "/assets/images/cover/dragon_body.png";
import cover_roof from "/assets/images/cover/roof.png";
import cover_hands from "/assets/images/cover/hands.png";
import cover_dice_blue from "/assets/images/cover/dice_blue.png";
import cover_dice_green from "/assets/images/cover/dice_green.png";
import cover_dice_red from "/assets/images/cover/dice_red.png";
import cover_knights from "/assets/images/cover/knights.png";


const images: Asset[] = [
	// Backgrounds
	{ key: "bg_gameover",	path: bg_gameover },
	{ key: "bg_shadow",		path: bg_shadow },
	{ key: "bg_town",		path: bg_town },
	{ key: "fg_town",		path: fg_town },

	// Dice
	{ key: "dice_shadow",	path: dice_shadow },

	// UI
	{ key: "board_border",	path: board_border },
	{ key: "board_tile",	path: board_tile },
	{ key: "healthbar",		path: healthbar },
	{ key: "heart_1",		path: heart_1 },
	{ key: "heart_2",		path: heart_2 },
	{ key: "heart_3",		path: heart_3 },
	{ key: "heart_4",		path: heart_4 },
	{ key: "heart_empty",	path: heart_empty },
	{ key: "heart_full",	path: heart_full },
	{ key: "reset", path: reset },

	// Cover
	{ key: "cover_background_orange",	path: cover_background_orange },
	{ key: "cover_body",				path: cover_body },
	{ key: "cover_roof",				path: cover_roof },
	{ key: "cover_hands",				path: cover_hands },
	{ key: "cover_dice_blue",			path: cover_dice_blue },
	{ key: "cover_dice_green",			path: cover_dice_green },
	{ key: "cover_dice_red",			path: cover_dice_red },
	{ key: "cover_knights",				path: cover_knights },
];

const spritesheets: SpriteSheet[] = [
	// Backgrounds

	// Dice
	{ key: "dice",				path: dice, 			width: 256,	height: 256 },

	// Characters
	{ key: "dragon_idle",		path: dragon_idle,		width: 420,	height: 540 },
	{ key: "dragon_prepare",	path: dragon_prepare,	width: 420,	height: 540 },
	{ key: "dragon_throw",		path: dragon_throw,		width: 420,	height: 540 },
	{ key: "dragon_hurt",		path: dragon_hurt,		width: 420,	height: 540 },
	{ key: "enemy_peasant",		path: enemy_peasant,	width: 270,	height: 270 },
	{ key: "enemy_squire",		path: enemy_squire,		width: 270,	height: 270 },
	{ key: "enemy_tank",		path: enemy_tank,		width: 340,	height: 270 },
	{ key: "enemy_trojan",		path: enemy_trojan,		width: 300,	height: 270 },

	// Particles
	{ key: "fire_explosion",	path: fire_explosion,	width: 214,	height: 214 },
	{ key: "meme_explosion",	path: meme_explosion,	width: 200,	height: 282 },

	// UI
	{ key: "attack_button",			path: attack_button,		width: 532,	height: 219 },
	{ key: "attack_button_fire",	path: attack_button_fire,	width: 512,	height: 256 },
	{ key: "music",					path: music,				width: 300,	height: 300 },
	{ key: "audio",					path: audio,				width: 300,	height: 300 },
];


/* Sounds */

/* UI */
import u_attack_button from "/assets/sounds/ui/Attack_Button.mp3";
import u_disabled from "/assets/sounds/ui/Disabled.mp3";
import u_hover from "/assets/sounds/ui/Wii hover.mp3";

/* Enemy */
import e_advance from "/assets/sounds/enemy/Enemy_Advance.mp3";
import e_damage from "/assets/sounds/enemy/Enemy_Damage.mp3";
import e_jump_out from "/assets/sounds/enemy/Enemy jump out.mp3";

/* Dragon */
import d_damage from "/assets/sounds/dragon/Dragon_Damage.mp3";

/* Music */
import m_main_music from "/assets/music/main.mp3";
import m_main_menu from "/assets/music/title.mp3";
import m_city_ambience from "/assets/music/City_Ambience.mp3";
import m_main_music_light from "/assets/music/main2.mp3";

/* Jingles */
import j_fanfare from "/assets/sounds/jingle/jingle fanfare.mp3";
import j_defeat from "/assets/sounds/jingle/jingle defeat.mp3";
import j_orchestra from "/assets/sounds/jingle/jingle orchestra.mp3";
import j_strings from "/assets/sounds/jingle/jingle strings.mp3";
import j_timpani from "/assets/sounds/jingle/jingle timpani.mp3";
import j_trumpet from "/assets/sounds/jingle/jingle trumpet.mp3";

/* Misc */
import m_sparkle from "/assets/sounds/misc/Sparkle.mp3";
import m_scatter from "/assets/sounds/misc/Scatter.mp3";
import m_slice from "/assets/sounds/misc/Slice.mp3";
import m_fire_ignite_1 from "/assets/sounds/misc/Fire ignite 1.mp3";
import m_fire_ignite_2 from "/assets/sounds/misc/Fire ignite 2.mp3";
import m_fire_ignite_3 from "/assets/sounds/misc/Fire ignite 3.mp3";
import m_whoosh_hard_1 from "/assets/sounds/misc/Whoosh Hard 1.mp3";
import m_whoosh_hard_2 from "/assets/sounds/misc/Whoosh Hard 2.mp3";
import m_whoosh_hard_3 from "/assets/sounds/misc/Whoosh Hard 3.mp3";
import m_whoosh_hard_4 from "/assets/sounds/misc/Whoosh Hard 4.mp3";
import m_whoosh_medium_1 from "/assets/sounds/misc/Whoosh Medium 1.mp3";
import m_whoosh_medium_2 from "/assets/sounds/misc/Whoosh Medium 2.mp3";
import m_whoosh_medium_3 from "/assets/sounds/misc/Whoosh Medium 3.mp3";
import m_whoosh_medium_4 from "/assets/sounds/misc/Whoosh Medium 4.mp3";
import m_whoosh_soft_1 from "/assets/sounds/misc/Whoosh Soft 1.mp3";
import m_whoosh_soft_2 from "/assets/sounds/misc/Whoosh Soft 2.mp3";
import m_whoosh_soft_3 from "/assets/sounds/misc/Whoosh Soft 3.mp3";
import m_whoosh_soft_4 from "/assets/sounds/misc/Whoosh Soft 4.mp3";

/* Tray */
import t_place_multiple_1 from "/assets/sounds/tray/Place multiple 1.mp3";
import t_place_multiple_2 from "/assets/sounds/tray/Place multiple 2.mp3";
import t_place_multiple_3 from "/assets/sounds/tray/Place multiple 3.mp3";
import t_place_multiple_4 from "/assets/sounds/tray/Place multiple 4.mp3";
import t_place_multiple_5 from "/assets/sounds/tray/Place multiple 5.mp3";
import t_place_single_long_1 from "/assets/sounds/tray/Place single long 1.mp3";
import t_place_single_long_2 from "/assets/sounds/tray/Place single long 2.mp3";
import t_place_single_long_3 from "/assets/sounds/tray/Place single long 3.mp3";
import t_place_single_long_4 from "/assets/sounds/tray/Place single long 4.mp3";
import t_place_single_long_5 from "/assets/sounds/tray/Place single long 5.mp3";
import t_place_single_short_1 from "/assets/sounds/tray/Place single short 1.mp3";
import t_place_single_short_2 from "/assets/sounds/tray/Place single short 2.mp3";
import t_place_single_short_3 from "/assets/sounds/tray/Place single short 3.mp3";
import t_place_single_short_4 from "/assets/sounds/tray/Place single short 4.mp3";
import t_place_single_short_5 from "/assets/sounds/tray/Place single short 5.mp3";
import t_slide_multiple_1 from "/assets/sounds/tray/Slide multiple 1.mp3";
import t_slide_multiple_2 from "/assets/sounds/tray/Slide multiple 2.mp3";
import t_slide_multiple_3 from "/assets/sounds/tray/Slide multiple 3.mp3";
import t_slide_single_1 from "/assets/sounds/tray/Slide single 1.mp3";
import t_slide_single_2 from "/assets/sounds/tray/Slide single 2.mp3";
import t_slide_single_3 from "/assets/sounds/tray/Slide single 3.mp3";
import t_slide_single_4 from "/assets/sounds/tray/Slide single 4.mp3";
import t_slide_single_5 from "/assets/sounds/tray/Slide single 5.mp3";
import t_sweep_multiple_1 from "/assets/sounds/tray/Sweep multiple 1.mp3";
import t_sweep_multiple_2 from "/assets/sounds/tray/Sweep multiple 2.mp3";
import t_sweep_multiple_3 from "/assets/sounds/tray/Sweep multiple 3.mp3";
import t_sweep_single_1 from "/assets/sounds/tray/Sweep single 1.mp3";
import t_sweep_single_2 from "/assets/sounds/tray/Sweep single 2.mp3";
import t_sweep_single_3 from "/assets/sounds/tray/Sweep single 3.mp3";
import t_sweep_single_4 from "/assets/sounds/tray/Sweep single 4.mp3";
import t_sweep_single_5 from "/assets/sounds/tray/Sweep single 5.mp3";
import t_sweep_single_6 from "/assets/sounds/tray/Sweep single 6.mp3";
import t_take_multiple_1 from "/assets/sounds/tray/Take multiple 1.mp3";
import t_take_multiple_2 from "/assets/sounds/tray/Take multiple 2.mp3";
import t_take_multiple_3 from "/assets/sounds/tray/Take multiple 3.mp3";
import t_take_multiple_4 from "/assets/sounds/tray/Take multiple 4.mp3";
import t_take_multiple_5 from "/assets/sounds/tray/Take multiple 5.mp3";

/* Throw */
import t_throw_cardboard_multiple_1 from "/assets/sounds/throw/Throw cardboard multiple 1.mp3";
import t_throw_cardboard_multiple_2 from "/assets/sounds/throw/Throw cardboard multiple 2.mp3";
import t_throw_cardboard_multiple_3 from "/assets/sounds/throw/Throw cardboard multiple 3.mp3";
import t_throw_cardboard_multiple_4 from "/assets/sounds/throw/Throw cardboard multiple 4.mp3";
import t_throw_cardboard_single_long_1 from "/assets/sounds/throw/Throw cardboard single long 1.mp3";
import t_throw_cardboard_single_long_2 from "/assets/sounds/throw/Throw cardboard single long 2.mp3";
import t_throw_cardboard_single_long_3 from "/assets/sounds/throw/Throw cardboard single long 3.mp3";
import t_throw_cardboard_single_medium_1 from "/assets/sounds/throw/Throw cardboard single medium 1.mp3";
import t_throw_cardboard_single_medium_2 from "/assets/sounds/throw/Throw cardboard single medium 2.mp3";
import t_throw_cardboard_single_medium_3 from "/assets/sounds/throw/Throw cardboard single medium 3.mp3";
import t_throw_cardboard_single_short_1 from "/assets/sounds/throw/Throw cardboard single short 1.mp3";
import t_throw_cardboard_single_short_2 from "/assets/sounds/throw/Throw cardboard single short 2.mp3";
import t_throw_cardboard_single_short_3 from "/assets/sounds/throw/Throw cardboard single short 3.mp3";
import t_throw_desk_multiple_1 from "/assets/sounds/throw/Throw desk multiple 1.mp3";
import t_throw_desk_multiple_2 from "/assets/sounds/throw/Throw desk multiple 2.mp3";
import t_throw_desk_multiple_3 from "/assets/sounds/throw/Throw desk multiple 3.mp3";
import t_throw_desk_multiple_4 from "/assets/sounds/throw/Throw desk multiple 4.mp3";
import t_throw_desk_multiple_5 from "/assets/sounds/throw/Throw desk multiple 5.mp3";
import t_throw_desk_single_1 from "/assets/sounds/throw/Throw desk single 1.mp3";
import t_throw_desk_single_2 from "/assets/sounds/throw/Throw desk single 2.mp3";
import t_throw_desk_single_3 from "/assets/sounds/throw/Throw desk single 3.mp3";
import t_throw_desk_single_4 from "/assets/sounds/throw/Throw desk single 4.mp3";
import t_throw_desk_single_5 from "/assets/sounds/throw/Throw desk single 5.mp3";
import t_throw_felt_single_1 from "/assets/sounds/throw/Throw felt single 1.mp3";
import t_throw_felt_single_2 from "/assets/sounds/throw/Throw felt single 2.mp3";
import t_throw_felt_single_3 from "/assets/sounds/throw/Throw felt single 3.mp3";
import t_throw_felt_single_4 from "/assets/sounds/throw/Throw felt single 4.mp3";
import t_throw_felt_single_5 from "/assets/sounds/throw/Throw felt single 5.mp3";
import t_throw_felt_to_desk_1 from "/assets/sounds/throw/Throw felt to desk 1.mp3";
import t_throw_felt_to_desk_2 from "/assets/sounds/throw/Throw felt to desk 2.mp3";

/* Hand */
import h_fondle_hard_1 from "/assets/sounds/hand/Fondle hard 1.mp3";
import h_fondle_hard_2 from "/assets/sounds/hand/Fondle hard 2.mp3";
import h_fondle_hard_3 from "/assets/sounds/hand/Fondle hard 3.mp3";
import h_fondle_medium_1 from "/assets/sounds/hand/Fondle medium 1.mp3";
import h_fondle_medium_2 from "/assets/sounds/hand/Fondle medium 2.mp3";
import h_fondle_medium_3 from "/assets/sounds/hand/Fondle medium 3.mp3";
import h_fondle_soft_1 from "/assets/sounds/hand/Fondle soft 1.mp3";
import h_fondle_soft_2 from "/assets/sounds/hand/Fondle soft 2.mp3";
import h_fondle_soft_3 from "/assets/sounds/hand/Fondle soft 3.mp3";
import h_shake_hand_closed_1x from "/assets/sounds/hand/Shake hand closed 1x.mp3";
import h_shake_hand_closed_2x from "/assets/sounds/hand/Shake hand closed 2x.mp3";
import h_shake_hand_closed_3x from "/assets/sounds/hand/Shake hand closed 3x.mp3";
import h_shake_hand_closed_4x from "/assets/sounds/hand/Shake hand closed 4x.mp3";
import h_shake_hand_open_1x from "/assets/sounds/hand/Shake hand open 1x.mp3";
import h_shake_hand_open_2x from "/assets/sounds/hand/Shake hand open 2x.mp3";
import h_shake_hand_open_3x from "/assets/sounds/hand/Shake hand open 3x.mp3";
import h_shake_hand_open_4x from "/assets/sounds/hand/Shake hand open 4x.mp3";
import h_swirl_hand_closed_1 from "/assets/sounds/hand/Swirl hand closed 1.mp3";
import h_swirl_hand_closed_2 from "/assets/sounds/hand/Swirl hand closed 2.mp3";
import h_swirl_hand_closed_3 from "/assets/sounds/hand/Swirl hand closed 3.mp3";
import h_swirl_hand_open_1 from "/assets/sounds/hand/Swirl hand open 1.mp3";
import h_swirl_hand_open_2 from "/assets/sounds/hand/Swirl hand open 2.mp3";
import h_swirl_hand_open_3 from "/assets/sounds/hand/Swirl hand open 3.mp3";

/* Dice */
import d_dice_tap_long_1 from "/assets/sounds/dice/Dice tap long 1.mp3";
import d_dice_tap_long_2 from "/assets/sounds/dice/Dice tap long 2.mp3";
import d_dice_tap_long_3 from "/assets/sounds/dice/Dice tap long 3.mp3";
import d_dice_tap_long_4 from "/assets/sounds/dice/Dice tap long 4.mp3";
import d_dice_tap_long_5 from "/assets/sounds/dice/Dice tap long 5.mp3";
import d_dice_tap_short_1 from "/assets/sounds/dice/Dice tap short 1.mp3";
import d_dice_tap_short_2 from "/assets/sounds/dice/Dice tap short 2.mp3";
import d_dice_tap_short_3 from "/assets/sounds/dice/Dice tap short 3.mp3";
import d_dice_tap_short_4 from "/assets/sounds/dice/Dice tap short 4.mp3";
import d_dice_tap_short_5 from "/assets/sounds/dice/Dice tap short 5.mp3";
import d_fall_down_and_hit_steel_leg_of_an_ikea_desk from "/assets/sounds/dice/Fall down and hit steel leg of an ikea desk.mp3";

/* Cup */
import c_cup_put_multiple_1 from "/assets/sounds/cup/Cup put multiple 1.mp3";
import c_cup_put_multiple_2 from "/assets/sounds/cup/Cup put multiple 2.mp3";
import c_cup_put_multiple_3 from "/assets/sounds/cup/Cup put multiple 3.mp3";
import c_cup_put_single_1 from "/assets/sounds/cup/Cup put single 1.mp3";
import c_cup_put_single_2 from "/assets/sounds/cup/Cup put single 2.mp3";
import c_cup_put_single_3 from "/assets/sounds/cup/Cup put single 3.mp3";
import c_cup_take_multiple_1 from "/assets/sounds/cup/Cup take multiple 1.mp3";
import c_cup_take_multiple_2 from "/assets/sounds/cup/Cup take multiple 2.mp3";
import c_cup_take_multiple_3 from "/assets/sounds/cup/Cup take multiple 3.mp3";
import c_cup_take_single_1 from "/assets/sounds/cup/Cup take single 1.mp3";
import c_cup_take_single_2 from "/assets/sounds/cup/Cup take single 2.mp3";
import c_cup_take_single_3 from "/assets/sounds/cup/Cup take single 3.mp3";
import c_shake_cup_multiple_hard_1 from "/assets/sounds/cup/Shake cup multiple hard 1.mp3";
import c_shake_cup_multiple_hard_2 from "/assets/sounds/cup/Shake cup multiple hard 2.mp3";
import c_shake_cup_multiple_hard_3 from "/assets/sounds/cup/Shake cup multiple hard 3.mp3";
import c_shake_cup_multiple_medium_1 from "/assets/sounds/cup/Shake cup multiple medium 1.mp3";
import c_shake_cup_multiple_medium_2 from "/assets/sounds/cup/Shake cup multiple medium 2.mp3";
import c_shake_cup_multiple_medium_3 from "/assets/sounds/cup/Shake cup multiple medium 3.mp3";
import c_shake_cup_multiple_soft_1 from "/assets/sounds/cup/Shake cup multiple soft 1.mp3";
import c_shake_cup_multiple_soft_2 from "/assets/sounds/cup/Shake cup multiple soft 2.mp3";
import c_shake_cup_multiple_soft_3 from "/assets/sounds/cup/Shake cup multiple soft 3.mp3";
import c_shake_cup_single_long_1 from "/assets/sounds/cup/Shake cup single long 1.mp3";
import c_shake_cup_single_long_2 from "/assets/sounds/cup/Shake cup single long 2.mp3";
import c_shake_cup_single_long_3 from "/assets/sounds/cup/Shake cup single long 3.mp3";
import c_shake_cup_single_short_1 from "/assets/sounds/cup/Shake cup single short 1.mp3";
import c_shake_cup_single_short_2 from "/assets/sounds/cup/Shake cup single short 2.mp3";
import c_shake_cup_single_short_3 from "/assets/sounds/cup/Shake cup single short 3.mp3";
import c_swirl_cup_multiple_1 from "/assets/sounds/cup/Swirl cup multiple 1.mp3";
import c_swirl_cup_multiple_2 from "/assets/sounds/cup/Swirl cup multiple 2.mp3";
import c_swirl_cup_multiple_3 from "/assets/sounds/cup/Swirl cup multiple 3.mp3";
import c_swirl_cup_multiple_4 from "/assets/sounds/cup/Swirl cup multiple 4.mp3";
import c_swirl_cup_multiple_long_1 from "/assets/sounds/cup/Swirl cup single long 1.mp3";
import c_swirl_cup_multiple_long_2 from "/assets/sounds/cup/Swirl cup single long 2.mp3";
import c_swirl_cup_multiple_long_3 from "/assets/sounds/cup/Swirl cup single long 3.mp3";
import c_swirl_cup_single_short_1 from "/assets/sounds/cup/Swirl cup single short 1.mp3";
import c_swirl_cup_single_short_2 from "/assets/sounds/cup/Swirl cup single short 3.mp3";
import c_swirl_cup_single_short_3 from "/assets/sounds/cup/Swirl cup single short 1.mp3";

const audios: Audio[] = [
	{ key: "u_attack_button", path: u_attack_button, volume: 1 },
	{ key: "u_disabled", path: u_disabled, volume: 1 },
	{ key: "u_hover", path: u_hover, volume: 1 },

	{ key: "e_advance", path: e_advance, volume: 1 },
	{ key: "e_damage", path: e_damage, volume: 1 },
	{ key: "e_jump_out", path: e_jump_out, volume: 1 },

	{ key: "d_damage", path: d_damage, volume: 1 },

	{ key: "m_main_music", path: m_main_music, volume: 1 },
	{ key: "m_main_menu", path: m_main_menu, volume: 1 },
	{ key: "m_city_ambience", path: m_city_ambience, volume: 1 },
	{ key: "m_main_music_light", path: m_main_music_light, volume: 1 },

	{ key: "j_fanfare", path: j_fanfare, volume: 1 },
	{ key: "j_defeat", path: j_defeat, volume: 1 },
	{ key: "j_orchestra", path: j_orchestra, volume: 1 },
	{ key: "j_strings", path: j_strings, volume: 1 },
	{ key: "j_timpani", path: j_timpani, volume: 1 },
	{ key: "j_trumpet", path: j_trumpet, volume: 1 },

	{ key: "m_sparkle", path: m_sparkle, volume: 1 },
	{ key: "m_scatter", path: m_scatter, volume: 1 },
	{ key: "m_slice", path: m_slice, volume: 1 },
	{ key: "m_fire_ignite_1", path: m_fire_ignite_1, volume: 1 },
	{ key: "m_fire_ignite_2", path: m_fire_ignite_2, volume: 1 },
	{ key: "m_fire_ignite_3", path: m_fire_ignite_3, volume: 1 },
	{ key: "m_whoosh_hard_1", path: m_whoosh_hard_1, volume: 1 },
	{ key: "m_whoosh_hard_2", path: m_whoosh_hard_2, volume: 1 },
	{ key: "m_whoosh_hard_3", path: m_whoosh_hard_3, volume: 1 },
	{ key: "m_whoosh_hard_4", path: m_whoosh_hard_4, volume: 1 },
	{ key: "m_whoosh_medium_1", path: m_whoosh_medium_1, volume: 1 },
	{ key: "m_whoosh_medium_2", path: m_whoosh_medium_2, volume: 1 },
	{ key: "m_whoosh_medium_3", path: m_whoosh_medium_3, volume: 1 },
	{ key: "m_whoosh_medium_4", path: m_whoosh_medium_4, volume: 1 },
	{ key: "m_whoosh_soft_1", path: m_whoosh_soft_1, volume: 1 },
	{ key: "m_whoosh_soft_2", path: m_whoosh_soft_2, volume: 1 },
	{ key: "m_whoosh_soft_3", path: m_whoosh_soft_3, volume: 1 },
	{ key: "m_whoosh_soft_4", path: m_whoosh_soft_4, volume: 1 },

	{ key: "t_place_multiple_1", path: t_place_multiple_1, volume: 1 },
	{ key: "t_place_multiple_2", path: t_place_multiple_2, volume: 1 },
	{ key: "t_place_multiple_3", path: t_place_multiple_3, volume: 1 },
	{ key: "t_place_multiple_4", path: t_place_multiple_4, volume: 1 },
	{ key: "t_place_multiple_5", path: t_place_multiple_5, volume: 1 },
	{ key: "t_place_single_long_1", path: t_place_single_long_1, volume: 1 },
	{ key: "t_place_single_long_2", path: t_place_single_long_2, volume: 1 },
	{ key: "t_place_single_long_3", path: t_place_single_long_3, volume: 1 },
	{ key: "t_place_single_long_4", path: t_place_single_long_4, volume: 1 },
	{ key: "t_place_single_long_5", path: t_place_single_long_5, volume: 1 },
	{ key: "t_place_single_short_1", path: t_place_single_short_1, volume: 1 },
	{ key: "t_place_single_short_2", path: t_place_single_short_2, volume: 1 },
	{ key: "t_place_single_short_3", path: t_place_single_short_3, volume: 1 },
	{ key: "t_place_single_short_4", path: t_place_single_short_4, volume: 1 },
	{ key: "t_place_single_short_5", path: t_place_single_short_5, volume: 1 },
	{ key: "t_slide_multiple_1", path: t_slide_multiple_1, volume: 1 },
	{ key: "t_slide_multiple_2", path: t_slide_multiple_2, volume: 1 },
	{ key: "t_slide_multiple_3", path: t_slide_multiple_3, volume: 1 },
	{ key: "t_slide_single_1", path: t_slide_single_1, volume: 1 },
	{ key: "t_slide_single_2", path: t_slide_single_2, volume: 1 },
	{ key: "t_slide_single_3", path: t_slide_single_3, volume: 1 },
	{ key: "t_slide_single_4", path: t_slide_single_4, volume: 1 },
	{ key: "t_slide_single_5", path: t_slide_single_5, volume: 1 },
	{ key: "t_sweep_multiple_1", path: t_sweep_multiple_1, volume: 1 },
	{ key: "t_sweep_multiple_2", path: t_sweep_multiple_2, volume: 1 },
	{ key: "t_sweep_multiple_3", path: t_sweep_multiple_3, volume: 1 },
	{ key: "t_sweep_single_1", path: t_sweep_single_1, volume: 1 },
	{ key: "t_sweep_single_2", path: t_sweep_single_2, volume: 1 },
	{ key: "t_sweep_single_3", path: t_sweep_single_3, volume: 1 },
	{ key: "t_sweep_single_4", path: t_sweep_single_4, volume: 1 },
	{ key: "t_sweep_single_5", path: t_sweep_single_5, volume: 1 },
	{ key: "t_sweep_single_6", path: t_sweep_single_6, volume: 1 },
	{ key: "t_take_multiple_1", path: t_take_multiple_1, volume: 1 },
	{ key: "t_take_multiple_2", path: t_take_multiple_2, volume: 1 },
	{ key: "t_take_multiple_3", path: t_take_multiple_3, volume: 1 },
	{ key: "t_take_multiple_4", path: t_take_multiple_4, volume: 1 },
	{ key: "t_take_multiple_5", path: t_take_multiple_5, volume: 1 },

	{ key: "t_throw_cardboard_multiple_1", path: t_throw_cardboard_multiple_1, volume: 1 },
	{ key: "t_throw_cardboard_multiple_2", path: t_throw_cardboard_multiple_2, volume: 1 },
	{ key: "t_throw_cardboard_multiple_3", path: t_throw_cardboard_multiple_3, volume: 1 },
	{ key: "t_throw_cardboard_multiple_4", path: t_throw_cardboard_multiple_4, volume: 1 },
	{ key: "t_throw_cardboard_single_long_1", path: t_throw_cardboard_single_long_1, volume: 1 },
	{ key: "t_throw_cardboard_single_long_2", path: t_throw_cardboard_single_long_2, volume: 1 },
	{ key: "t_throw_cardboard_single_long_3", path: t_throw_cardboard_single_long_3, volume: 1 },
	{ key: "t_throw_cardboard_single_medium_1", path: t_throw_cardboard_single_medium_1, volume: 1 },
	{ key: "t_throw_cardboard_single_medium_2", path: t_throw_cardboard_single_medium_2, volume: 1 },
	{ key: "t_throw_cardboard_single_medium_3", path: t_throw_cardboard_single_medium_3, volume: 1 },
	{ key: "t_throw_cardboard_single_short_1", path: t_throw_cardboard_single_short_1, volume: 1 },
	{ key: "t_throw_cardboard_single_short_2", path: t_throw_cardboard_single_short_2, volume: 1 },
	{ key: "t_throw_cardboard_single_short_3", path: t_throw_cardboard_single_short_3, volume: 1 },
	{ key: "t_throw_desk_multiple_1", path: t_throw_desk_multiple_1, volume: 1 },
	{ key: "t_throw_desk_multiple_2", path: t_throw_desk_multiple_2, volume: 1 },
	{ key: "t_throw_desk_multiple_3", path: t_throw_desk_multiple_3, volume: 1 },
	{ key: "t_throw_desk_multiple_4", path: t_throw_desk_multiple_4, volume: 1 },
	{ key: "t_throw_desk_multiple_5", path: t_throw_desk_multiple_5, volume: 1 },
	{ key: "t_throw_desk_single_1", path: t_throw_desk_single_1, volume: 1 },
	{ key: "t_throw_desk_single_2", path: t_throw_desk_single_2, volume: 1 },
	{ key: "t_throw_desk_single_3", path: t_throw_desk_single_3, volume: 1 },
	{ key: "t_throw_desk_single_4", path: t_throw_desk_single_4, volume: 1 },
	{ key: "t_throw_desk_single_5", path: t_throw_desk_single_5, volume: 1 },
	{ key: "t_throw_felt_single_1", path: t_throw_felt_single_1, volume: 1 },
	{ key: "t_throw_felt_single_2", path: t_throw_felt_single_2, volume: 1 },
	{ key: "t_throw_felt_single_3", path: t_throw_felt_single_3, volume: 1 },
	{ key: "t_throw_felt_single_4", path: t_throw_felt_single_4, volume: 1 },
	{ key: "t_throw_felt_single_5", path: t_throw_felt_single_5, volume: 1 },
	{ key: "t_throw_felt_to_desk_1", path: t_throw_felt_to_desk_1, volume: 1 },
	{ key: "t_throw_felt_to_desk_2", path: t_throw_felt_to_desk_2, volume: 1 },

	{ key: "h_fondle_hard_1", path: h_fondle_hard_1, volume: 1 },
	{ key: "h_fondle_hard_2", path: h_fondle_hard_2, volume: 1 },
	{ key: "h_fondle_hard_3", path: h_fondle_hard_3, volume: 1 },
	{ key: "h_fondle_medium_1", path: h_fondle_medium_1, volume: 1 },
	{ key: "h_fondle_medium_2", path: h_fondle_medium_2, volume: 1 },
	{ key: "h_fondle_medium_3", path: h_fondle_medium_3, volume: 1 },
	{ key: "h_fondle_soft_1", path: h_fondle_soft_1, volume: 1 },
	{ key: "h_fondle_soft_2", path: h_fondle_soft_2, volume: 1 },
	{ key: "h_fondle_soft_3", path: h_fondle_soft_3, volume: 1 },
	{ key: "h_shake_hand_closed_1x", path: h_shake_hand_closed_1x, volume: 1 },
	{ key: "h_shake_hand_closed_2x", path: h_shake_hand_closed_2x, volume: 1 },
	{ key: "h_shake_hand_closed_3x", path: h_shake_hand_closed_3x, volume: 1 },
	{ key: "h_shake_hand_closed_4x", path: h_shake_hand_closed_4x, volume: 1 },
	{ key: "h_shake_hand_open_1x", path: h_shake_hand_open_1x, volume: 1 },
	{ key: "h_shake_hand_open_2x", path: h_shake_hand_open_2x, volume: 1 },
	{ key: "h_shake_hand_open_3x", path: h_shake_hand_open_3x, volume: 1 },
	{ key: "h_shake_hand_open_4x", path: h_shake_hand_open_4x, volume: 1 },
	{ key: "h_swirl_hand_closed_1", path: h_swirl_hand_closed_1, volume: 1 },
	{ key: "h_swirl_hand_closed_2", path: h_swirl_hand_closed_2, volume: 1 },
	{ key: "h_swirl_hand_closed_3", path: h_swirl_hand_closed_3, volume: 1 },
	{ key: "h_swirl_hand_open_1", path: h_swirl_hand_open_1, volume: 1 },
	{ key: "h_swirl_hand_open_2", path: h_swirl_hand_open_2, volume: 1 },
	{ key: "h_swirl_hand_open_3", path: h_swirl_hand_open_3, volume: 1 },

	{ key: "d_dice_tap_long_1", path: d_dice_tap_long_1, volume: 1 },
	{ key: "d_dice_tap_long_2", path: d_dice_tap_long_2, volume: 1 },
	{ key: "d_dice_tap_long_3", path: d_dice_tap_long_3, volume: 1 },
	{ key: "d_dice_tap_long_4", path: d_dice_tap_long_4, volume: 1 },
	{ key: "d_dice_tap_long_5", path: d_dice_tap_long_5, volume: 1 },
	{ key: "d_dice_tap_short_1", path: d_dice_tap_short_1, volume: 1 },
	{ key: "d_dice_tap_short_2", path: d_dice_tap_short_2, volume: 1 },
	{ key: "d_dice_tap_short_3", path: d_dice_tap_short_3, volume: 1 },
	{ key: "d_dice_tap_short_4", path: d_dice_tap_short_4, volume: 1 },
	{ key: "d_dice_tap_short_5", path: d_dice_tap_short_5, volume: 1 },
	{ key: "d_fall_down_and_hit_steel_leg_of_an_ikea_desk", path: d_fall_down_and_hit_steel_leg_of_an_ikea_desk, volume: 1 },

	{ key: "c_cup_put_multiple_1", path: c_cup_put_multiple_1, volume: 1 },
	{ key: "c_cup_put_multiple_2", path: c_cup_put_multiple_2, volume: 1 },
	{ key: "c_cup_put_multiple_3", path: c_cup_put_multiple_3, volume: 1 },
	{ key: "c_cup_put_single_1", path: c_cup_put_single_1, volume: 1 },
	{ key: "c_cup_put_single_2", path: c_cup_put_single_2, volume: 1 },
	{ key: "c_cup_put_single_3", path: c_cup_put_single_3, volume: 1 },
	{ key: "c_cup_take_multiple_1", path: c_cup_take_multiple_1, volume: 1 },
	{ key: "c_cup_take_multiple_2", path: c_cup_take_multiple_2, volume: 1 },
	{ key: "c_cup_take_multiple_3", path: c_cup_take_multiple_3, volume: 1 },
	{ key: "c_cup_take_single_1", path: c_cup_take_single_1, volume: 1 },
	{ key: "c_cup_take_single_2", path: c_cup_take_single_2, volume: 1 },
	{ key: "c_cup_take_single_3", path: c_cup_take_single_3, volume: 1 },
	{ key: "c_shake_cup_multiple_hard_1", path: c_shake_cup_multiple_hard_1, volume: 1 },
	{ key: "c_shake_cup_multiple_hard_2", path: c_shake_cup_multiple_hard_2, volume: 1 },
	{ key: "c_shake_cup_multiple_hard_3", path: c_shake_cup_multiple_hard_3, volume: 1 },
	{ key: "c_shake_cup_multiple_medium_1", path: c_shake_cup_multiple_medium_1, volume: 1 },
	{ key: "c_shake_cup_multiple_medium_2", path: c_shake_cup_multiple_medium_2, volume: 1 },
	{ key: "c_shake_cup_multiple_medium_3", path: c_shake_cup_multiple_medium_3, volume: 1 },
	{ key: "c_shake_cup_multiple_soft_1", path: c_shake_cup_multiple_soft_1, volume: 1 },
	{ key: "c_shake_cup_multiple_soft_2", path: c_shake_cup_multiple_soft_2, volume: 1 },
	{ key: "c_shake_cup_multiple_soft_3", path: c_shake_cup_multiple_soft_3, volume: 1 },
	{ key: "c_shake_cup_single_long_1", path: c_shake_cup_single_long_1, volume: 1 },
	{ key: "c_shake_cup_single_long_2", path: c_shake_cup_single_long_2, volume: 1 },
	{ key: "c_shake_cup_single_long_3", path: c_shake_cup_single_long_3, volume: 1 },
	{ key: "c_shake_cup_single_short_1", path: c_shake_cup_single_short_1, volume: 1 },
	{ key: "c_shake_cup_single_short_2", path: c_shake_cup_single_short_2, volume: 1 },
	{ key: "c_shake_cup_single_short_3", path: c_shake_cup_single_short_3, volume: 1 },
	{ key: "c_swirl_cup_multiple_1", path: c_swirl_cup_multiple_1, volume: 1 },
	{ key: "c_swirl_cup_multiple_2", path: c_swirl_cup_multiple_2, volume: 1 },
	{ key: "c_swirl_cup_multiple_3", path: c_swirl_cup_multiple_3, volume: 1 },
	{ key: "c_swirl_cup_multiple_4", path: c_swirl_cup_multiple_4, volume: 1 },
	{ key: "c_swirl_cup_multiple_long_1", path: c_swirl_cup_multiple_long_1, volume: 1 },
	{ key: "c_swirl_cup_multiple_long_2", path: c_swirl_cup_multiple_long_2, volume: 1 },
	{ key: "c_swirl_cup_multiple_long_3", path: c_swirl_cup_multiple_long_3, volume: 1 },
	{ key: "c_swirl_cup_single_short_1", path: c_swirl_cup_single_short_1, volume: 1 },
	{ key: "c_swirl_cup_single_short_2", path: c_swirl_cup_single_short_2, volume: 1 },
	{ key: "c_swirl_cup_single_short_3", path: c_swirl_cup_single_short_3, volume: 1 },
];


/* Export */

export {
	images,
	spritesheets,
	audios
};