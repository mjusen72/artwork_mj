$(function () {

	var winWidth = $(window).innerWidth(),
		winHeight = $(window).innerHeight(),
		currentIndex = 0,
		$wrap = $('#wrap'),
		$section = $wrap.find('section'),
		$bg = $wrap.find('#bg'),
		$img = $bg.find('img'),
		$gnb = $wrap.find('#gnb'),
		$contents = $wrap.find('#contents'),
		$grapic = $wrap.find('#grapic'),
		$slider = $grapic.find('#slider'),
		currentIndex = 0,
		num = $section.size(),
		secWidth = $section.width(),
    totalSize = secWidth * num;
		
	$section.width(winWidth);
	$section.height(winHeight);

	//  console.log(winWidth,winHeight);
/*배경*/
	$wrap.on('mousemove', function (e) {

		var x = e.pageX,
			y = e.pageY;

		$bg.find('.pic1').css({
			left: 0 - (y / 150),
			bottom: 0 - (x / 130)
		});
		$bg.find('.pic2').css({
			left: 0 + (y / 160),
			bottom: 0 + (x / 130)
		});
		$bg.find('.pic3').css({
			left: 0 + (y / 60),
			bottom: 0 - (x / 80)
		});
	});

    
     $gnb.on('mouseover', 'li', function(){
     
	 var i = $(this).index();
	 $gnb.find('.sil').animate({
		 left: 25 * i + '%'
	 },500)
         }).on('mouseleave', 'li', function(){
         
     });
 
    
	//추가
	
	// console.log(num, secWidth, totalSize);
 
 var winHeight = $(window).height();
     $section.height(winHeight);
	
	
	//section 나란히 배치하기
	$section.each(function(i){
 var i = $(this).index();
		
		$(this).css({
			left: 100 * i + "%"
		});
	});

	function play(i) {
		$contents.stop().animate({
			left: -100 * i + '%'
		}, 1500);
		currentIndex = i;
	}

	$section.on('mousewheel',function(event,delta){
  
  currentIndex = $(this).index();
  
  //위로 스크롤
  if(delta > 0 && currentIndex > 0){
   play(currentIndex-1);
   
   //아래로 스크롤
  }else if(delta < 0 && currentIndex < num-1){ 
     play(currentIndex+1);
  }
  
 });
	//메뉴
	$gnb.on('click', 'li', function () {
		var i = $(this).index(),
			posX = -100 * i + "%";

		$section.removeClass('on');
		$section.eq(i).addClass('on');

//		console.log(posX);

		$contents.stop().animate({
			left: -100 * i + '%'
		}, 1500, 'easeOutExpo');

		//play(i);
	});

	$(window).on('resize', function () {
		var winWidth = $(window).innerWidth(),
			winHeight = $(window).innerHeight();
		$section.width(winWidth);
		$section.height(winHeight);
	});



   /*그래프*/
   //create instance
    $('.chart').easyPieChart({
        animate: 1500
     });
    //update instance after 5 sec
    setTimeout(function() {
   $('.c1 .chart').data('easyPieChart').update(50);
   $('.c2 .chart').data('easyPieChart').update(30);
   $('.c3 .chart').data('easyPieChart').update(70);
   $('.c4 .chart').data('easyPieChart').update(90);
   $('.c5 .chart').data('easyPieChart').update(30);
    }, 3000);   
 


	
	//work
	$slider.each(function (i) {
		
		var $slideNav = $(this).find('.nav'),
				$art = $(this).find('ul'),
				$li = $art.find('li');
        
        //정렬

    $li.css({
     left: 100 * i +'%'
    });
   
    $art.find('li:last-child').find('li:last-child').prependTo($art);
  
        
        
    /*work 슬라이드 재생함수*/
   function moveLeft() {
        $art.stop().animate({
            bottom: 100 + '%'
        }, 1000, 'easeInSine', function () {
            $art.find('li:last-child').prependTo($art);
            $art.animate({
             bottom: '',
             opacity: .9
            },1000);
        });
       
        currentIndex = i;
        updateNav();
    };

    function moveRight() {
        $art.stop().animate({
            bottom: -100 + '%'
        }, 1000, 'easeOutSine', function () {
           $art.find('li:first-child').appendTo($art);
            $art.animate({
             bottom: '',
             opacity: .9
            },1000);
        });
		currentIndex = i;
        updateNav();
    };
		
		 $li.css({
			left: 100 * i + "%"
		});

    $('a.prev').click(function () {
        moveLeft();
    });

    $('a.next').click(function () {
        moveRight();
    });
		
    	});
        

	
});
