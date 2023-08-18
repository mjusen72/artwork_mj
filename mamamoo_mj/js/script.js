$(function () {
	var sp = 1000,
			$wrap = $('.wrap'),
			$main = $wrap.find('main'),
			$btn = $main.find('a'),
			$li = $main.find('ul > li');
$('article')
		.on('mouseenter', function () {
			$(this).stop().animate({
				'top' : '45%'
			}, sp, function () {
				$(this).find('h3').stop().animate({
					'right': '10px'
				}, 500);
				$(this).find('p').stop().animate({
					'right': '10px'
				}, 800);
				$(this).find('h2').stop().animate({
					'top': '20px'
				}, 800);
			});
			$('#logo').stop().animate({
					'top': '5%'
				}, 800);
		//위치 잘 봐야함 동영상 적을 위치. 콜백 함수가 아니기 때문에 밖에 적는다.
			$(this).find('video').stop().animate({
				'opacity' : '.8',
				'top' : 0
			},sp);
	
			var vid = $(this).find('video').get(0);
			vid.currentTime = 0;
			vid.play();
	})
	.on('mouseleave', function () {
			$(this).stop().animate({
				'top' : '65%'
			}, 700);
			$(this).find('h3').stop().animate({
					'right': '-400px'
				}, 200);
			$(this).find('p').stop().animate({
					'right': '-400px'
				}, 200);
			$(this).find('video').stop().animate({
				'opacity' : 0,
				'top' : '-100%'
			},sp);

		var vid = $(this).find('video').get(0);
			vid.pause();
		$('#logo').stop().animate({
					'top': '25%'
		}, 800);
	});

	$('section').on('click','article', function () {
		var i = $(this).index();
		$main.addClass('on');
		$li.eq(i).addClass('on');
	
			$li.find('video').eq(i).prop({
			'muted' : false
		});
			var vid = $li.find('video').eq(i).get(0);
			vid.currentTime = 0;
			vid.play();
	});
	$btn.on('click', function () {
		$main.removeClass('on');
		$li.removeClass('on');
		
		$li.find('video').prop({
			'muted' : true
		});
		var vid = $li.find('video').get(0);
			vid.pause();
	});
	$main.on('click', function(){
		$main.removeClass('on');
		$li.find('video').prop({
			'muted' : true
		});
		var vid = $li.find('video').get(0);
			vid.pause();
	});
});