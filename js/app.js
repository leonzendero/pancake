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


    let lastScrollTop = 0;

    document.addEventListener('scroll', () => {


      // Remove mobile header when scrolling
      // nav.classList.remove('header__nav--active');
      // burger.classList.remove('burger--active');


      let scrollSize = window.pageYOffset;


      if (lastScrollTop > scrollSize) {
        header.classList.remove('header--bottom');
        header.classList.add('header--top');

      } else if (lastScrollTop < scrollSize) {
        header.classList.remove('header--top');
        header.classList.add('header--bottom');
      }

      lastScrollTop = scrollSize;


      window.pageYOffset > 1 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
    });
  }



  // ========
  // acc ===

  !function (i) {
        let o, n;

        i(".acc-heading").on("click", function () {

            o = i(this).parents(".acc"), n = o.find(".acc-content"),


                o.hasClass("active")
                    ? (o.removeClass("active"), n.slideUp())

                    : (o.addClass("active"),
                        n.stop(!0, !0).slideDown(),
                        o.siblings("a").removeClass("active").children(".acc-content").stop(!0, !0).slideUp())
        })
    }(jQuery);

  // acc ===
  // ========



  // =================
  // card tooltip ===

  const card = document.querySelector('.card');

  if (card) {
    const cardToolBtn = document.querySelectorAll('.card__block-item-heading img');
    const cardToolContent = document.querySelectorAll('.card__block-item-content');
    const cardQue = document.querySelectorAll('.card__que');
    const cardQueTool = document.querySelectorAll('.card__que-tool');

    const CARD_TOOL_SPEED = 150;


    for (let i = 0; i < cardToolBtn.length; i++) {

      cardToolBtn[i].addEventListener('mouseenter', function() {

        if (window.innerWidth >= 992) {
          $($('.card__block-item-content').get(i)).fadeIn(CARD_TOOL_SPEED);
        }
      });
    }

    for (let i = 0; i < cardToolBtn.length; i++) {

      cardToolBtn[i].addEventListener('mouseleave', function() {

        if (window.innerWidth >= 992) {
          $($('.card__block-item-content').get(i)).fadeOut(CARD_TOOL_SPEED);
        }
      });
    }


    for (let i = 0; i < cardQue.length; i++) {

      cardQue[i].addEventListener('mouseenter', function() {
        cardQueTool[i].classList.add('active');
      });
    }

    for (let i = 0; i < cardQue.length; i++) {

      cardQue[i].addEventListener('mouseleave', function() {
        cardQueTool[i].classList.remove('active');
      });
    }

    if (window.innerWidth < 992) {

      const cardblockItem = document.querySelectorAll('.card__block-item');
      const cardblockItemHeading = document.querySelectorAll('.card__block-item-heading');
      const cardblockItemContent = document.querySelectorAll('.card__block-item-content');

      !function (i) {
          let o, n;

          i(".card__block-item-heading").on("click", function () {

              o = i(this).parents(".card__block-item"), n = o.find(".card__block-item-content"),


                  o.hasClass("active")
                      ? (o.removeClass("active"), n.slideUp())

                      : (o.addClass("active"),
                          n.stop(!0, !0).slideDown(),
                          o.siblings("a").removeClass("active").children(".card__block-item-content").stop(!0, !0).slideUp())
          })
      }(jQuery);
    }
  }

  // card tooltip ===
  // =================


  // =========
  // inst ===

  const inst = document.querySelector('.inst');

  if (inst) {

    const instItem = document.querySelectorAll('.inst__item');

    for (let i = 0; i < instItem.length; i++) {

      instItem[i].addEventListener('click', function() {
        instItem[i].classList.toggle('active');
      });

      document.addEventListener('click', function(e) {
        const target = e.target;
        const its_menu = target == instItem[i] || instItem[i].contains(target);
          
        if (!its_menu) {
          instItem[i].classList.remove('active')
        }
      });
    }
  }

  // inst ===
  // =========

  const swiper = new Swiper(".article-slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: ".article-slider-right",
      prevEl: ".article-slider-left",
    },
  });

  const sobSwiper1 = new Swiper('.sob__slider-1', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    // effect: 'flip',

    navigation: {
      nextEl: ".sob__slider-buttons-button-1-2",
      prevEl: ".sob__slider-buttons-button-1-1",
    },

    scrollbar: {
      el: '.sob__scrollbar-1',
    },

    breakpoints: {
      
      320: {
        slidesPerView: 1,
      },

      695: {
        slidesPerView: 2,
      },

      1150: {
        slidesPerView: 1,
      }
    }
  });

  const sobSwiper2 = new Swiper('.sob__slider-2', {
    slidesPerView: 2,
    spaceBetween: 20,
    // effect: 'slide',

    navigation: {
      nextEl: ".sob__slider-buttons-button-2-2",
      prevEl: ".sob__slider-buttons-button-2-1",
    },

    scrollbar: {
      el: '.sob__scrollbar-2',
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
      },

      695: {
        slidesPerView: 2,
      },

      1150: {
        slidesPerView: 1,
      }
    }
  });
}