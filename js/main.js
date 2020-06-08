// First Slider
$(".slider-one") .not(".slick-intialized") .slick({
	autoplay:true,
	autoplaySpeed:1000,
	dots:true,
	prevArrow: ".site-slider .slider-btn .prev",
	nextArrow: ".site-slider .slider-btn .next",
});


// Seccond Slider
$(".slider-two") .not(".slick-intialized") .slick({
	autoplay:true,
	prevArrow: ".site-slider-two .prev",
	nextArrow: ".site-slider-two .next",
	slidesToShow: 5,
	slidesToScroll: 1,

	responsive: [{
			breakpoint: 576,
			settings: {
			slidesToShow: 2,
			}  
			},]


});

// Three Slider
$(".slider-three") .not(".slick-intialized") .slick({
	autoplay:true,
	autoplaySpeed:6000,
	prevArrow: ".site-slider-three .prev",
	nextArrow: ".site-slider-three .next",
	slidesToShow: 4,
	slidesToScroll: 1,

	responsive: [{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			} 
			},]

});
