$(document).ready(function(){
				/*用户名验证*/
				/*
			  	$('#username').change(function(){
			  		var $that=$(this);
			  		var $mobileReg=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
			  		var $emailReg=/\w@\w*\.\w/;
			  		if($mobileReg.test($that.val())===false&&$emailReg.test($that.val())===false){
			  			$that.parent().addClass('login-warning');
			  			
			  			$('.error1').text('用户名格式错误');
			  			$('#login').attr('disabled','disabled');	
			  			console.log($('.error1').text());

			  			
			  		}else{
			  			$('#login').removeAttr('disabled');
			  			$('.error1').text('');
			  		}
			  	});
				*/
			 	
			  	$('#username').blur(function(){
			  		var that=$(this);
			  		var $mobileReg=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
			  		var $emailReg=/\w@\w*\.\w/;
			  		if(that.val().length===0){	
			  			showMsg(that,'用户名不能为空');
			  			that.parent().addClass('login-warning');
			  	
			  			
			  		}else if($mobileReg.test(that.val())===false&&$emailReg.test(that.val())===false){
			  			
			  			
			  			showMsg(that,'用户名格式错误');
			  			that.parent().addClass('login-warning');
			  				
			  			

			  			
			  		}else{
			  			that.parent().removeClass('login-warning').removeClass('login-avtive');
			  			
			  		
			  		}
			  	});
			  	$('#password').blur(function(){
			  		var that=$(this);
			  		if(that.val().length===0){
			  			showMsg(that,'密码不能为空');
			  			that.parent().addClass('login-warning');
			  			$('#login').attr('disabled','disabled');	
			  			console.log(that.val().length);
			  		}else{
			  			$('#login').removeAttr('disabled');
			  		}
			  	});
			  	
			  	
		  	
			  	$('.login-input').map(function(index,ele){
			  		var that =$(this);
			  		that.focus(function(){
			  			that.parent().addClass('login-active').removeClass('login-warning');  			
			  			console.log(ele+","+index);
			  		});
			  		that.blur(function(){	
			  			that.parent().removeClass('login-active');
			  		})
			  	});

			  	var username=$('#username');
			  	var password=$('#password');
			  	$('#login_btn').click(function(){
			  		if(username.val().length!==0&&password.val().length!==0){
						
			  			alert('success');

			  	}else{
			  		if(username.val().length===0){
			  			$('.error1').text('请输入用户名');
			  			username.parent().addClass('login-warning');
			  			return false;
			  		}else{
			  			$('.error2').text('请输入密码');
			  			password.parent().addClass('login-warning');
			  			return false;
			  		}
			  	}
			  	})
			  	var showMsg=function(ele,msg){
			  			ele.focus();
			  		$('.login-msg').text(msg).fadeIn(2000).fadeOut(2000);
			  	}

			  		
			  	
			  	
			});
		