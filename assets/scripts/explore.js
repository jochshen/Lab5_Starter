window.addEventListener("DOMContentLoaded", init);


function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const presstoTalk = document.querySelector("button");
  const imageElement = document.querySelector("img");

  window.speechSynthesis.onvoiceschanged = function () {
      const voices = window.speechSynthesis.getVoices();
      // console.log(voices);
      voices.forEach((voice) => {
          const option = document.createElement("option");
          option.textContent = voice.name;
          option.setAttribute("value", voice.name);
          voiceSelect.appendChild(option);
      });
  };

  presstoTalk.addEventListener("click", function () {
      const selectedVoiceName = voiceSelect.value;
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(
          (voice) => voice.name === selectedVoiceName
      );

      // console.log(selectedVoice, selectedVoiceName);
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = textArea.value;
      utterance.voice = selectedVoice;

      imageElement.src = "assets/images/smiling-open.png";
      window.speechSynthesis.speak(utterance);

      utterance.onend = function () {
          imageElement.src = "assets/images/smiling.png";
      };
  });
}

