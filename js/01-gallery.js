import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let imgSource = "";
let instance;

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

// const galleryElements = galleryItems.map(
// ({ preview, original, description }) =>
// `<div class="gallery__item"><a class="gallery__link"  href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`
// );
//
// gallery.insertAdjacentHTML("beforeend", galleryElements.join(""));

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;

  imgSource = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600">
  `);

  instance.show();
});

document.addEventListener("keydown", ({ code }) => {
  if (code === "Escape" && basicLightbox.visible()) {
    instance.close();
    console.log("close modal");
  }
});
