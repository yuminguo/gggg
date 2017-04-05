$(function() {
	$('#main').draggable();
		var a=[];
	    var b=[];
	    var i;
	$( "#main" ).on( "drag", function  (event, ui) {
			a.push(event.clientX);
			b.push(event.clientY);
			i=a.length;
	});
	$('button').button();		
	$('button').click(function  () {
			$('button').button('disable');
			var back =setInterval(function  () {	
			$('#main').css({'left':a[i]-a[0]+'px','top':b[i]-b[0]+'px'}).css({"background":"red"}).html(a[i]-a[0]+'px'+','+(b[i]-b[0]+'px'));
			if (i > 0) {
				i=i-1
			} else{
				$('button').button('enable');
				clearInterval(back);
				$('#main').html('来拖我啊').css({"background":"green"});
			}
			},10)
		});









































});





















