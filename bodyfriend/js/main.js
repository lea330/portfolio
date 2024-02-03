$(document).ready(function(){
	
	//메인 배너
	new Swiper('.swiper', {
		
		effect : 'fade',
		autoplay: {
			// 자동재생 여부
			delay: 2000, // 시작시간 설정
			disableOnInteraction: false,
		  },
		loop: true,
		navigation: {
			prevEl: '.mb_prev',
			nextEl: '.mb_next',
		  }
	})
	$('.mb_pause').on('click', function(){
		swiper.autoplay.stop();
	});
	$('.mb_start').on('click', function(){
		swiper.autoplay.start();
	});


	//con4 배너
	new Swiper(".swiper2", {
		slidesPerView: 3,  
		slidesPerGroup: 3,
		spaceBetween: 40,
		navigation: {
			prevEl: '.con4_prev',
			nextEl: '.con4_next',
		  },
		scrollbar : { // 스크롤바
			el : '.swiper-scrollbar',
			draggable : true, // 스크롤바를 드래그해서 움직일수 있는지 여부
		},
		breakpoints: {
			// 화면의 넓이가 320px 이상일 때
			320: {
			  slidesPerView: 1,
			  slidesPerGroup: 1
			},
			// 화면의 넓이가 640px 이상일 때
			640: {
			  slidesPerView: 3
			}
		  }

	});

	//con5 배너
	new Swiper(".swiper3", {
		effect : 'fade',
		autoplay: {
			// 자동재생 여부
			delay: 2000, // 시작시간 설정
			disableOnInteraction: false,
		  },
		loop: true,
		navigation: {
			prevEl: '.con5_prev',
			nextEl: '.con5_next',
		  }
	});

	//모바일 메뉴 버튼 이벤트
	$('.all').on('click',function(){
		$(this).toggleClass('on');
		$('.hd').toggleClass('on');
	})

	//스크롤 시 메뉴 배경색 변경
	$(window).scroll(function(){
		if($(document).scrollTop() > 0) {
		  $('.menu').addClass('active');
		} else {
		  $('.menu').removeClass('active');
		}
	  })
	

});



