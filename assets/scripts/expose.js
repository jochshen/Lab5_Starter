// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const imageElement = document.querySelector("img");
  const audioElement = document.querySelector("audio");
  const volElement = document.getElementById("volume");
  const volImage = document.querySelector("#volume-controls img");
  let selectedHorn = ""
  hornSelect.addEventListener("change", function () {
    selectedHorn = hornSelect.value;
    console.log(hornSelect.value);
    imageElement.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  const playSound = document.querySelector("button");
  playSound.onclick = function () {
    const selectedHorn = hornSelect.value;
    audioElement.play();

    if (selectedHorn === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
      });
    }
  };

  volElement.addEventListener("change", function () {
    const changedVolElement = volElement.value / 100;
    audioElement.volume = changedVolElement;

    if (changedVolElement == 0) {
      volImage.src = "assets/icons/volume-level-0.svg";
    } else if (changedVolElement < 0.33) {
      volImage.src = "assets/icons/volume-level-1.svg";
    } else if (changedVolElement < 0.67) {
      volImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volImage.src = "assets/icons/volume-level-3.svg";
    }
    console.log(changedVolElement);
  });

  // TODO
}
