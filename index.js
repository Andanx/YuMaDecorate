//右侧导航
$('.DisplayCode')[0].onmousemove = function(){
	$('.CodeWrap')[0].style.opacity = 1;
	$('.CodeWrap')[0].style.marginLeft = '-55px';
};
$('.DisplayCode')[0].onmouseout = function(){
	$('.CodeWrap')[0].style.opacity = 0;
	$('.CodeWrap')[0].style.marginLeft = '-80px';
};

var CurrentTopNum = $(document).scrollTop();
var onwheel = function(){
	CurrentTopNum = $(document).scrollTop();
	if(CurrentTopNum >= 600){
		$('.rightNavigation')[0].style.width = '50px';
		$('.rightNavigation')[0].style.height = '200px';
	}else{
		$('.rightNavigation')[0].style.width = '0px';
		$('.rightNavigation')[0].style.height = '0px';
	};
};

TotopNum = 1;
$('.RNGoTop')[0].onclick = function(){
	TotopNum = 1;
    TotopTimeBj = setInterval(TotopFun,20);
}
var TotopFun = function(){
	CurrentTopNum = $(document).scrollTop();
	if(CurrentTopNum == 0){
		clearInterval(TotopTimeBj);
	};
	TotopNum += 20;
	$(document).scrollTop(CurrentTopNum - TotopNum);
	onwheel();
}

//swiper轮播
var mySwiperCarousel = new Swiper('.bannerImgsWrap',{
	effect: 'slide',
	setWrapperSize:true,
	slideActiveClass: 'swiper-slide-active',
	wrapperClass: 'bannerImgs',
	noSwipingClass: 'stop-swiping',
	autoplay: {
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.nextButton',
      prevEl: '.prevButton',
    },
	loop: true,
	pagination: {
		el: '.originControl',
	    bulletElement: 'li',
	    clickable :true,
	    bulletClass : 'originControlBefore',
	    bulletActiveClass: 'originControlChang',
	},
});

for(i=0;i<mySwiperCarousel.pagination.bullets.length;i++){
  mySwiperCarousel.pagination.bullets[i].onmouseover=function(){
    this.click();
  };
} 

$('.bannerImgsWrap').mousemove(function(){
  mySwiperCarousel.autoplay.stop();
})
$('.bannerImgsWrap').mouseleave(function(){
  mySwiperCarousel.autoplay.start();
})

$('.originControl').mousemove(function(){
  mySwiperCarousel.autoplay.stop();
})
$('.originControl').mouseleave(function(){
  mySwiperCarousel.autoplay.start();
})

