$(document).ready(function(){

	var positionOfBotScroller = 0
	

	////////////// listeners

	// $( window ).resize(function() {
	// 	setSizes(positionOfBotScroller)
	// })

	$( '.happy-clients .buttons .right' ).click(function(){
		var clientsNumber = $( '.happy-clients .scroll-bottom .scroller' ).children().length
		var visibleClientsNumber = Math.floor($( '.happy-clients .scroll-bottom' ).width() / $( '.happy-clients .scroll-bottom .scroller .client' ).width())
		if (clientsNumber - (positionOfBotScroller * -1) > visibleClientsNumber) {
			var firstClient = $( '.happy-clients .scroll-bottom .scroller' ).children()[0]
			var firstClientWidth = $(firstClient).width()
			var firstClientMargin = parseInt($(firstClient).css("margin-right"))
			var offset = firstClientWidth + firstClientMargin
			$( '.happy-clients .scroll-bottom .scroller' ).animate({
				left: "-=" + offset
			})
			positionOfBotScroller -= 1
		}
	})

	$( '.happy-clients .buttons .left' ).click(function(){
		var clientsNumber = $( '.happy-clients .scroll-bottom .scroller' ).children().length
		if (positionOfBotScroller * -1 > 0) {
			var lastClient = $( '.happy-clients .scroll-bottom .scroller' ).children()[0]
			var lastClientWidth = $(lastClient).width()
			var lastClientMargin = parseInt($(lastClient).css("margin-right"))
			var offset = lastClientWidth + lastClientMargin
			$( '.happy-clients .scroll-bottom .scroller' ).animate({
				left: "+=" + offset
			})
			positionOfBotScroller += 1
		}
	})
})