$(function() {
    $('.jcarousel').jcarousel({
		animation: {
        duration: 200,
        easing:   'linear',
        complete: function() {
        }},
		
    });
	
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
	 $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
					return '<a href="#' + page + '">' + page + '</a>';
                }
            });
});

