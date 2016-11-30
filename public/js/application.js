$(document).ready(function() {
  registrationButtonListener();
  loginButtonListener();
});

var registrationButtonListener = function() {
	$('.header-main').on('click', '.register-link', function(event){
		event.preventDefault();
		// console.log(event, 'event')
		// console.log(this, 'this')
		var $registerLink = $(this);
		var url = $registerLink.parent().attr('action');
		var method = $registerLink.parent().attr('method')

		request = $.ajax({
			url: url,
			method: method
		});

		request.done(function(response){
			$('.header-main').prepend(response);
			$('#register-form').slideToggle();
		});

		request.fail(function(response){
			alert("you broke shit");
		});
	});
}

var loginButtonListener = function() {
	$('.header-main').on('click', '.login-link', function(event) {
		event.preventDefault();
		// console.log(event, 'event')
		// console.log(this, 'this')
		var $loginLink = $(this);
		var url = $loginLink.parent().attr('action');
		var method = $loginLink.parent().attr('method')

		var request = $.ajax({
			url: url,
			method: method
		});

		request.done(function(response){
			$('.header-main').prepend(response);
			$('#login-form').slideToggle();
		})
	});
}


