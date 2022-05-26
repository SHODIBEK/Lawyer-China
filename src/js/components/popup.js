import helpers from '../helpers';
import 'jquery-validation';

/// popup init function
function popupShow(e) {
  $('#popup').show();
  $('body').append(
    '<div class="overlay"></div>'
  );

  helpers.lockScroll(true, helpers.$body.find('.modal__body'));
}

function popupClose(e) {
  let $this = $(e.currentTarget);
  $this.closest('.modal').hide();
  $('#popup').hide();
  $('.overlay').remove();
  helpers.lockScroll(false, helpers.$body.find('.modal__body'));
}

// event handler
$('.js-popupInit').on('click', popupShow);
$('.modal__close').on('click', popupClose);

$('form').each(function() {
  $(this).validate({
    rules: {
      name: "required",
      tel: {
        required: true,
        number: true
      }
    },
    messages: {
      name: "Это поле обязательно к заполнению.",
      tel: {
        required: "Это поле обязательно к заполнению.",
        number: "Пожалуйста, введите корректное число."
      },
    },
    submitHandler: function(form) {
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: $(form).serialize(),
        success: function(res){
          $('#popup-success').show();
          $('body').append(
            '<div class="overlay"></div>'
          );
          helpers.lockScroll(true, helpers.$body.find('.modal__body'));
        },
        error: function(){
          console.log('Ошибка');
        }
      });
      return false;
    }
  });
});