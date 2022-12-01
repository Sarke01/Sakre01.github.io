function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}
var counter = 0;
function moveRight() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    moveLeft();
  }
  if (event.key == "ArrowRight") {
    moveRight();
  }
  counter++;
});

var block = document.getElementById("block");
block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
});

setInterval(function () {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var blocktop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (characterLeft == blockLeft && blocktop < 500 && blocktop > 300) {
    alert("Game Over! Score:" + counter);
    block.style.animation = "none";
  }
});

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
