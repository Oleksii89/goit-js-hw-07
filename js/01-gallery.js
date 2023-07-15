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

galleryItemsRef.addEventListener("click", openOriginalImage);

function openOriginalImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = evt.target.dataset.source;
  //   const instance = basicLightbox.create(`
  //     <img src="${selectedImage}" width="800" height="600">

  // `);
  //   instance.show();

  // const visilbe = instance.visible();

  // document.addEventListener("keydown", closeModalWindowByEscape);
  // function closeModalWindowByEscape(evt) {
  //   if (visilbe && evt.code === "Escape") {
  //     instance.close();
  //   }
  // }
  const instance = basicLightbox.create(
    `
    <img src="${selectedImage}" width="800" height="600">
    
`,
    {
      onShow: (instance) =>
        window.addEventListener("keydown", closeModalWindowByEscape),

      onClose: (instance) =>
        window.removeEventListener("keydown", closeModalWindowByEscape),
    }
  );
  instance.show();
  function closeModalWindowByEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
