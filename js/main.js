$( document ).ready(function() {
  // $('.fa-check').css('visibility','hidden');
  $('#click1').click(function(){
    $('#download .fa-spinner').hide();
    $('#download .fa-check').css('visibility','visible').hide().fadeIn('slow');

    $('#download').animate({color:'green'});
    $('#open .fa-spinner').css('visibility','visible').hide().fadeIn('fast');
    //$('#download').css("color",'green');

  });
  $('#click2').click(function(){
    $('#open .fa-spinner').hide();
    $('#open .fa-check').css('visibility','visible').hide().fadeIn('slow');

    $('#open').animate({color:'green'});
    //$('#download').css("color",'green');
    $('#read .fa-spinner').css('visibility','visible').hide().fadeIn('fast');

  });
});
