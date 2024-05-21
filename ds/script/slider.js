const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".value");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, rgba(25,117,240, 1) ${progress}%, #ccc ${progress}%)`;
});

// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = `linear-gradient(to right, rgba(25,117,240, 1) ${sliderValue}%, #ccc ${sliderValue}%)`;
// }

// progressScript()
