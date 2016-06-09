$(function() {
    $('.jcarousel').jcarousel({
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
	
	function search(){
			i = 0;
			var text = $('#search').val();

function ajax(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            if (this.status == 200)
                callback(JSON.parse(this.responseText));
                 }
    };
    xhr.send(null);
};

ajax('http://api.pixplorer.co.uk/image?word='+text+'&amount=7', function(r){
    $('.grid div').each(function(){
			$(this).html(r.images[i].word);	
			$(this).css('background-image','url('+r.images[i].imageurl+')');
			i = i + 1;
			});
});
};
search();
		$( ".submit" ).click(function() {
			event.returnValue = false;
			search();
		});
});