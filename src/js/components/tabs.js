import helpers from '../helpers';

function tabsInit(event) {
  let $this = $(event.currentTarget);
  let $tabId = $this.attr('data-id');

  $this.closest('.tab-content')
  .find(`[data-tab="${$tabId}"]`)
  .addClass('active')
  .siblings()
  .removeClass('active');

  $this.addClass('active')
  .siblings()
  .removeClass('active')
}

$('.tab-btn').on('click', tabsInit);

function openTabModal(e) {
  let $this = $(e.currentTarget);
  let $thisID = $this.data('id');

  let $thisHTML = $(`.section-seven__block[data-tab=${$thisID}]`).html();

  helpers.lockScroll(true, helpers.$body.find('.modal__body'));

  $('body').append(
    `<div class="modal">
      <span class="modal__close"></span>
      <div class="modal__body">${$thisHTML}</div>
    </div>`,
    '<div class="overlay"></div>'
  );

  
  $('.modal__close').on('click', closeTabModal)
}

function closeTabModal(e) {
  let $this = $(e.currentTarget);
  $this.parent().remove();
  $('.overlay').remove();
  helpers.lockScroll(false, helpers.$body.find('.modal__body'));
}

if (helpers.$window.width() < 1024) {
  $('.section-seven__tab').on('click', openTabModal);
}