import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let imgSource = "";
let instance;

// Render gallery items (I method).
gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <div class="gallery__item">
          <a class="gallery__link"  href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `
    )
    .join("")
);

// Render gallery items (II method).
// const galleryElements = galleryItems.map(
// ({ preview, original, description }) =>
// `<div class="gallery__item"><a class="gallery__link"  href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`
// );
//
// gallery.insertAdjacentHTML("beforeend", galleryElements.join(""));

// Image-modal open click handle.
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;

  imgSource = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600">
  `);

  instance.show();
});

// Keyboard event handle.
document.addEventListener("keydown", ({ code }) => {
  if (code === "Escape" && basicLightbox.visible()) {
    instance.close();
    console.log("close modal");
  }
});
