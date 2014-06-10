$(document).ready(function(){

	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	$(".home-copy #invitation_email").click(function(t){
		var value = $( ".home-copy #invitation_email" ).val();
		if(value=="Request Invitation")
		{
			$( ".home-copy #invitation_email" ).val('');
		}
	});
	
	$(".home-copy #invitation_email").focusout(function(t){
		var value = $( ".home-copy #invitation_email" ).val();
		if(value=="")
		{
			$( ".home-copy #invitation_email" ).val('Request Invitation');
		}
	});
	
/*	document.getElementById("invitation_form").onsubmit = function (ev) {
		console.log("Here");
		
		ev.preventDefault();
	};*/
	
	/*			var form_data = {
				email: $( "#invitation_email" ).val(),
			};
			console.log(email);
			$.ajax({
				url: "http://127.0.0.1/codeigniter/index.php/json/invitelist_save",
				type: 'POST',
				data: form_data,
				success: function(msg) {
					var message= JSON.parse(msg);
					if(!message.length)
					{
						console.log("Success");
					}
					else
					{
						console.log("Fail");
					}
				}
			});*/
	
	$( "#invitation_form" ).submit(function( event ) {
		event.preventDefault();
		if(validateEmail($( "#invitation_email" ).val()))
		{
			var form_data = {
				email: $( "#invitation_email" ).val(),
			};
//			console.log(form_data);
			$.ajax({
				url: "http://127.0.0.1/invitelist/index.php/json/invitelist_save",
				type: 'POST',
				data: form_data,
				success: function(msg) {
					var message= JSON.parse(msg);
					if(message)
					{
						$("#valid").html('Thank you for registering your email. A download link with the instructions to download and install the app will be sent to you shortly.');
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
	
	var mySwiper = new Swiper('.swiper-container',{
		loop:true,
		onlyExternal: true,
		autoResize: true
	});
	
	setInterval( function() {
		mySwiper.swipeNext();
		if ( $( ".section2" ).hasClass( "hide" ) ) {
			if( $( ".slide-1-1" ).hasClass( "hide" ) ){
				$('.slide-1-1').removeClass('hide').addClass('animated fadeInDown');
			}
			else if( $( ".slide-1-2" ).hasClass( "hide" ) ){
				$('.slide-1-2').removeClass('hide').addClass('animated fadeInDown');
			}
			else if( $( ".slide-1-3" ).hasClass( "hide" ) ){
				$('.slide-1-3').removeClass('hide').addClass('animated fadeInDown');
			}
			else{
				$('.section1').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-1-1').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-1-2').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-1-3').removeClass('animated fadeInDown').addClass('hide');
				$('.section2').removeClass('hide').addClass('animated fadeInDown');
			}
		}
		else if( $( ".section1" ).hasClass( "hide" ) ){
			if( $( ".slide-2-1" ).hasClass( "hide" ) ){
				$('.slide-2-1').removeClass('hide').addClass('animated fadeInDown');
			}
			else if( $( ".slide-2-2" ).hasClass( "hide" ) ){
				$('.slide-2-2').removeClass('hide').addClass('animated fadeInDown');
			}
			else if( $( ".slide-2-3" ).hasClass( "hide" ) ){
				$('.slide-2-3').removeClass('hide').addClass('animated fadeInDown');
			}
			else{
				$('.section2').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-2-1').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-2-2').removeClass('animated fadeInDown').addClass('hide');
				$('.slide-2-3').removeClass('animated fadeInDown').addClass('hide');
				$('.section1').removeClass('hide').addClass('animated fadeInDown');
			}
		}
    },5000);
});
