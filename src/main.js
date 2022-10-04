import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import TiledScene from "./scenes/TiledScene";
import TiledWithPlayerScene from "./scenes/TiledWithPlayerScene";
import NavmeshBasic, { NavmeshStart } from "./scenes/NavmeshBasic";
import { PhaserNavMeshPlugin } from "phaser-navmesh";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 750,
  height: 750,
  // backgroundColor: "#fff",
  physics: {
    default: "arcade",
    // arcade: {
    //   gravity: { y: 200 },
    // },
    arcade: {
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        key: "NavMeshPlugin", // Key to store the plugin class under in cache
        plugin: PhaserNavMeshPlugin, // Class that constructs plugins
        mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
        start: true,
      },
    ],
  },
  //   scene: [HelloWorldScene],
  //   scene: [TiledScene],
});

// export default new Phaser.Game(config);
game.scene.add("hello-world", HelloWorldScene);
game.scene.add("tiled", TiledScene);
game.scene.add("tiled-with-player", TiledWithPlayerScene);
game.scene.add("navmesh-basic", NavmeshBasic);
game.scene.add("navmesh-start", NavmeshStart);

game.scene.start("navmesh-basic");
