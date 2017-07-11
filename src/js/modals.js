$(function(){
	//模态层和模态框的显示
	$("body").on("click",".showModal",function(){
		var _modal_role =$(this).data("role");
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
	});
	//模态层和模态框的隐藏
	$("body").on("click",".hideModal",function(){
		$(".yui-modal-overlay").remove();
		$(this).parents(".yui-modal").remove(); 
	});
	//关闭confirm打开alert
	$("body").on("click",".hideModalShowAlert",function(){
		hideModalShowAlert.call(new yui_confirm(_modal_title,_modal_text,_modal_title_1,_modal_text_1));
	});
	//关闭prompt打开confirm
	$("body").on("click",".hideModalShowConfirm",function(){
		hideModalShowConfirm.call(new yui_prompt(_modal_title,_modal_text,_modal_title_1,_modal_text_1,_modal_title_2,_modal_text_2));
	});
    //模态框的隐藏
	$("body").on("click",".yui-modal-overlay",function(){
		$(this).remove();
		var _overlay_id = $(this).attr("id");//得到模态id
		var _modal_id_last = _overlay_id.slice(-7);//得到overlay
		var _last_index = _overlay_id.indexOf(_modal_id_last);//得到索引
	    var _modal_id = _overlay_id.slice(0,_last_index-1);//截取字符串
		$("#"+_modal_id).remove(); 
	});
});
	//函数
	function hideModalShowAlert(){
		var _modal_role =$(".hideModalShowAlert").data("role");
		$(".yui-modal-overlay").remove();
		$(".hideModalShowAlert").parents(".yui-modal").remove();
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
		yui_alert(this._modal_title_1,this._modal_text_1);
	}
	function hideModalShowConfirm(){
		var _modal_role =$(".hideModalShowConfirm").data("role");
		$(".yui-modal-overlay").remove(); 
		$(".hideModalShowConfirm").parents(".yui-modal").remove(); 
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
		yui_confirm(this._modal_title_1,this._modal_text_1,this._modal_title_2,this._modal_text_2);
	}
	//alert模态框
	function yui_alert(_modal_title,_modal_text){
		$("body").append("<div class='yui-modal in' id='yui-alert'>"
		+"<div class='yui-modal-content'><div class='yui-modal-title'>"+_modal_title+"</div><div class='yui-modal-text'>"+_modal_text+"</div></div>"
		+"<div class='yui-modal-btnGroup'><ul class='flex-group'><li><button class='btn btn-block hideModal'>确定</button></li>"
		+"</ul></div></div>");
	}
	//confirm模态框
	function yui_confirm(_modal_title,_modal_text,_modal_title_1,_modal_text_1){ 
		this._modal_title = _modal_title;
		this._modal_text = _modal_text;
		this._modal_title_1 = _modal_title_1;
		this._modal_text_1 = _modal_text_1;
		$("body").append("<div class='yui-modal in' id='yui-confirm'>"
		+"<div class='yui-modal-content'><div class='yui-modal-title'>"+_modal_title+"</div><div class='yui-modal-text'>"+_modal_text+"</div></div>" 
		+"<div class='yui-modal-btnGroup'><ul class='flex-group'><li><button class='btn btn-block hideModalShowAlert' data-role='yui-alert' >确定</button></li>" 
		+"<li><button class='btn btn-block hideModal'>取消</button></li></ul></div></div>");
	}
	//prompt模态框
	function yui_prompt(_modal_title,_modal_text,_modal_title_1,_modal_text_1,_modal_title_2,_modal_text_2){
		this._modal_title = _modal_title;
		this._modal_text = _modal_text;
		this._modal_title_1 = _modal_title_1;
		this._modal_text_1 = _modal_text_1;
		this._modal_title_2 = _modal_title_2;
		this._modal_text_2 = $(".form-input").val();
		$("body").append("<div class='yui-modal in' id='yui-prompt'>"
		+"<div class='yui-modal-content'><div class='yui-modal-title'>"+_modal_title+"</div><div class='yui-modal-text'>"+_modal_text+"</div>"
		+"<div class='yui-modal-input'><input type='text' class='form-input' placeholder='这里是文本框！' /></div></div>"
		+"<div class='yui-modal-btnGroup'><ul class='flex-group'><li><button class='btn btn-block hideModalShowConfirm' data-role='yui-confirm' >确定</button></li>"
		+"<li><button class='btn btn-block hideModal'>取消</button></li></ul></div></div>");
	}
	//消息提示模态框
	function yui_message(_message,_second,_hasModalOverlay){
		$("body").append("<div class='yui-message in'>"+_message+"</div>");
		if(_hasModalOverlay){
			$("body").append("<div class='yui-modal-overlay' id='yui-message-overlay'></div>"); //模态框 
			setTimeout(function(){
				$(".yui-message").remove();
				$("#yui-message-overlay").remove();
			},1000*_second);
		}else{
			setTimeout(function(){
				$(".yui-message").remove();
			},1000*_second);
		}
	}