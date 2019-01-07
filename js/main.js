$( '.owl-carousel' ).owlCarousel({
    items:1,
    dots:false,
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
        }else if (objDistance > myDistance){
            $header.removeClass('navbar-fixed-top');
        }
    });
}

function adaptarMask(event){

  var w = document.documentElement.clientWidth;

  // Slider Mask
  var sliderMaskRatio= 12.6481;
  var hSliderMask = w/sliderMaskRatio;

  // GradientMask 1920
  var gradientMaskRatio1920= 2.6337;
  var hGradientMask1920= w/gradientMaskRatio1920;
  // GradientMask 1024
  var gradientMaskRatio1024= 1.7808;
  var hGradientMask1024= w/gradientMaskRatio1024;
  // GradientMask 720
  var gradientMaskRatio720= 0.821917;
  var hGradientMask720= w/gradientMaskRatio720;

  // QuienesSomosMask 1920
  var quienesSomosMaskRatio1920= 2.633744;
  var hQuienesSomosMask1920= w/quienesSomosMaskRatio1920;
    // QuienesSomosMask 1024
  var quienesSomosMaskRatio1024= 1.747410;
  var hQuienesSomosMask1024= w/quienesSomosMaskRatio1024;
    // QuienesSomosMask 720
  var quienesSomosMaskRatio720= 0.7817;
  var hQuienesSomosMask720= w/quienesSomosMaskRatio720;

  // FooterMask
  var footerMaskRatio= 3.7322;
  var hFooterMask=w/footerMaskRatio;
  
  // Deco 1 
  var deco1Ratio=3.5036;
  var hDeco1= w/deco1Ratio;
  // Deco 2 
  var deco2Ratio=1.8658;
  var hDeco2= w/deco2Ratio;
  // Deco 3 
  var deco3Ratio=1.1367;
  var hDeco3= w/deco3Ratio;
  
  $('body').css('width',w);

  $('img.img-wrap').css('width',w);
  $('img.img-wrap').css('height', 'auto');

  $('div#sliderMask').css('width', w);
  $('div#sliderMask').css('height', hSliderMask);

  $('div#gradientMask').css('width', w);
  $('div#quienessomosMask').css('width', w);
  if (w>1024){
    $('div#gradientMask').css('height', hGradientMask1920);  
    $('#serviciosCurvo').css('height', hGradientMask1920);
    $('div#quienessomosMask').css('height', hQuienesSomosMask1920);
  }else if (w>768 && w<=1024) {
    $('div#gradientMask').css('height', hGradientMask1024);  
    $('#serviciosCurvo').css('height', hGradientMask1024);
    $('div#quienessomosMask').css('height', hQuienesSomosMask1024);
  }else if (w<=768){
    $('div#gradientMask').css('height', hGradientMask720);  
    $('div#quienessomosMask').css('height', hQuienesSomosMask720);
  }

  $('div#footerMask').css('width', w);
  $('div#footerMask').css('height', hFooterMask);

  $('div#deco1').css('width', w);
  $('div#deco1').css('height', hDeco1);
  
  $('div#deco2').css('width', w);
  $('div#deco2').css('height', hDeco2);

  $('div#deco3').css('width', w);
  $('div#deco3').css('height', hDeco3);

}

window.addEventListener('resize', adaptarMask);

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
		adaptarMask();
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
