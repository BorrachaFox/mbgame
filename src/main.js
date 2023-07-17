import './style.css';
import Phaser, { Scene } from 'phaser';

const gameState = {
  screen: {
    width: 960,
    height: 540
  }
}

class GameScene extends Scene {
  constructor() {
    super('game')
  }

  preload() {

  }

  create() {
    gameState.player = this.add.rectangle(50,50,50,50, 0x000000)
    gameState.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if(gameState.cursors.up.isDown) {
      gameState.player.y -= 3;
    }
    if(gameState.cursors.down.isDown) {
      gameState.player.y += 3;
    }
    if(gameState.cursors.right.isDown) {
      gameState.player.x += 3;
    }
    if(gameState.cursors.left.isDown) {
      gameState.player.x -= 3;
    }
  }
}

class PreloadScreen extends Scene {
  constructor() {
    super('preload')
  }
  preload() {
    this.load.image('bg', './assets/images/bg.png')
  }

  create() {
    const background = this.add.sprite(gameState.screen.width/2, gameState.screen.height/2,'bg');
    background.scale = 0.45

    const btn = this.add.rectangle(gameState.screen.width/2, gameState.screen.height/2, 250, 50, 0xFFFFFF);
    btn.setInteractive();
    btn.on('pointerdown', () => this.scene.start('game'));
  }

  update() {
    
  }
}

const config = {
  type: Phaser.AUTO,
  width: gameState.screen.width,
  height: gameState.screen.height,
  backgroundColor: 0x336633,
  scene: [
    PreloadScreen,
    GameScene
  ]
}

const game = new Phaser.Game(config);
