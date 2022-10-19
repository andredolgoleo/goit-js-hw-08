// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

galleryItems.map(image => {
  const gallery__item = `
  <a class="gallery__item" href="${image.original}">
    <img spinner="true" class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>
`;

  gallery.insertAdjacentHTML('afterbegin', gallery__item);
});

gallery.addEventListener('click', e => {
  e.preventDefault();

  const slider = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt'
  });

  const item = e.target;

  if (item.tagName !== 'IMG') {
    return;
  };

  slider.open();
});

console.log(galleryItems);
