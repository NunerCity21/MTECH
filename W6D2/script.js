$(document).ready(function() {
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        $('#gridContainer').append('<div class="box"></div>');
      }
    }
  });
  

  $(document).ready(function() {
    $('.box').on('click', function() {
      $(this).toggleClass('switch');
    });
  });  