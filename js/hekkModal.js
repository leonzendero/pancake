let HekkModal = class {

  constructor(modal, options) {

    const mainModal = document.querySelector(`${modal}`);

    if (!mainModal) {
      return console.log(`this "${modal}" undefined`)
    }

    this.modal = mainModal;
    this.options = options;

    this.init();
  }

  init() {
    let btnOpenArray = this.options.btnOpen;
    let btnCloseArray = this.options.btnClose;
    let thisModal = this;

    function btnTypeInit(elem, type) {

      let btnElem = document.querySelectorAll(`${elem}`);

      if (btnElem.length === 0) return;

      for (let i = 0; i < btnElem.length; i++) {

        btnElem[i].addEventListener('click', function() {

          if (type === 'open') {
            thisModal.open();
          } else if (type === 'close') {
            thisModal.close();
          }
        })
      }
    }

    btnTypeInit(btnOpenArray, 'open');
    btnTypeInit(btnCloseArray, 'close');

    this.overviewClose();
  }

  open() {
    this.modal.classList.add('active');
    this.checkHeight();
  }

  close() {
    this.modal.classList.remove('active');
  }

  overviewClose() {
    let overview = this.modal.querySelector('.modal__dark');
    let thisModal = this;

    overview.addEventListener('click', function(e) {
      const modalBody =  thisModal.modal.querySelector('.modal__body');
      const target = e.target;
      const its_menu = target == modalBody || modalBody.contains(target);
        
      if (!its_menu) {
        thisModal.close();
      }
    });
  }

  checkHeight() {
    let modalBody = this.modal.querySelector('.modal__body');
    let modalDark = this.modal.querySelector('.modal__dark');

    if (modalBody.clientHeight > window.innerHeight) {
      this.modal.classList.add('modal-overflow-scroll');
      modalDark.classList.add('modal-overflow-scroll');
    }
  }

  destroy() {
    this.modal.remove();
  }
}