$(document).ready(function(){
	
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
	  });

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
	  })
	  
});

