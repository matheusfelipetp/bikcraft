const gallery = document.querySelectorAll(".product__img img");
const galleryContainer = document.querySelector(".product__img");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 460px)").matches;

  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(eventsGallery);
