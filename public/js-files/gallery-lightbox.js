document.addEventListener('DOMContentLoaded', () => {
  // 1. Select all images inside the .gallery-container
  const galleryImages = document.querySelectorAll('.gallery-container img');

  // 2. Loop through and add the class to every image
  galleryImages.forEach(img => {
    img.classList.add('glightbox');
  });

  // 3. NOW initialize GLightbox, after the classes are safely in place
  const lightbox = GLightbox({
    selector: '.glightbox' // It will now successfully find all your images!
  });
});