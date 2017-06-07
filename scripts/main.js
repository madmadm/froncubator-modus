$(document).ready(function(){
	
	var scrollItemsNumber = $( '.scroller .scroll-data' ).length;
	var windowWidth = $( window ).width()

	setSizes()

	$( window ).resize(function() {
		setSizes()
	})
	$( '.scroll-right' ).click(function(){
		$( '.scroller' ).animate({
			left: "-=" + windowWidth
		})
	})
	$( '.scroll-left' ).click(function(){
		$( '.scroller' ).animate({
			left: "+=" + windowWidth
		})
	})
});

function setSizes() {
	scrollItemsNumber = $( '.scroller .scroll-data' ).length;
	windowWidth = $( window ).width()
	$( '.scroller .scroll-data' ).css({
		width: windowWidth
	})
	$( '.scroller' ).css({
		width: windowWidth * scrollItemsNumber
	})
}