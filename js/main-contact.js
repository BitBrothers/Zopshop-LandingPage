$(document).ready(function(){

	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	$( "#contactus" ).submit(function( event ) {
		event.preventDefault();
		if(validateEmail($( "#emailSignup" ).val()))
		{
			var form_data = {
				email: $( "#emailSignup" ).val(),
				content: $( ".form-control" ).val(),
			};
			$.ajax({
				url: "http://127.0.0.1/invitelist/index.php/json/mail_save",
				type: 'POST',
				data: form_data,
				success: function(msg) {
					var message= JSON.parse(msg);
					if(message)
					{
						$("#valid").html('Thank you for contacting us. We will get in touch with you shortly.');
						$("#valid").addClass('animated fadeInDown');
					}
					else
					{
						$("#valid").html('Please enter a valid email address.');
						$("#valid").addClass('animated fadeInDown');
					}
				}
			});
		}
		else{
			$("#valid").html('Please enter a valid email address.');
			$("#valid").addClass('animated fadeInDown');
		}
	});
});
