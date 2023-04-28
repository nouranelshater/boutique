let activeSlide = 1;

setInterval(() => {
  activeSlide = activeSlide + 1;
  if (activeSlide > 3) {
    activeSlide = 1;
  }
  [...document.querySelectorAll('#slider ul li')].forEach((item) => {
    item.classList.remove('active');
  });
  document
    .querySelector('#slider ul li:nth-child(' + activeSlide + ')')
    .classList.add('active');
}, 2000);
