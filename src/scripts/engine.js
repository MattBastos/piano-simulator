const pianoKeys = document.querySelectorAll(".piano-keys .key");

let mappedKeys = [];

let audio = new Audio("src/tunes/src_tunes_y.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mappedKeys.push(key.dataset.key);
});

document.addEventListener(
  "keydown",
  (e) => mappedKeys.includes(e.key) && playTune(e.key)
);
