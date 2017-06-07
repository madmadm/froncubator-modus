
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
		windowWidth = $( window ).width()
		positionOfScroller -= 1
		console.log(positionOfScroller)
		$( '.scroller' ).animate({
			left: "-=" + windowWidth
		})
		highlightScroll(positionOfScroller * -1)
	})

	$( '.scroll-left' ).click(function(){
		windowWidth = $( window ).width()
		positionOfScroller += 1
		console.log(positionOfScroller)
		$( '.scroller' ).animate({
			left: "+=" + windowWidth
		})
		highlightScroll(positionOfScroller * -1)
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
	var scrollItemsNumber = $( '.scroller .scroll-data' ).length;
	windowWidth = $( window ).width()
	var itemWidth = Math.max(windowWidth, 320)
	$( '.scroller .scroll-data' ).css({
		width: itemWidth
	})
	$( '.scroller' ).css({
		width: itemWidth * scrollItemsNumber
	})
	$( '.scroller' ).css({
		left: pos * itemWidth
	})
}

function addScrollIndicators() {
	var scrollItemsNumber = $( '.scroller .scroll-data' ).length;
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