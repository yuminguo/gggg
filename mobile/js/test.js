$(function  () {
$('#myCarousel').carousel({
interval : 10000,
});
$(window).load(function () {
		$('.text').eq(0).css('margin-top', ($('.auto').eq(0).height() - $('.text').eq(0).height()) / 2 + 'px');
});
	

$(window).resize(function () {
	$('.text').css('margin-top', ($('.auto').eq(0).height() - $('.text').eq(0).height()) / 2 + 'px');
});



})