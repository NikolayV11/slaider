let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-nex").addEventListener("click", function () {
  offset += 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 256;
  if (offset < 0) {
    offset = 768;
  }
  sliderLine.style.left = -offset + "px";
});
