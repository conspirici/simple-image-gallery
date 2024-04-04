var images = document.querySelectorAll(".images img");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var currentImageIndex = 0;

images.forEach(image => {
  image.addEventListener("click", () => {
    image.classList.toggle("zoom");
    prevButton.classList.toggle("visible");
    nextButton.classList.toggle("visible")
  });
});

prevButton.addEventListener("click", () => {
  displayImage(currentImageIndex - 1);
});

nextButton.addEventListener("click", () => {
  displayImage(currentImageIndex + 1);
});

function displayImage(index) {
  index = Math.max(0, Math.min(index, images.length - 1));

  if (images[currentImageIndex]) {
    images[currentImageIndex].classList.remove("zoom");
  }

  images[index].classList.add("zoom");

  currentImageIndex = index;
}
