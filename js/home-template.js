$.getJSON('Json-data/home.json', function(response, status, xhr) {

	var zuopin3 = document.querySelector('.zuopin3')

	var talkLunbo = document.querySelector('.talkLunboTemplate')

	var showCaseMainRight = document.querySelector('.show_case_main_right')

	//var tuiJianBox = document.querySelector('.tuiJianBox')

	var newsMain = document.querySelector('.newsMain')

	var homeZuopin = response.homeZuopin

	var homeTalkLunbo = response.homeTalkLunbo

	var homeShowCase = response.homeShowCase

	//var homeTuijian = response.homeTuijian

	var homeNews = response.homeNews

	var zuopinTemplate = template('zuopinTemplate', homeZuopin)

	var talkLunboTemplate = template('talkLunboTemplate', homeTalkLunbo)

	var showCaseMainTemplate = template('ShowCaseMainRightTemplate', homeShowCase)

	//var tuiJianTemplate = template('tuiJianTemplate', homeTuijian)

	var newsMainTemplate = template('newsTemplate', homeNews)

	zuopin3.innerHTML = zuopinTemplate

	talkLunbo.innerHTML = talkLunboTemplate

	showCaseMainRight.innerHTML = showCaseMainTemplate

	//tuiJianBox.innerHTML = tuiJianTemplate

	newsMain.innerHTML = newsMainTemplate

	//评论轮播图
	//var flag = false;
	//setTimeout('flag=true', 1500)

	var a = document.querySelectorAll('.talkLunboTemplate li').length

	var b = 715 * a

	var ul = document.querySelector('.talkLunboTemplate ul')

	ul.style.width = b + "px"

	function moveLeft() {
		if(!$(".talkLunboTemplate ul").is(":animated")){
			$(".talkLunboTemplate ul").animate({
			marginLeft: "-730px"
		}, 600).animate({
			marginLeft: "-715px"
		}, 300, function() {
			$(".talkLunboTemplate ul>li").eq(0).appendTo($(".talkLunboTemplate ul"));
			$(".talkLunboTemplate ul").css('marginLeft', '0px');
		});
		}
	}

	function moveRight() {
		
		if(!$(".talkLunboTemplate ul").is(":animated")){
		$(".talkLunboTemplate ul").css('marginLeft', '-715px');
		$(".talkLunboTemplate ul>li").last().prependTo($(".talkLunboTemplate ul"));
		$(".talkLunboTemplate ul").animate({
			marginLeft: "20px"
		}, 600).animate({
			marginLeft: "0px"
		}, 300);
	}
		}

	$('.talk-lunbo-right').click(function() {
		//alert('向右')
		moveLeft()
	})
	$('.talk-lunbo-left').click(function() {
		//alert('向左')
		moveRight()
	})
	
	$(".talkLunboTemplate ul li").hover(function(){
		clearInterval(interval)
	},function(){
		interval = setInterval(moveLeft, 3000)
	})

	$(".talkLunboTemplate ul").mousewheel(function(event, delta) {

		event.stopPropagation();

		event.preventDefault();

		if(delta > 0) {
			moveLeft()
		} else {
			moveRight()
		}

	})

	var interval = setInterval(moveLeft, 3000)

	//新闻活动轮播图

	var lenght,
		interval,
		currentIndex = 0,

		lenght = $('.newsMain_lunbo1 a').length - 1

	$('.newsMain_lunbo1 a:not(:first)').hide()
	$('.newsMain_lunbo2 a:not(:first)').hide()
	$('.newsMain_lunbo3 a:not(:first)').hide()

	function next() {
		var preIndex = currentIndex;

		currentIndex = ++currentIndex

		if(currentIndex > lenght) {

			currentIndex = 0
		}
		play(preIndex, currentIndex);
	}

	function play(preIndex, currentIndex) {

		$('.newsMain_lunbo1 a').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(500)

		$('.newsMain_lunbo2 a').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(500)

		$('.newsMain_lunbo3 a').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(500)

	}

	setInterval(next, 2000)
	
	
	
	//客片欣赏效果
	$('.show_case_main_right ul li').hover(function(){
				
				$(this).children('a').children('p').stop().animate({width:"190px"},500)
			},function(){
				$(this).children('a').children('p').stop().animate({width:"0px"},500)
				
			})
	
	
	$('.show_case_main_right ul li:nth-child(2)').hover(function(){
				
				$(this).children('a').children('div').stop().animate({height:"143px"},500)
			},function(){
				$(this).children('a').children('div').stop().animate({height:"0px"},500)
				
			})
	
	
	
	})

	