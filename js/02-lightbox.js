import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    )
    .join("")
);

const options = { captionsData: "alt", captionDelay: 250 };

var lightbox = new SimpleLightbox(".gallery a", options);

// console.log(galleryItems);
