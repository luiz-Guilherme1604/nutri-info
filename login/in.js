$(document).ready(function(){
  $('#on').click(function(){
      $('#password').attr('type', 'text');
      $('#on').hide();
      $('#of').show();
  });

  $('#of').click(function(){
      $('#password').attr('type', 'password');
      $('#of').hide();
      $('#on').show();
  });

  $('#signup_on').click(function(){
      $('#signup_password').attr('type', 'text');
      $('#signup_on').hide();
      $('#signup_off').show();
  });

  $('#signup_off').click(function(){
      $('#signup_password').attr('type', 'password');
      $('#signup_off').hide();
      $('#signup_on').show();
  });
});