////实现轮播的方法
//var CarouselWrap = document.getElementById('Carousel');
//var CTul = document.getElementsByClassName('originControl')[0];
//var CTli = CTul.getElementsByTagName('li');
//var bannerView = document.getElementsByClassName('bannerImgs')[0];
//var eachBannerImg = bannerView.getElementsByTagName('li');
//var constantWidth = eachBannerImg[1].clientWidth;
//var prevButtonControl = document.getElementsByClassName('prevButton')[0];
//var nextButtonControl = document.getElementsByClassName('nextButton')[0];
//
//var numOne = 1;
//prevButtonControl.onclick = function(){
//	autoRunFun(2);
//	for(var k = 0; k < CTli.length; k++){
//  CTli[k].style.height = '15px';
//  CTli[k].style.background = 'white'
//};
//	numOne --;
//	if(numOne == eachBannerImg.length - eachBannerImg.length){
//		numOne = 5;
//		bannerView.style.transition = '0s';
//		var numMultipleTwo = '-' + constantWidth*numOne + 'px';
//		bannerView.style.marginLeft = numMultipleTwo;
// 	  numOne = 4;
//};
//	setTimeout(function(){
//		bannerView.style.transition = '0.2s';
//		var numMultipleTwo = '-' + constantWidth*numOne + 'px';
//		bannerView.style.marginLeft = numMultipleTwo;
//	},0);
//
//	CTli[numOne-1].style.height = '25px';
//	CTli[numOne-1].style.background = '#00ae66';
//}
//nextButtonControl.onclick = function(){
//	autoRunFun(2);
//	autoRun();
//}
//
//for(var x = 0; x < CTli.length; x++){
//	bannerView.style.transition = '1s';
//	CTli[x].index = x;
//	CTli[x].onmousemove = function(){
//		autoRunFun(2);
//		numOne = this.index + 1;
//		for(var y = 0; y < CTli.length; y++){
//		   CTli[y].style.height = '15px';
//		   CTli[y].style.background = 'white'
//		};
//		var numMultipleOne = '-' + constantWidth*numOne + 'px';
//		this.style.height = '25px';
//		this.style.background = '#00ae66';
//		bannerView.style.marginLeft = numMultipleOne;
//	};
//	CTli[x].onmouseout = function(){
//		autoRunFun(1);
//	};
//};
//var autoRun = function(){
//	for(var k = 0; k < CTli.length; k++){
//  CTli[k].style.height = '15px';
//  CTli[k].style.background = 'white'
//};
//	numOne ++;
//	if(numOne == eachBannerImg.length - 1){
//		numOne = 0;
//		bannerView.style.transition = '0s';
//		var numMultipleTwo = '-' + constantWidth*numOne + 'px';
//		bannerView.style.marginLeft = numMultipleTwo;
// 	  numOne = 1;
//};
//	setTimeout(function(){
//		bannerView.style.transition = '0.2s';
//		var numMultipleTwo = '-' + constantWidth*numOne + 'px';
//		bannerView.style.marginLeft = numMultipleTwo;
//	},0);
//
//	CTli[numOne-1].style.height = '25px';
//	CTli[numOne-1].style.background = '#00ae66';
//};
//
//bannerView.onmouseenter = function(){
//	autoRunFun(2);
//};
//bannerView.onmouseleave = function(){
//	autoRunFun(1);
//};
//
//prevButtonControl.onmouseenter = function(){
//	autoRunFun(2);
//};
//prevButtonControl.onmouseleave = function(){
//	autoRunFun(1);
//};
//nextButtonControl.onmouseenter = function(){
//	autoRunFun(2);
//};
//nextButtonControl.onmouseleave = function(){
//	autoRunFun(1);
//};
//
//// CarouselWrap.onmouseenter = function(){
//// 	prevButtonControl.style.opacity = '1';
//// 	nextButtonControl.style.opacity = '1';
//// }
//// CarouselWrap.onmouseleave = function(){
//// 	prevButtonControl.style.opacity = '0';
//// 	nextButtonControl.style.opacity = '0';
//// }
//
//var autoRunFunId = '';
//var autoRunFun =function(judgeNumb){
//	if(judgeNumb == 1){
//		autoRunFunId = setInterval('autoRun()',3000);
//	} else{
//		clearInterval(autoRunFunId);
//	}
//};
//autoRunFun(1);

//控制表单里面预输入的文字消失的方法
var selectInputone = document.getElementsByClassName("thirdForm")[0];
var selectPone = selectInputone.getElementsByTagName("p");
var selectInputTextOne = selectPone[0].getElementsByTagName("input")[0];
var selectInputTextTwo = selectPone[1].getElementsByTagName("input")[0];
var selectInputtwo = document.getElementsByClassName("fourthForm")[0];
var selectPtwo = selectInputtwo.getElementsByTagName("p")[0];
var selectInputTexttwo = selectPtwo.getElementsByTagName("input")[0];

for (var i = 0; i < 2;i++) {
	selectPone[i].index = i;
	var selectInputTextone = selectPone[i].getElementsByTagName("input")[0];
	var selectInputTexttwo = selectPtwo.getElementsByTagName("input")[0];
	deleText = function(InputText,colorCH,colorYS){
		var colorChangNew = colorCH;
		var colorChangYuan = colorYS;
	    var originalValue = InputText.value;
	    InputText.onfocus = function(){
		   if(this.value == originalValue){
		   this.value = '';
		   this.style.color = colorChangNew;
	       }
	    };
	    InputText.onblur = function(){
		   if(this.value == ''){
		   	this.style.color = colorChangYuan;
		   this.value = originalValue;
	       }
	    }
    };
    deleText(selectInputTextone,"#8b8b8b","#8b8b8b");
};
deleTexttwo = function(InputText){
	    var originalValue = InputText.value;
	    InputText.onfocus = function(){
		   if(this.value == originalValue){
		   this.value = '';
	       }
	    };
	    InputText.onblur = function(){
	    var reg = /^\d+$/;
	       if(this.value == ''){
	       	alert('请先输入手机号码');
	       	this.value = originalValue;
	       }else if(this.value.length == 11){

	      }else if(this.value.length !== 11){
	      	alert('手机号码格式错误！');
		    this.value = originalValue;
	       }else if(reg.test(this.value)==true){
	       	return true;
	       }else{
              alert('手机号码格式错误！');
              return false;
          };
	    }
    };
