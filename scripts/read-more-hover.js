$(document).ready(function(){
	$('.read-more-services .suspendisse .button').hover(function(){
		$(this).siblings('.icon').css("background", "url('../images/like-orange.png')")
	}, function () {
		$(this).siblings('.icon').css("background", "url('../images/like.png')")
	})
	$('.read-more-services .maecenas .button').hover(function(){
		$(this).siblings('.icon').css("background", "url('../images/key-orange.png')")
	}, function () {
		$(this).siblings('.icon').css("background", "url('../images/key.png')")
	})
	$('.read-more-services .aliquam .button').hover(function(){
		$(this).siblings('.icon').css("background", "url('../images/flag-orange.png')")
	}, function () {
		$(this).siblings('.icon').css("background", "url('../images/flag.png')")
	})
	$('.read-more-services .habitasse .button').hover(function(){
		$(this).siblings('.icon').css("background", "url('../images/bottle-orange.png')")
	}, function () {
		$(this).siblings('.icon').css("background", "url('../images/bottle.png')")
	})
})