import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesList = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend",imagesList);

function createGallery(images) {
    return galleryItems.map(({preview, original, description }) => {
    return` <a class="gallery__item"
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
    </a>`;})
    .join("")
    }
    const galleryIcon = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
    // docClose: false,
    // close : false,
        captionDelay: 450,
        animationSpeed : 400,
        maxZoom: 4,
    // disableScroll : false,
});