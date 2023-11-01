const pianoKeys = document.querySelectorAll(".piano-keys .key");

const playTune = (key) => key;

pianoKeys.forEach((key) =>
  key.addEventListener("click", () => playTune(key.dataset.key))
);
