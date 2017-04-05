$(function() {
	var num =$('li').length;
	$.each($('li'), function(index,value) {
		$(this).hover(function  () {
			$("img").attr("src","img/t"+index+".jpg");
			clearTimeout(t);
			$('.active').removeClass('active');		
		});
			
	});
	$.each($('ul'), function(index,value) {
		$(this).mouseout(function  () {
			timedCount();
		});
		
	});
	i = 0;
	function timedCount(){
		if (i < 13) {
			i++
			
		} else{
			i = 0
		}
		$('li').eq(i-1).removeClass('active');
		$('li').eq(i).addClass('active');
		$("img").attr("src","img/t"+i+".jpg");
		t=setTimeout(function(){timedCount()},3000);
	}
	timedCount();
});





















