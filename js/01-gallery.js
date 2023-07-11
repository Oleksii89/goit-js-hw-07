import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
galleryItemsRef.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);
