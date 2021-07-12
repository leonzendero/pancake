window.onload = function() {
  $(function() {
    $('.hero__run').marquee({
      duration: 9000,
      startVisible: false,
      duplicated: true
    });
  });


  const header = document.querySelector('.header');

  if (header) {

    const burgerButton = document.querySelector('.header__burger');
    const headerRight = document.querySelector('.header__right');
    const headerClose = document.querySelector('.header__close');

    burgerButton.addEventListener('click', function() {
      headerRight.classList.add('active');
    });

    headerClose.addEventListener('click', function() {
      headerRight.classList.remove('active');
    });
  }
}