function resizeFunc(id){
	var scaleW = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 320;
	var scaleH = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 480;
	dd(id).style.width = parseInt($('#'+id).width()) * scaleW + 'px';
	dd(id).style.height = parseInt($('#'+id).height()) * scaleW + 'px';
	dd(id).style.fontSize = parseInt($('#'+id).css('font-size')) * scaleW + 'px';
	dd(id).style.lineHeight = parseInt($('#'+id).css('line-height')) * scaleW + 'px';
	dd(id).style.marginTop = parseInt($('#'+id).css('margin-top')) * scaleW + 'px';
	dd(id).style.marginLeft = parseInt($('#'+id).css('margin-left')) * scaleW + 'px';
	dd(id).style.marginRight = parseInt($('#'+id).css('margin-right')) * scaleW + 'px';
	dd(id).style.paddingTop = parseInt($('#'+id).css('padding-top')) * scaleW + 'px';
	dd(id).style.paddingLeft = parseInt($('#'+id).css('padding-left')) * scaleW + 'px';
	dd(id).style.paddingRight = parseInt($('#'+id).css('padding-right')) * scaleW + 'px';
}

function dd(arg){
	return document.getElementById(arg);
}