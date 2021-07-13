window.onload = function() {

  if (window.innerWidth >= 992) {
    $('.hero__run').marquee({
      duration: 9000,
      startVisible: false,
      duplicated: true
    });
  }

  window.addEventListener('resize', function() {

    if (window.onload.innerWidth < 992) {

      $(".hero__run").marquee('destroy');
    }
  });


  const header = document.querySelector('.header');

  if (header) {

    const burgerButton = document.querySelector('.header__burger');
    const headerRight = document.querySelector('.header__right');
    const headerClose = document.querySelector('.header__close');
    const bodyBlue = document.querySelector('.body-header-blur');
    const headerLogo = document.querySelector('.header__logo');

    function headerAdd() {
      headerRight.classList.add('active');
      bodyBlue.classList.add('active');
      headerLogo.classList.add('active');
    }

    function headerRemove() {
      headerRight.classList.remove('active');
      bodyBlue.classList.remove('active');
      headerLogo.classList.remove('active');
    }

    burgerButton.addEventListener('click', function() {
      headerAdd();
    });

    headerClose.addEventListener('click', function() {
      headerRemove();
    });


    document.addEventListener('click', function(e) {
      const target = e.target;
      const its_menu = target == headerRight || headerRight.contains(target);
      const its_btnMenu = target == burgerButton;
        
      if (!its_menu && !its_btnMenu) {
        headerRemove();
      }
    });
  }
}