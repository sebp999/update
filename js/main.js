$( document ).ready(function() {
    console.log("ready");
    $('#proc').click(
      function(){
        console.log('click');

        $('#download').addClass('fa-pulse');
      });
});
