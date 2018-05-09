$(function(){
    $('.recall_sliders').slick({
    	prevArrow: '<div class="slider-arrow"><i class="prev-arrow fa fa-angle-left"></i></div>',
    	nextArrow: '<div class="slider-arrow"><i class="next-arrow fa fa-angle-right"></i></div>',
    	dots: true,
    });
    $('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
	$('.phone-icon').click(function() {
	$('#exampleModal').arcticmodal()
	});
});

$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "assets/template/Bulgaria/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});	
});

