$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
		wrap: 'both',
		animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }},
		
    });
	
    $('.jcarousel-prev').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '-=1'
    });
	$("select").selectbox();
});

