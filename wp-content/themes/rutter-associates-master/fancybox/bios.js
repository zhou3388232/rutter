$(document).ready(function() {
	$(".fancybox-popup").fancybox({
    	'titlePosition'	: 'inside',
    	'transitionIn'	: 'none',
    	'transitionOut'	: 'none',
        onComplete : function(){
            if ($(window).width() < 769){
                var h = $(window).height()*0.85;
                var _h = $('#fancybox-content').height();
                if ( _h > h) {
                    $('#fancybox-content').css('height', h );
                };
            }
        }
	});

});
