show_alert$(function(){
	//折叠面板
	$(".accordion .accordion-header").click(function(){
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass("active");
	});
	//底部menu切换
	$(".topTabs>ul>li,.footerTabs>ul>li").click(function(){
		var _index = $(".footerTabs>ul>li").index(this);
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-contents .tab-item").eq(_index).addClass("current").siblings().removeClass("current");
	});
	//表单相关
	//checkbox
	$(".ok-square").click(function(){
		$(this).toggleClass("ok-1").toggleClass("ok-2");
	});
	//计算器
	//输入的正则判断
	$(".input-number .num").blur(function(){
		var n = $(this).val();
		var rule=/^[1-9]\d*$/;
		if(rule.test(n)){
			$(this).val(n);
		}else{
			$(this).val(0);
		}
	});
	//初始化数值
    $(".input-number .num").val(0);
    //加
	$(".input-number .add").click(function(){
		var _input_number = $(".input-number .num").val();
		++_input_number;
		$(".input-number .num").val(_input_number);
	});
	//减
	$(".input-number .del").click(function(){
		var _input_number = $(".input-number .num").val();
		if($(".input-number .num").val()===0){
			return;
		}else{
			--_input_number;
			$(".input-number .num").val(_input_number);
		}
	});
	//表单的错误提示
	$(".showtip").click(function(){
		$(".errortip").show();
		setTimeout(function(){
			$(".errortip").hide();
		},1000);
	});
	//popMenu1
	//弹出遮罩,菜单
	$(".menu .icon-pop").click(function(){
		$(".page-wrapper").append("<div class='yui-translayer'></div>");
		$(".pop-menu").show();
	});
	//关闭遮罩,菜单
	$(document).on("click",".yui-translayer", function () {
		$(".yui-translayer").remove();
		$(".pop-menu").hide(); 
	});
	//popMenu2
	//弹出遮罩,侧滑弹出菜单
	$(".menu .icon-side").click(function(){
		$(".page-wrapper").append("<div class='yui-layer'></div>");
		$(".side-menu").addClass("in");
	});
	//关闭遮罩,侧滑弹出菜单
	$(document).on("click",".yui-layer", function () {
		$(".yui-layer").remove();
		$(".side-menu").removeClass("in");
	});
	//popMenu3
	//弹出遮罩,底部弹出菜单
	$(".menu .icon-action").click(function(){
		$(".page-wrapper").append("<div class='yui-layer'></div>");
		$(".bottom-menu").addClass("in");
	});
	//关闭遮罩,底部弹出菜单
	$(document).on("click",".yui-layer,.bottom-btn", function () {
		$(".yui-layer").remove();
		$(".bottom-menu").removeClass("in");
	});
	//popMenu4
	//筛选框弹出和遮罩弹出
  	$(".yui-select-wrapper>li").click(function(){
  		$(".yui-layer").remove();
  		$(".page-wrapper").append("<div class='yui-layer'></div>");
  		$(this).parent(".yui-select-wrapper").addClass("in");
  		var _role = $(this).data("role");
  		$("#"+_role).show();
  		$("#"+_role).siblings(".yui-select").hide();
  	});
  	//筛选列表点击赋值
  	$(".yui-select .list .list-item").click(function(){
  		var _text = $(this).text();
  		var _id = $(this).parents(".yui-select").attr("id");

  		$(".yui-select-wrapper>li").each(function(){
  			if($(this).data("role") === _id){
	  			$(this).text(_text);
	  		}
  		});
  		$(".yui-layer").remove();
			$(".yui-select").hide();
			$(".yui-select-wrapper").removeClass("in");
  	});
  	//关闭遮罩,列表
	$(document).on("click",".yui-layer", function () {
		$(".yui-layer").remove();
		$(".yui-select").hide();
		$(".yui-select-wrapper").removeClass("in");
	});
	//回到顶部按钮的显示隐藏
	$(window).scroll(function(){
		if ($(window).scrollTop()>100)
		{
			$(".returnTop").animate({
				opacity:"1",
				display:"block"
				},500);
		}
		else{
			$('.returnTop').animate({
				opacity:"0",
				display:"none"
				},500);
		}
	});
	//回到顶部
	$(".returnTop").click(function() {
	    goTop();
	}); 
	//搜索input
	$(".search-input input").val("");
	$(".search-input input").focus(function(){
		$(this).parents(".search-input").addClass("active");
		$(".search-input input").css("text-align","left").css("padding-left","28px");
		$(".search-input .icon-search").css("left","5px").css("margin-left","0");
	});
	$(".search-input .cancel").click(function(){
		if($(".search-input input").val() !== ""){
			$(".search-input input").val("");
			
		}
		$(".search-input input").css("text-align","center").css("padding-left","0px");
		    $(".search-input .icon-search").css("left","50%").css("margin-left","-40px"); 
		$(this).parents(".search-input").removeClass("active");
	});
	//左滑右滑
	$(".slideDel").on("swipeLeft",function(){
		$(this).addClass("selected").parent().siblings().find(".slideDel").removeClass("selected");
	}).on("swipeRight",function(){
		$(this).removeClass("selected");
	});
	//删除 
	$(".slideDel .del").on("click",function(){
		$(this).parent(".slideDel").remove();
	});
	//开关切换
	var _bool = true;
	$(".yui-switch").click(function(){
		$(this).toggleClass("in");
		var $_switch_val = $(this).parent().parent().find(".switch-val");
		if($(this).hasClass("in")){
			$_switch_val.text(_bool);
		}else{
			$_switch_val.text(!_bool);
		}
	});
}); 
//原生弹框
function show_alert(){  
    alert('第一行\n第二行');   
}  
  
