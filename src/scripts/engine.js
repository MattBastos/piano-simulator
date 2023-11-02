const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

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

const handleChangeVolume = ({ target }) => (audio.volume = target.value);

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mappedKeys.push(key.dataset.key);
});

document.addEventListener(
  "keydown",
  (e) => mappedKeys.includes(e.key) && playTune(e.key)
);

volumeSlider.addEventListener("input", handleChangeVolume);
