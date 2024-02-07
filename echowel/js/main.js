$(document).ready(function(){
	
	//스크롤 시 메뉴 배경색 변경
	$(window).scroll(function(){
		if($(document).scrollTop() > 0) {
		  $('header').addClass('active');
		} else {
		  $('header').removeClass('active');
		}
	  })

	  $("html, body").animate({ scrollTop: 0 }, "slow"); 

	//모바일 메뉴 버튼 이벤트
	$('.all').on('click',function(){
		$(this).toggleClass('on');
		$('.menu_wrap').toggleClass('on');
	})
	

});



