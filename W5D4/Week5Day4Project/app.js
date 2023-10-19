$('.navItem').each(function() {
    $(this).css('color', 'white');
});

$('#nav').each(function() {
    $(this).css('background-color', '#145');
});

$('li:even').css('background-color', '#ccc');

$('li:odd').css('background-color', '#aaa');

$('#myInput').attr('placeholder', 'Ethan Crandall');// Children wernt working? So I used attr to get placeholder.