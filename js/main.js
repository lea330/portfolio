$(document).ready(function(){

	$("html").animate({scrollTop:0},10);
	
	$("#con1").on("wheel", function(e){
		e.preventDefault();
		var Top1 = $(this).height();

		if($("html").is(":animated")) return;

		if(e.originalEvent.deltaY > 0){
			$("html").animate({scrollTop: Top1}, 200);
		}
	});

			
    $("#category a").click(function(e){
		e.preventDefault();
		var category = $(this).attr("title");
		
		$("#category a").removeClass("on");
		$(this).addClass("on");
		
		$("#list li").hide();
		if(category == "all"){
			$("#list li").fadeIn("show");
		}
		else{
			$("#list li[class*="+category+"]").fadeIn("show");
		}
    }); //카테고리 필터링

	$("#list li").click(function(){

		$("body").css("overflow","hidden");// 스크롤 고정

		var idx = $("#list li").index(this);
		var idxlength = console.log($("#list li").length);

		$(".pop").stop().fadeIn();
		$(".pop").scrollTop(0);
		$(".pop_in>ul>li").hide();
		$(".pop_in>ul>li").eq(idx).stop().fadeIn();
		
	});//항목 클릭 시 팝업

	
	$(".close").click(function(){
		
		$("body").css("overflow","visible");//스크롤 풀기

		$(".pop").stop().fadeOut();

	});// 닫기 버튼 클릭 시 팝업 닫기

	

});

$(document).mouseup(function (e){
	var pop = $(".pop");
	if(pop.has(e.target).length === 0){
		pop.hide();

		$("body").css("overflow","visible");//스크롤 풀기
	}
});//외부 영역 클릭 시 팝업 닫기


