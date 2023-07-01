import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

const galleryOfImg = ({ preview, original, description }) =>
    `    
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;


const galleryMarkup = galleryItems.reduce((acc, img) => acc + galleryOfImg(img), "");

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onclick);

function onclick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  const modal = basicLightbox.create(`
            <img src="${event.target.dataset.source}" width="800" height="600">
        `).show()
  
  document.addEventListener("keydown", onEscClick);
  function onEscClick(event) {
    if (event.code === "Escape") {
      modal.close();
      document.removeEventListener("keydown", onEscClick);
    }
  }
};