function show_confirm(){  
    var result = confirm('是否删除！');  
    if(result){  
        alert('删除成功！');  
    }else{  
        alert('不删除！');  
    }  
}  
  
function show_prompt(){  
    var value = prompt('输入你的名字：', '默认名字');  
    if(value == null){  
        alert('你取消了输入！');  
    }else if(value === ''){  
        alert('姓名输入为空，请重新输入！');  
        show_prompt();  
    }else{   
        alert('你好，'+value);  
    }  
}  
//textarea计数器
function keypress() //textarea输入长度处理 
{ 
	var text1=document.getElementById("myarea").value; 
	var len;//记录剩余字符串的长度 
	if(text1.length>=30)//textarea控件不能用maxlength属性，就通过这样显示输入字符数了 
	{ 
		document.getElementById("myarea").value=text1.substr(0,30); 
		len=0;  
	} 
	else 
	{ 
	    len=30-text1.length; 
	} 
		var show=len; 
		document.getElementById("count").innerText=show; 
} 
//滚动条
function slider(){ 
	$('.progress-bar').each(function(){
		var _index = $('.progress-bar').index(this);
		_width = parseInt($('.progress-bar').eq(_index).css("width"));
		for(var i=0;i<=100;i++){ 
			if($(this).data("progress")==="run"){
				$(this).animate({
					width:i+'%'
				},150000/_width);    
		    }
		}
	});
}
//移动端通用返回顶部
	function goTop(acceleration, time) {
		acceleration = acceleration || 0.1;
		time = time || 16;
		var x1 = 0;
		var y1 = 0;
		var x2 = 0;
		var y2 = 0;
		var x3 = 0;
		var y3 = 0;
		if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
		}
		if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
		}
	    x3 = window.scrollX || 0;
		y3 = window.scrollY || 0;
		// 滚动条到页面顶部的水平距离
		var x = Math.max(x1, Math.max(x2, x3));
		// 滚动条到页面顶部的垂直距离
		var y = Math.max(y1, Math.max(y2, y3));
		// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
		var speed = 1 + acceleration;
		window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
		// 如果距离不为零, 继续调用迭代本函数
		if (x > 0 || y > 0) {
		var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
		window.setTimeout(invokeFunction, time);
		}
	}
//可拖动按钮
function dragDrop(handler){
		  // 获取节点
		  var dragDrop = document.getElementById(handler); 
		  var oW,oH;
		  // 绑定touchstart事件
		  dragDrop.addEventListener("touchstart", function(e) {
		   console.log(e);
		   var touches = e.touches[0];
		   oW = touches.clientX - dragDrop.offsetLeft;
		   oH = touches.clientY - dragDrop.offsetTop;
		   //阻止页面的滑动默认事件
		   document.addEventListener("touchmove",defaultEvent,false);
		  },false);
		 
		  dragDrop.addEventListener("touchmove", function(e) {
		   var touches = e.touches[0];
		   var oLeft = touches.clientX - oW;
		   var oTop = touches.clientY - oH;
		   if(oLeft < 0) {
		    oLeft = 0;
		   }else if(oLeft > document.documentElement.clientWidth - dragDrop.offsetWidth) {
		    oLeft = (document.documentElement.clientWidth - dragDrop.offsetWidth);
		   }
		   dragDrop.style.left = oLeft + "px";
		   dragDrop.style.top = oTop + "px";
		  },false);
		   
		  dragDrop.addEventListener("touchend",function() {
		   document.removeEventListener("touchmove",defaultEvent,false);
		  },false);
	}
//防止默认行为
  function defaultEvent(e) {
   e.preventDefault();
  }
//轮播函数
function slider(sliderId){
	var slider = $("#"+sliderId);
    slider.find(".slide-trigger").find("li").eq(0).addClass("cur");
    window.mySwipe = new Swipe(document.getElementById(sliderId), {
        speed: 500,
        auto: 3000,
        callback: function(index, elem) {
            slider.find(".slide-trigger").find("li").eq(index).addClass("cur").siblings().removeClass("cur");
        }
    });
}
