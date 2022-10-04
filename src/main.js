import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import TiledScene from "./scenes/TiledScene";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
    // arcade: {
    //   gravity: 0,
    // },
  },
  //   scene: [HelloWorldScene],
  //   scene: [TiledScene],
});

// export default new Phaser.Game(config);
game.scene.add("hello-world", HelloWorldScene);
game.scene.add("tiled", TiledScene);
game.scene.start("tiled");
