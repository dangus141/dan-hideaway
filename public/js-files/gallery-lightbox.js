document.addEventListener('DOMContentLoaded', () => {
  // 1. Select all images inside .gallery-container
  const galleryImages = document.querySelectorAll('.gallery-container img');

  // 2. Loop through and add the class ONLY if the image doesn't have the 'exclude' class
  galleryImages.forEach(img => {
    if (!img.classList.contains('exclude')) {
      img.classList.add('glightbox');
    }
  });

  // 3. Initialize GLightbox exactly ONCE using the clean selector
  const lightbox = GLightbox({
    selector: '.glightbox'
  });
});
