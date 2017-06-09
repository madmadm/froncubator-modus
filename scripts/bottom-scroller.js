$(document).ready(function(){

	var positionOfBotScroller = 0
	var botScrollItemsNumber = $( '.happy-clients .scroll-bottom .scroller' ).children().length
	/////Width of scroller = summ width of all clients + margins
	var sum = 0
	var margin = parseInt($($( '.happy-clients .scroll-bottom .scroller' ).children()[0]).css("margin-right"))
	for (var i = 0; i < botScrollItemsNumber; i++) {
		sum += $($( '.happy-clients .scroll-bottom .scroller' ).children()[i]).width()
	}
	$( '.happy-clients .scroll-bottom .scroller' ).css({
		width: sum + margin * botScrollItemsNumber
	})
	
	////////////// listeners

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