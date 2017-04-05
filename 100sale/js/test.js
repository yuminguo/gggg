$(function() {
	$('#city').find('a').click(function  () {
		$(this).siblings().removeClass('header_active');
		$(this).addClass('header_active');
	});
	$.each($('#index_logo').find('li'), function(index,value) {
		$(this).css('background','url(img/index_logo.png) no-repeat');
		$(this).css('background-position',10-65*index+'px 0');
		var i=0;
		$(this).click(function  () {
			if (i==0) {
				$(this).css('background-position',10-65*index+'px -84px');
				i=1
			} else{
				$(this).css('background-position',10-65*index+'px 0');
				i=0
			}
		});
	});
	$('#content .f7 li:nth-of-type(1)').css({'top':0,'left':17});
	$('#content .f7 li:nth-of-type(2)').css({'top':0,'left':95});
	$('#content .f7 li:nth-of-type(3)').css({'top':0,'left':173});
	$('#content .f7 li:nth-of-type(4)').css({'top':0,'left':251});
	$('#content .f7 li:nth-of-type(5)').css({'top':78,'left':17});
	$('#content .f7 li:nth-of-type(6)').css({'top':78,'left':95});
	$('#content .f7 li:nth-of-type(7)').css({'top':78,'left':173});
	$('#content .f7 li:nth-of-type(8)').css({'top':78,'left':251});
	$('#content .f7 li:nth-of-type(9)').css({'top':156,'left':17});
	$('#content .f7 li:nth-of-type(10)').css({'top':156,'left':95});
	$('#content .f7 li:nth-of-type(11)').css({'top':156,'left':173});
	$('#content .f7 li:nth-of-type(12)').css({'top':156,'left':251});
	$('#nav_bar').find('li').click(function  () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
	});
	$('.fr').find('li').click(function  () {
		$(this).addClass('cho');
		$(this).siblings().removeClass('cho');
	});
	
	$('.f3cen ul').find('li').click(function  () {
		$(this).addClass('redbor');
		$(this).siblings().removeClass('redbor');
		$('.f3cen').find('img').eq(0).attr('src','img/picList'+($(this).index()+1)+'.jpg');
	});
	$('.f4').find('li').click(function  () {
		$(this).addClass('cho');
		$(this).siblings().removeClass('cho');
	});
		$('.f6').find('li').click(function  () {
		$(this).addClass('cho');
		$(this).siblings().removeClass('cho');
	});
		$('.grab ul').find('li').click(function  () {
		$(this).addClass('cho');
		$(this).siblings().removeClass('cho');
	});

	$('.f4').find('a').click(function  () {
		$(this).addClass('bornon');
		$(this).siblings().removeClass('bornon');
		
	});
	$('#content .f5 p:not(:first-child)').click(function  () {
		$(this).addClass('ftry');
		$(this).siblings().removeClass('ftry');
		$(this).find('i').show();
		$(this).siblings().find('i').hide();
		
	});
	var mo = $('#content .f7').find('li').eq(11);
	setInterval(function  () {
		var box =[];
		$.each($('#content .f7').find('li'), function() {
			if (($(this).position().top==mo.position().top&&Math.abs($(this).position().left-mo.position().left)==78)||
			    ($(this).position().left==mo.position().left&&Math.abs($(this).position().top-mo.position().top)==78)){
				box.push($(this));
			}
		});
		var num1 =parseInt(Math.random()*box.length);
		var a = mo.position().left;
		var b = mo.position().top;
	mo.animate({'left':box[num1].position().left,'top':box[num1].position().top});
	box[num1].animate({'left':a,'top':b});
	},1000)
		
	
	
	
});
