import React, { useEffect } from "react";
import Phaser from "phaser";

const SortingGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#b2f2e6",
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    let score = 0;
    let scoreText;
    let timeLeft = 30;

    function preload() {
      this.load.image("plastic", "plastic.png"); // Replace with actual path
      this.load.image("banana", "banana.png"); // Replace with actual path
      this.load.image("compostBin", "cbin.png"); // Replace with actual path
      this.load.image("recyclingBin", "rbin.png"); // Replace with actual path
    }

    function create() {
      // Display bins
      const compostBin = this.add.image(100, 500, "compostBin").setInteractive();
      const recyclingBin = this.add.image(300, 500, "recyclingBin").setInteractive();

      // Display items to sort
      const plastic = this.add.image(200, 100, "plastic").setInteractive();
      const banana = this.add.image(400, 100, "banana").setInteractive();

      // Make items draggable
      this.input.setDraggable(plastic);
      this.input.setDraggable(banana);

      // Add score text
      scoreText = this.add.text(16, 16, "Score: 0", { fontSize: "32px", fill: "#000" });

      // Add timer text
      const timeText = this.add.text(600, 16, `Time: ${timeLeft}`, { fontSize: "32px", fill: "#000" });

      // Countdown timer
      this.time.addEvent({
        delay: 1000, // 1 second
        callback: () => {
          timeLeft--;
          timeText.setText(`Time: ${timeLeft}`);
          if (timeLeft <= 0) {
            this.scene.pause();
            alert("Time's up! Final Score: " + score);
          }
        },
        callbackScope: this,
        loop: true,
      });

      // Drag events
      this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });

      // Drop events
      this.input.on("dragend", (pointer, gameObject) => {
        if (
          Phaser.Geom.Intersects.RectangleToRectangle(
            gameObject.getBounds(),
            compostBin.getBounds()
          )
        ) {
          if (gameObject.texture.key === "banana") {
            score += 10;
            scoreText.setText("Score: " + score);
            gameObject.destroy(); // Remove item from game
          }
        } else if (
          Phaser.Geom.Intersects.RectangleToRectangle(
            gameObject.getBounds(),
            recyclingBin.getBounds()
          )
        ) {
          if (gameObject.texture.key === "plastic") {
            score += 10;
            scoreText.setText("Score: " + score);
            gameObject.destroy(); // Remove item from game
          }
        } else {
          gameObject.x = gameObject.input.dragStartX; // Reset position if dropped incorrectly
          gameObject.y = gameObject.input.dragStartY;
        }
      });
    }

    function update() {
      // Add logic for conveyor belts or dynamic item addition if needed
    }

    // Cleanup Phaser game on component unmount
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default SortingGame;
