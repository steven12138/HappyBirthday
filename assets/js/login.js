$('#login-button').click(function (event) {
	var width = document.body.clientWidth;
	if (width <= 900) {
		if(confirm("您的屏幕有点小\n建议使用电脑哦"))
		{
			return;
		}
		else{
			alert("好吧我们继续\n但是有可能会出现错位:(");
		}
	}

	event.preventDefault();
	$('form').fadeOut(500);
	$('.wrapper').addClass('form-success');
	requestFullScreen();
	setTimeout(function () {
		location.href = "BirthdayCake.html";
	}, 2000);

	// var userName = document.getElementById("userName").value;
	// var pwd = document.getElementById("pwd").value;
	// //修改密码请改此处
	// if (userName == "123" && pwd == "123") {
	// 	event.preventDefault();
	// 	$('form').fadeOut(500);
	// 	$('.wrapper').addClass('form-success');
	// 	requestFullScreen();
	// 	setTimeout(function () {
	// 		location.href = "BirthdayCake.html";
	// 	}, 2000);
	// } else {
	// 	alert("Wrong Password");
	// }
});

function requestFullScreen(element) {
	var element = document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}