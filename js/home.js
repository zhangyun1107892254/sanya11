
	$(function() {
		
		//导航栏事件
		$(window).scroll(function(){
			
			var Top = $(window).scrollTop()
			if(Top >= 200){
				$('.topnav').css({position:"fixed",top:"0px"})
			}else{
				$('.topnav').css({position:"relative"})
			}
		})
		
		
		
		

		//第一个轮播图(静态)
		var lenght,
			interval,
			currentIndex = 0,
			isStarted = false

		lenght = $('.lunbo2 a').length - 1

		$('.lunbo2 a:not(:first)').hide()

		$('.lunbo2 li:first').addClass('on')

		start()

		$('.lunbo2 li').hover(function(e) {
			stop();
			var preIndex = $(".lunbo2 li").filter(".on").index();
			currentIndex = $(this).index()
			play(preIndex, currentIndex)
		}, function() {
			start()
		})

		function next() {
			var preIndex = currentIndex;

			currentIndex = ++currentIndex

			if(currentIndex > lenght) {

				currentIndex = 0
			}
			play(preIndex, currentIndex);
		}

		function play(preIndex, currentIndex) {

			$('.lunbo2 a').eq(preIndex).fadeOut(1000)
				.parent().children().eq(currentIndex).fadeIn(1000)

			$('.lunbo2 li').removeClass('on')

			$('.lunbo2 li').eq(currentIndex).addClass('on')
		}

		//开始轮播
		function start() {
			if(!isStarted) {
				isStarted = true
				interval = setInterval(next, 3000)
			}
		}

		//停止轮播
		function stop() {
			clearInterval(interval);
			isStarted = false;
		}

})


	//依依推荐轮播图(静态)
	
	$(function() {

		var lenght,
			interval,
			currentIndex = 0,
			isStarted = false

		lenght = $('.tuiJianBox div').length - 1

		$('.tuiJianBox div:not(:first)').hide()

		$('.tuiJianRight li:first').addClass('tuijianon')

		start()

		$('.tuiJianRight li').hover(function(e){
			stop();
			var preIndex = $(".tuiJianRight li").filter(".tuijianon").index();
			currentIndex = $(this).index()
			play(preIndex, currentIndex)
		}, function() {
			start()
		})
		
		$('.tuiJianBox div').hover(function(){
			stop()
		},function(){
			start()
		})

		function next() {
			var preIndex = currentIndex;

			currentIndex = ++currentIndex

			if(currentIndex > lenght) {

				currentIndex = 0
			}
			play(preIndex, currentIndex);
		}

		function play(preIndex, currentIndex) {

			$('.tuiJianBox div').eq(preIndex).fadeOut(1000)
				.parent().children().eq(currentIndex).fadeIn(1000)

			$('.tuiJianRight li').removeClass('tuijianon')

			$('.tuiJianRight li').eq(currentIndex).addClass('tuijianon')
		}

		//开始轮播
		function start() {
			if(!isStarted) {
				isStarted = true
				interval = setInterval(next, 3000)
			}
		}

		//停止轮播
		function stop() {
			clearInterval(interval);
			isStarted = false;
		}

})
	
	


	
	
	
	
	
	
	
	




	