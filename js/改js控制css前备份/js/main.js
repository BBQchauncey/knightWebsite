$(function() {
	//获取屏幕高度
	var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(screenWidth<1080){
		$('#downDescription').html('');
		$('#introPicDescription').html('下载骑士<br/>进入不一样的骑士生活');
		
		$('#introPics,#introTxtEnd,#friendLink,#headTel').hide();
//		$('#friendLink').html("<span>友情链接：</span><span class='friendLinkAddres' href='http://www.jtzyhotel.com '>上海金庭庄园酒店</span>&nbsp;&nbsp;<span class='friendLinkAddres' href='http://equestrian.sport.org.cn'>中国马术协会</span>&nbsp;&nbsp;<br/><span class='friendLinkAddres' href='http://www.shjmy.cn'>骏马园马术农庄</span>&nbsp;&nbsp;<span class='friendLinkAddres' href='http://www.alpha-cn.com'>阿尔法信息技术</span>")
	}
	$('.friendLinkAddres').click(function() {
		window.open($(this).attr('href'), '_blank');
	})
//	alert(navigator.userAgent);
})