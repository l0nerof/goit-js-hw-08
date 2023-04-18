import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