deleTexttwo(selectInputTexttwo);


//获取验证码时倒计时的方法
var selectPtwoTime = selectInputtwo.getElementsByTagName("p")[1];
var selectInputTime = selectPtwoTime.getElementsByTagName("input")[0];
var selectButton = selectPtwoTime.getElementsByTagName("button")[0];

selectInputTime.setAttribute("disabled","true");
var countDown = 60;
var reduceTime = function(){
	var Cl = setTimeout(function(){
        reduceTime();
        },1000)
	selectInputTime.onfocus = TT = function (){
		var Dataone = new Date().getSeconds();
		selectButton.innerHTML = "提交计算";
		selectButton.style = 'background:#00ae66';
		clearTimeout(Cl);
        selectInputTime.value = '';
    };
	selectInputTime.onblur = function(){
		var reg = /^\d+$/;
		if(selectInputTime.value == ''){
			alert('请输入获取到的验证码')
		}else if(selectInputTime.value.length != 6){
			alert('验证码错误！');
		}else if(reg.test(this.value)==true){
            return true;
        }else{
            alert('验证码错误！');
            return false;
            selectInputTime.value == '请输入验证码'
        };
	    reduceTime();
    };
	if(countDown <= 0){
		selectInputTime.value = "超时！请重新获取";
		selectButton.innerHTML = "获取验证码";
		selectInputTime.setAttribute("disabled","true");
		selectButton.removeAttribute('disabled');
		selectButton.style = 'background:#00ae66';
		clearTimeout(Cl);
		countDown = 60;
	}else{
		countDown--;
	    selectInputTime.value = countDown + "秒";
	};
}
var Obtain = function(){
	selectButton.onclick = function(){
		if(selectInputTexttwo.value.length != 11){
			alert('请先输入手机号码')
		}else if(selectInputTextOne.value != '请输入您的房屋面积/㎡' && selectInputTextTwo.value != '请输入您的称呼'){
			selectButton.style = 'background:#595959';
		    selectButton.setAttribute("disabled","true");
	        selectInputTime.removeAttribute('disabled');
	        reduceTime();
		}else{
			alert('请把信息填写完整')
		}
    }
}
Obtain();

//家装设计部分改变按钮的方法
var changeButton = document.getElementsByClassName('changeButton')[0];
var moveButton = changeButton.getElementsByTagName('p')[0];
var changeText = document.getElementsByClassName('changeText')[0];
var eachDsText = changeText.getElementsByTagName('a');
var ViewDesign = document.getElementsByClassName('viewDesign')[0];
var ViewDesignUl = ViewDesign.getElementsByTagName('ul')[0];
var ViewDesignLi = ViewDesignUl.getElementsByTagName('li');

for(var k = 0; k < 4; k++){
	eachDsText[k].index = k;
	var num = eachDsText[k].index;
	eachDsText[k].onmousemove = function(){
		for(var h = 0; h < 4; h++){
			eachDsText[h].style.color = 'black';
			ViewDesignLi[h].style.opacity = '0';
	    }
		if(this.index == 0){
			ViewDesignLi[0].style.opacity = '1';
			moveButton.style.marginLeft = '0px';
		}else if(this.index == 1){
			ViewDesignLi[1].style.opacity = '1';
			moveButton.style.marginLeft = '125px';
		}else if(this.index == 2){
			ViewDesignLi[2].style.opacity = '1';
			moveButton.style.marginLeft = '250px';
		}else if(this.index == 3){
			ViewDesignLi[3].style.opacity = '1';
			moveButton.style.marginLeft = '375px';
		}
		this.style.color = 'white';
	}
}

//工程设计部分改变按钮的方法
var EnChangeButton = document.getElementsByClassName('engineeringDesignChangeButton')[0];
var EnMoveButton = EnChangeButton.getElementsByTagName('p')[0];
var EnChangeText = document.getElementsByClassName('engineeringDesignChangeText')[0];
var EnEachDsText = EnChangeText.getElementsByTagName('a');
var EnViewDesign = document.getElementsByClassName('engineeringDesignViewDesign')[0];
var EnViewDesignUl = EnViewDesign.getElementsByTagName('ul')[0];
var EnViewDesignLi = EnViewDesignUl.getElementsByTagName('li');

