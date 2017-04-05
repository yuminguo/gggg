$(function() {
	function caTch () {
			date = new Date();
			reCo()
			function reCo() {
			hour = date.getHours();
			minute = date.getMinutes();
			second = date.getSeconds();
			nh= box(String(hour));
			nm= box(String(minute));
			ns= box(String(second));
			tiST=nh.concat(':',nm,':',ns);
			for (i=0;i < 8; i++) {
				$('#main div').eq(i).html(tiST[i]);
			}
			}
			setInterval(function time () {
				date1 = new Date();
				hour1 = date1.getHours();
				minute1 = date1.getMinutes();
				second1 = date1.getSeconds();
				nh1= box(String(hour1));
				nm1= box(String(minute1));
				ns1= box(String(second1));
				tiST1=nh1.concat(':',nm1,':',ns1);
				for (var i=0;i < 8; i++) {
					if (tiST[i]!=tiST1[i]) {
						tuRn (i);
					}
				}
				date=date1; 
			},1000)
			function tuRn (p) {
					$('#main div').eq(p).animate({top:"150px",height:"0px"},0,function  () {
						reCo();
					});
					$('#main div').eq(p).animate({top:"0px",height:"150px"},1000)	
				}
	}
	   function box (p) {
	   	if (p.length < 2) {
	   		p = 0 + p
	   	}
	   	return p
   }
	caTch();
});





















