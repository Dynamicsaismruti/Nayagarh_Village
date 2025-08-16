
// script.js inside HTML
document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = document.querySelectorAll('.js-thumb');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbimg');

  galleryImgs.forEach(img=>{
    img.addEventListener('click', (e)=>{
      lbImg.src = e.currentTarget.dataset.large || e.currentTarget.src;
      lightbox.classList.add('show');
    })
  });

  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) lightbox.classList.remove('show');
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') lightbox.classList.remove('show');
  });
});