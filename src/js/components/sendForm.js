
// SEND FORM FUNCTION
function sendForm(e) {
  e.preventDefault();
  let form = $(this).closest("form");
  let formData = form.serialize();
  let errors = false;

  form.find('input:not([type=radio]').each(function(){
    let formVal = $(this).val();
    if( $.trim(formVal) == ''){
      errors = true;
      $(this).addClass('error');
    }
    if(!errors){
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: formData,
        success: function(res){
          $('#popup-success').show();
          $('body').append(
            '<div class="overlay"></div>'
          );
        },
        error: function(){
          console.log('Ошибка');
        }
      });
    }
  });
}


$('button[type="submit"]').on('click', sendForm);