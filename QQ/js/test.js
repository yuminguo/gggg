$(function() {
	
	$.each($('.little').find('img'), function(index,value) {
		$(this).click(function  () {
			$('body').css({'background':'url(img/bg'+index+'.jpg)','background-size':'cover'});
		});
		$(this).hover(function  () {
			$('.hovershow').find('img').attr('src','img/bg'+index+'.jpg')
		});
	});
	$('.bt1').click(function  () {
		$('#toggle').slideDown();
	});
	$('.bt2').click(function  () {
		$('#toggle').slideUp();
	});
	
		
	$('.long').on('contextmenu','li',function  (e) {  
		var that =this;                             
		$('.rwr').show().css({'left':e.clientX+50,'top':e.clientY});
		$('.rwr').find('li').eq(1).unbind('click');
		$('.rwr').find('li').eq(1).click(function  () {
			$(that).hide();
			$('.rwr').hide();	
		});
		$('.rwr').find('li').eq(2).off('click');
		$('.rwr').find('li').eq(2).click(function  () {
		$(that).find('input').removeAttr('readonly').css('color','green').focus();
		$('.rwr').hide();	
		});
		$(that).find('input').off('keydown');
		$(that).find('input').keydown(function  (e) {
			if (e.which==13) {
				$(this).blur().attr('readonly','readonly').css('color','black')
			} 
			
		});
		return false;
	})	
	$.each($('.turn').find('button'),function  (index,value)  {
		$(this).click(function  () {
			$('.long').width(9600);
			$('.menu1,.menu2,.menu3,.menu4').css('display','block');
			$('.long').animate({left:-1920*(index)+'px'},function  () {
				$('.long').width(500);
				$('.menu0,.menu1,.menu2,.menu3,.menu4').css('display','none');
				$('.menu'+index).css('display','block');
			});  
		});
		
	});
	$('.menu0 ,.menu1,.menu2,.menu3,.menu4').sortable({
		containment: $('body') ,
		revert: true,
	});
	$.each($('.slidebar').find('li'), function(index,value) {
		var that =this;
		$(that).width(32);
		$('.slidebar').mousemove(function  (event) {
			var event= event || window.event; 
        	var b = event.clientY - $(that).offset().top  - $(that).height()/ 2;
			iScale = 1-Math.sqrt( b * b) / 300;
            if (iScale < 0.5) iScale = 0.5;
            console.log(iScale+','+$(that).width());
			$(that).width(64*iScale);
		});
		$('.slidebar').mouseleave(function  () {
			$(that).width(32);
		});
	});
	$(document).contextmenu(function  (event) {
		var e= event || window.event; 
		$('.menu_list').show().css({'left':e.clientX,'top':e.clientY});
		return false;
		
	});
	$('.menu_list').find('ul').eq(0).find('li').eq(0).click(function  () {
		$('.long').find('img').width(40);
		$('.menu_list').hide();
	});
	$('.menu_list').find('ul').eq(0).find('li').eq(1).click(function  () {
		$('.long').find('img').width(64);
		$('.menu_list').hide();
	});
	$('.menu_list').find('ul').eq(0).find('li').eq(2).click(function  () {
		$('.long').find('img').width(80);
		$('.menu_list').hide();
	});
	$('.menu_list').find('ul').eq(1).find('li').eq(0).click(function  () {			
		$('.long').find('ul:visible').find('li').css('float','left');
		$('.menu_list').hide();
	});
	$('.menu_list').find('ul').eq(1).find('li').eq(1).click(function  () {
		$('.long').find('ul:visible').find('li').css('float','none');
		$('.menu_list').hide();
	});
	$(".menu_list > li").eq(2).click(function  () {
		location.reload();
	});
	$(document).click(function  () {
		$('.menu_list').hide();
		$('.rwr').hide();
	});
	var box ='<li><img src="img/6.png" width="64px" height="64px" alt="" /><input type="text" value="新建文件夹" readonly ></li>';
	$(".menu_list > li").eq(3).click(function  () {
		$(box).appendTo($('.long').find('ul:visible'));
		});
	$('#date').datepicker();
	$('.bt5').click(function  () {
		$('#reg').dialog('open');
	});
	var errors;
	$('#reg').dialog({
		autoOpen : false,
		width : 320,
		close : function (e, ui) {
				 $('#reg').resetForm();
			},
		resizable : false,
		modal : true,
		buttons :{
			'注册' :function  () {
				$(this).submit();
				}
			}
	}).buttonset().validate({
		submitHandler:function  (form) {
//						alert('注册失败'+':'+$('.reg_error').find('li:visible').eq(0).text());
						if (!$.cookie('o')) {
								var arr1 =[];
						}else{
							var arr1 =JSON.parse($.cookie('o'));
					
						}
						var us = [];
						$.each(arr1, function(attr,value) {
							us.push(this.user);
						});	
						var find =us.indexOf($('#user').val());
						if (find!=-1) {
							alert('已经存在该用户名');
						} else{
							arr1.push({user:$('#user').val(),pas:$('#pass').val()});
							$.cookie('o', JSON.stringify(arr1),{
							expires : 7,
							});						
							alert('注册成功');
							setTimeout(function  () {
								$('#reg').dialog('close');
								$('#login').dialog('open');              
							},1000);
						}					
					
		},
		showErrors : function (errorMap, errorList) {
			errors = this.numberOfInvalids();
			this.defaultShowErrors();
		},
		rules : {
			user : {
				required : true,
				minlength : 2,			
			},
			pass : {
				required : true,
				minlength : 6,
			},
			email : {
				required : true,
				email : true
			},
			date : {
				date : true,
			},
					
		}, 
		errorLabelContainer : 'ol.reg_error',
		wrapper : 'li',
		messages : {
			user : {
				required : '帐号不得为空！',
				minlength : jQuery.format('帐号不得小于{0}位！'),
			},
			pass : {
				required : '密码不得为空！',
				minlength : jQuery.format('密码不得小于{0}位！'),
			},
			email : {
				required : '邮箱不得为空！',
				minlength : '请输入正确的邮箱地址！',
			},	
		},

	})
	$('.bt3').click(function  () {
		$('#login').dialog('open');
	});
	$('#usering').hover(function  () {
		$('.user_list').toggle()
	});
	$('.user_list').find('li').eq(2).click(function  () {
		$('#usering').hide()
	});
	$('.user_list').find('li').eq(1).click(function  () {
		$('#rew').dialog('open');
		
	});
	$('#rew').dialog({
		autoOpen : false,
		buttons:{
			'提交':function  () {
				if ($('#pol').val()!=ppa[find]) {
					alert('原密码错误');
				}else {
						alert('修改成功');
						var str1 =JSON.parse($.cookie('o'));
						str1[find].pas = $('#pne').val(); 
						$.cookie('o', JSON.stringify(str1),{
						expires : 7,
						});						
						}
			}
		}
	});
	$('#login').dialog({
		autoOpen : false,
		width : 320,
		close : function (e, ui) {
		 			$('#login').resetForm();
				},
		resizable : false,
		modal : true,
		buttons :{
			'登录' :function  () {
				$(this).submit();
			}
		}

	}).validate({
		submitHandler:function  (form) {
			var str1 =JSON.parse($.cookie('o'));
			var us = [];
			ppa = [];
			$.each(str1, function(attr,value) {
				us.push(this.user);
				ppa.push(this.pas);
			});
			if (errors1>0) {
				alert('登录失败'+':'+$('.login_error').find('li:visible').eq(0).text());
				
			} else{
				find =us.indexOf($('#login_user').val())　　
				if (find==-1) {
					alert('不存在该用户名')
				} else if(ppa[find]==$('#login_pass').val()){
					
					alert('登录成功');
					$(' #usering').show()
					setTimeout(function  () {
						$('#login').dialog('close');
						
					},1000);
				}else{
					alert('密码错误')
				}							
			}		
			
		},
		showErrors : function (errorMap, errorList) {
			errors1 = this.numberOfInvalids();
			this.defaultShowErrors();
		},
		rules : {
			login_user : {
				required : true,
				minlength : 2,			
			},
			login_pass : {
				required : true,
				minlength : 6,
			}
					
		}, 
		errorLabelContainer : 'ol.login_error',  /*写法 .login_error也可以*/
		wrapper : 'li',
		messages : {
			login_user : {
				required : '帐号不得为空！',
				minlength : jQuery.format('帐号不得小于{0}位！'),
			},
			login_pass : {
				required : '密码不得为空！',
				minlength : jQuery.format('密码不得小于{0}位！'),
			}
				
		},

	});
	$('#introduce').dialog({
		autoOpen:true,
		width : 800,
		height :400,
	});
	$('.bt4').click(function  () {
		$('#introduce').dialog('open');
		
	})

});

