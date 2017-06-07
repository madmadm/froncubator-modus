
$(document).ready(function(){
	
	var positionOfScroller = 0
	var windowWidth = $( window ).width()
	var scrollIndicatatorsArray = $( '.scroll-pointer .pointer' )

	setSizes(positionOfScroller)
	addScrollIndicators()
	highlightScroll(positionOfScroller)

////////////// listeners
	$( window ).resize(function() {
		setSizes(positionOfScroller)
	})

	$( '.scroll-right' ).click(function(){
		if (positionOfScroller * -1 < $( '.scroll-pointer .pointer' ).length - 1) {
			windowWidth = $( window ).width()
			positionOfScroller -= 1
			$( '.scroll-block .scroller' ).animate({
				left: "-=" + windowWidth
			})
			highlightScroll(positionOfScroller * -1)
		}
	})

	$( '.scroll-left' ).click(function(){
		if (positionOfScroller * -1 > 0) {
			windowWidth = $( window ).width()
			positionOfScroller += 1
			$( '.scroll-block .scroller' ).animate({
				left: "+=" + windowWidth
			})
			highlightScroll(positionOfScroller * -1)
		}
	})

	$( '.pointer' ).click(function(){
		pointerIndex = $(this).index()
		setSizes(pointerIndex * -1)
		highlightScroll(pointerIndex)
		positionOfScroller = pointerIndex * -1
	})
});
//////////////// functions
function highlightScroll(pos) {
	$( '.scroll-pointer .pointer' ).removeClass("highlighted")
	$this = $( '.scroll-pointer .pointer' )[pos]
	$($this).addClass("highlighted")
}

function setSizes(pos) {
	var scrollItemsNumber = $( '.scroll-block .scroller .scroll-data' ).length;
	windowWidth = $( window ).width()
	var itemWidth = Math.max(windowWidth, 320)
	$( '.scroll-block .scroller .scroll-data' ).css({
		width: itemWidth
	})
	$( '.scroll-block .scroller' ).css({
		width: itemWidth * scrollItemsNumber
	})
	$( '.scroll-block .scroller' ).css({
		left: pos * itemWidth
	})
}

function addScrollIndicators() {
	var scrollItemsNumber = $( '.scroll-block .scroller .scroll-data' ).length;
	for (var i = 0; i < scrollItemsNumber; i++) {
		$( '.scroll-pointer' ).append("<div class='pointer'></div>")
	}
}

// function taggingScrollItems() {
// 	var scrollIndicatorsArray = $( '.scroll-pointer .pointer' )
// 	for (var i = 0; i < scrollIndicatorsArray.length; i++) {
// 		scrollIndicatorsArray[i]
// 	}
// }