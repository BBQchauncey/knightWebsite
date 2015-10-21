$(function() {
	//获取屏幕高度
	var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	$('#introPicDescription').html('精准预约马场，玩的尽兴不再等待<br/> 时时照看我的马匹，我想念它时，它也在想念我<br/> 发布活动，众人参与，从此骑马路上不再孤单');
	console.log(screenWidth)
	if (screenWidth < 1080) {
		$('#downDescription').html('');
		$('#introPicDescription').html('下载骑士<br/>进入不一样的骑士生活');
		var scaleW = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 320;
		var scaleH = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 480;

		dd('navigation').style.height = parseInt($('#navigation').height()) * scaleW + 'px';
		dd('navigation').style.lineHeight = parseInt($('#navigation').css('line-height')) * scaleW + 'px';

		dd('logoImg').style.width = parseInt($('#logoImg').width()) * scaleW + 'px';
		dd('logoImg').style.marginRight = parseInt($('#logoImg').css('margin-right')) * scaleW + 'px';

		dd('slideArea').style.height = parseInt($('#slideArea').height()) * scaleW + 'px';
		//		resizeFunc('introPicDescription');
		dd('introPicDescription').style.width = parseInt($('#introPicDescription').width()) * scaleW + 'px';
		dd('introPicDescription').style.fontSize = parseInt($('#introPicDescription').css('font-size')) * scaleW + 'px';
		dd('introPicDescription').style.lineHeight = parseInt($('#introPicDescription').css('line-height')) * scaleW + 'px';
		dd('introPicDescription').style.paddingLeft = parseInt($('#introPicDescription').css('padding-left')) * scaleW + 'px';
		dd('introPicDescription').style.paddingTop = parseInt($('#introPicDescription').css('padding-top')) * scaleW + 'px';

		dd('downBtn').style.width = parseInt($('#downBtn').width()) * scaleW + 'px';
		dd('downBtn').style.height = parseInt($('#downBtn').height()) * scaleW + 'px';
		dd('downBtn').style.marginTop = parseInt($('#downBtn').css('margin-top')) * scaleW + 'px';
		dd('downBtn').style.lineHeight = parseInt($('#downBtn').css('line-height')) * scaleW + 'px';
		dd('downBtn').style.borderWidth = parseInt($('#downBtn').css('border-width')) * scaleW + 'px';


		dd('downAPP').style.fontSize = parseInt($('#downAPP').css('font-size')) * scaleW + 'px';

		dd('introLogo').style.width = parseInt($('#introLogo').width()) * scaleW + 'px';

		dd('introLine').style.marginTop = parseInt($('#introLine').css('margin-top')) * scaleW + 'px';

		dd('line1').style.width = parseInt($('#line1').width()) * scaleW + 'px';
		dd('line2').style.width = parseInt($('#line2').width()) * scaleW + 'px';

		dd('lineTxt').style.marginLeft = parseInt($('#lineTxt').css('margin-left')) * scaleW + 'px';
		dd('lineTxt').style.marginRight = parseInt($('#lineTxt').css('margin-right')) * scaleW + 'px';
		dd('lineTxt').style.fontSize = parseInt($('#lineTxt').css('font-size')) * scaleW + 'px';

		dd('introTxt').style.marginTop = parseInt($('#introTxt').css('margin-top')) * scaleW + 'px';
		dd('introTxt').style.width = parseInt($('#introTxt').width()) * scaleW + 'px';
		dd('introTxt').style.fontSize = parseInt($('#introTxt').css('font-size')) * scaleW + 'px';

		dd('footer').style.marginTop = parseInt($('#footer').css('margin-top')) * scaleW + 'px';
		dd('footer').style.height = parseInt($('#footer').height()) * scaleW + 'px';

		dd('scanImg').style.paddingTop = parseInt($('#scanImg').css('padding-top')) * scaleW + 'px';

		dd('weibo').style.marginLeft = parseInt($('#weibo').css('margin-left')) * scaleW + 'px';

		$('.erWeiMaImg').css('width', parseInt($('.erWeiMaImg').width()) * scaleW + 'px');

		$('.erWeiMaTxt').css('font-size', parseInt($('.erWeiMaTxt').css('font-size')) * scaleW + 'px');
		$('.erWeiMaTxt').css('margin-top', parseInt($('.erWeiMaTxt').css('margin-top')) * scaleW + 'px');

		dd('copyRight').style.marginTop = parseInt($('#copyRight').css('margin-top')) * scaleW + 'px';
		dd('copyRight').style.fontSize = parseInt($('#copyRight').css('font-size')) * scaleW + 'px';

		dd('footerTel').style.marginTop = parseInt($('#footerTel').css('margin-top')) * scaleW + 'px';

		dd('footerTelImg').style.width = parseInt($('#footerTelImg').width()) * scaleW + 'px';

		dd('imgBigView').style.width = parseInt($('#imgBigView').width()) * scaleW + 'px';
		dd('imgBigView').style.height = parseInt($('#imgBigView').height()) * scaleW + 'px';



		$('#footerTelTxt').children().css('font-size', parseInt($('#footerTelTxt').children().css('font-size')) * scaleW + 'px');
		//		$('#introPics,#introTxtEnd,#friendLink,#headTel').hide();
		//		$('#friendLink').html("<span>友情链接：</span><span class='friendLinkAddres' href='http://www.jtzyhotel.com '>上海金庭庄园酒店</span>&nbsp;&nbsp;<span class='friendLinkAddres' href='http://equestrian.sport.org.cn'>中国马术协会</span>&nbsp;&nbsp;<br/><span class='friendLinkAddres' href='http://www.shjmy.cn'>骏马园马术农庄</span>&nbsp;&nbsp;<span class='friendLinkAddres' href='http://www.alpha-cn.com'>阿尔法信息技术</span>")
		$('.erWeiMaImg').click(function() {
			$('#imgBigView').show();
			$('#imgBigViewImg').attr('src', $(this).attr('imgName'));

			//		dd('imgBigViewImg').style.marginTop = screenHeight/2- $('#imgBigViewImg').height()/2+'px';
			//		console.log(screenHeight/2+'px');
			//		console.log($('#imgBigViewImg').height()/2+'px');

			dd('imgBigViewImg').style.marginTop = parseInt($('#imgBigViewImg').css('margin-top')) * scaleH + 'px';
			console.log(dd('imgBigViewImg').style.marginTop);
		})

		$('#imgBigView').click(function() {
				$('#imgBigView').hide();
			})
			//	alert(navigator.userAgent);
	}
	$('.friendLinkAddres').click(function() {
		window.open($(this).attr('href'), '_blank');
	})
	$('#downBtn').click(function(){
//		alert("APP正在审核中！");
//		window.open('https://itunes.apple.com/cn/app/id1021880990','_blank')
		window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.alpha.knight','_blank')
	})

})

//function resizeFunc(id){
//	var scaleW = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 320;
//	var scaleH = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 480;
//	dd(id).style.width = parseInt($('#'+id).width()) * scaleW + 'px';
//	dd(id).style.height = parseInt($('#'+id).height()) * scaleW + 'px';
//	dd(id).style.fontSize = parseInt($('#'+id).css('font-size')) * scaleW + 'px';
//	dd(id).style.lineHeight = parseInt($('#'+id).css('line-height')) * scaleW + 'px';
//	dd(id).style.marginTop = parseInt($('#'+id).css('margin-top')) * scaleW + 'px';
//	dd(id).style.marginLeft = parseInt($('#'+id).css('margin-left')) * scaleW + 'px';
//	dd(id).style.marginRight = parseInt($('#'+id).css('margin-right')) * scaleW + 'px';
//	dd(id).style.paddingTop = parseInt($('#'+id).css('padding-top')) * scaleW + 'px';
//	dd(id).style.paddingLeft = parseInt($('#'+id).css('padding-left')) * scaleW + 'px';
//	dd(id).style.paddingRight = parseInt($('#'+id).css('padding-right')) * scaleW + 'px';
//}
function dd(arg) {
	return document.getElementById(arg);
}