for(var m = 0; m < 5; m++){
	EnEachDsText[m].index = m;
	var num = EnEachDsText[m].index;
	EnEachDsText[m].onmousemove = function(){
		for(var n = 0; n < 5; n++){
			EnEachDsText[n].style.color = 'black';
			EnViewDesignLi[n].style.opacity = '0';
	    }
		if(this.index == 0){
			EnViewDesignLi[0].style.opacity = '1';
			EnMoveButton.style.marginLeft = '0px';
		}else if(this.index == 1){
			EnViewDesignLi[1].style.opacity = '1';
			EnMoveButton.style.marginLeft = '121px';
		}else if(this.index == 2){
			EnViewDesignLi[2].style.opacity = '1';
			EnMoveButton.style.marginLeft = '243px';
		}else if(this.index == 3){
			EnViewDesignLi[3].style.opacity = '1';
			EnMoveButton.style.marginLeft = '364px';
		}
		else if(this.index == 4){
			EnViewDesignLi[4].style.opacity = '1';
			EnMoveButton.style.marginLeft = '486px';
		}
		this.style.color = 'white';
	}
}

//底部控制表单里面预输入的文字消失的方法
var footerTopDesign = document.getElementsByClassName('footerTopDesign')[0];
var footerTopDesignInp = footerTopDesign.getElementsByTagName('input');

for(var v=0; v<2; v++){
//	footerTopDesignInp[v].index = v;
	var eachfooterTopDesignInp = footerTopDesignInp[v];
//	footerTopDesignInp[v].onfocus = function(){
//		if(this.value == '你的姓名' || this.value == '联系方式'){
//			this.value = '';
//			this.style.color = '#282828';
//		}
//	};
//	footerTopDesignInp[v].onblur = function(){
//		NewV = this.index;
//		if(this.value !== ''){
//			
//		}if(this.value == '' && NewV == 0){
//			this.style.color = '#a6a6a6';
//			this.value = '你的姓名';
//		}if(this.value == '' && NewV == 1){
//			this.style.color = '#a6a6a6';
//			this.value = '联系方式';
//		};
//	};
	deleText(eachfooterTopDesignInp,"#282828","#a6a6a6");
};

//Swiper轮播插件
var ButP = $('.swiper-containerButP')[0];

var mySwiper = new Swiper('.swiper0', {
	direction : 'horizontal',
	setWrapperSize :true,
	touchRatio : 0,
});

$('.btn1').mousemove(function(){
    mySwiper.slideTo(0, 500, false);//切换到第一个slide，速度为1秒
});
$('.btn2').mousemove(function(){
    mySwiper.slideTo(1, 500, false);//切换到第一个slide，速度为1秒
});

$('.btn1').mousemove(function(){
	var realIndexNum = mySwiper.realIndex;
	if(realIndexNum == 0){
		ButP.style.marginLeft = '-130px';
		$('.btn1')[0].style.color = 'white';
		$('.btn2')[0].style.color = 'black';
	};
});
$('.btn2').mousemove(function(){
	var realIndexNum = mySwiper.realIndex;
	if(realIndexNum == 1){
		ButP.style.marginLeft = '130px';
		$('.btn1')[0].style.color = 'black';
		$('.btn2')[0].style.color = 'white';
	};
})

$('.playBut').mouseenter(function(){
	this.style.transform = "rotateY(180deg)"
});
$('.playBut').mouseleave(function(){
	this.style.transform = "rotateY(0deg)"
});

//内部镶嵌第一个轮播
var mySwiper1 = new Swiper('#swiper1', {
	autoplay: true,
	direction : 'horizontal',
	setWrapperSize: true,
	loop: true,
	pagination: {
      el: '.swiper-pagination',
	  dynamicMainBullets: 2,
	  clickable :true,
	  bulletClass : 'myBullet',
	  bulletActiveClass: 'myBulletActive',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$('.swiperChildone').mousemove(function(){
  mySwiper1.autoplay.stop();
})
$('.swiperChildone').mouseout(function(){
  mySwiper1.autoplay.start();
});

//内部镶嵌第二个轮播
var mySwiper2 = new Swiper('#swiper2', {
	autoplay: true,
	direction : 'horizontal',
	setWrapperSize: true,
	loop: true,
	pagination: {
      el: '.swiper-pagination',
	  dynamicMainBullets: 2,
	  clickable :true,
	  bulletClass : 'myBullet',
	  bulletActiveClass: 'myBulletActive',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$('.swiperChildTwo').mousemove(function(){
  mySwiper2.autoplay.stop();
})
$('.swiperChildTwo').mouseout(function(){
  mySwiper2.autoplay.start();
})