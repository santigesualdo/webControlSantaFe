$( '.owl-carousel' ).owlCarousel({
    items:1,
    dots:true,
    autoplay:true,
    autoplayTimeout:10000,
    loop:true,
    navRewind:true
});

function setSkrollr(){
    var objDistance = $header.offset().top;
    $(window).scroll(function() {
        var myDistance = $(window).scrollTop();
        if (myDistance > objDistance){
            $header.addClass('navbar-fixed-top');
        }
        if (objDistance > myDistance){
            $header.removeClass('navbar-fixed-top');
        }
    });
}

(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#loader").delay(600).fadeOut();
		$("#hideAll").delay(600).fadeOut();
		$('body').css("overflow-y","auto");
		$("#sliderMask").delay(600).fadeIn();
		$('#sliderMask').css("z-index","97");
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#header',
		offset: $(window).height() / 2
	});

	/* boton BackToTop, para volver al principio */
	$('#back-to-top').on('click', function(){
		$('body,html').animate({scrollTop: 0}, 600);
	});

	/* Si le hacemos click al logo del header, volvemos al principio */
	$('#logoHeader').on('click', function(){
		event.preventDefault();
        $("html, body").animate({ scrollTop: $('#section0').offset().top }, 500);
	});	

	// Para que cualquier objeto de la clase text menu, al activarse el click, scrollee hasta esta esa posicion en pantalla
	$('.textMenu').on('click', function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
	});

	// Formulario de contacto (solo funciona si se trabaja con formularios de google)
	$('#butConsulta').on('click', function(){
        document.getElementById('formToHide').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';		
	});

	// Si la scrolleada vertical supera los 700px se muestra en fade el boton para volver al principio
	$(window).on('scroll', function() {
	    var wScroll = $(this).scrollTop();

		if (wScroll > 300) {
			$('#back-to-top').fadeIn();
			$('.mainHeader').css('background','#191A37');
		}else{
			$('#back-to-top').fadeOut();
			$('.mainHeader').css('background','transparent');
		}  
	});

})(jQuery);
