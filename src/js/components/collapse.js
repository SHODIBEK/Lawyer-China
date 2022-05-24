function toggleCollapse(e) {
  let $this = $(e.currentTarget);

  $this.toggleClass('collapse__item--active');

  $this.children('.collapse__body').slideToggle();
}

$('.collapse__item').on('click', toggleCollapse);