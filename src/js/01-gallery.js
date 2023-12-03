import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const galleryItem = `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>
  `;

  gallery.insertAdjacentHTML('beforeend', galleryItem);
});

const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach(galleryImage => {
  galleryImage.style.display = 'block';
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'below',
  captionDelay: 250,
});
console.log(galleryImages);
