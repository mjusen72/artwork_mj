$(function(){
	//자가 실행 익명함수. 이렇게도 사용 할 수 있다.
	//도큐멘트도되고 펑션이라 쓰면 실행하는 조건이 되면 실행하게 되어있다.
	
	//변수 선언-자주사용 할 것 명령을 줄일-빨리 찾을 수 있다.
 var $wrap = $('.wrap'),
     $btn = $wrap.find('#btn'),
     $nav = $wrap.find('nav'),
     $gnb = $nav.find('#gnb'),
     $main = $wrap.find('main'),
		 $section = $main.find('section');
	
 $btn.on('click', function(){
		//1. 버튼 숨기기
		//2. nav 요소에 'on' 클래스 주기
		//3. main 요소에 'on' 클래스 주기
		$(this).fadeOut();
	 //점@!!!!!!!!!!!!!!!!!!!!
		$nav.addClass('on');
		$main.addClass('on');
	});
	
	$section.on('click', function(){
		$btn.fadeIn();
		$nav.removeClass('on');
		$main.removeClass('on');
	});
	
	$nav.on('click', 'li', function(){
		var i = $(this).index();
		$section.removeClass('on');
		$section.eq(i).addClass('on');
		
		//g해당 메뉴 켜기
		$nav.find('li').removeClass('on');
		$(this).addClass('on');
		
		$btn.fadeIn();
		$nav.removeClass('on');
		$main.removeClass('on');
	});

});