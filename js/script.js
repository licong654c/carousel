//全局变量
var timer,
	index=0,
	j=0,
	banner=document.getElementsByClassName('banner'),
	nav=document.getElementsByClassName('nav'),
	main=document.getElementById('main');



//图片自动轮播
function slideImg(){
	function startAutoPlay(){
		timer=setInterval(function(){
			j++;
			index++;
			if(index>3){
				index=0;
			}
			changeImg();
		},1000)
	}
	startAutoPlay();


	main.onmouseover=function(){
		if(timer){
			clearInterval(timer);
		}
	}

	main.onmouseout=function(){
		startAutoPlay();
	}

//鼠标点击跳转
	for(var i=0;i<nav.length;i++){
		nav[i].setAttribute('num',i);
		nav[i].onclick=function(){
			j++;
			index=this.getAttribute('num');
			changeImg();
		}
	}
//changeImg
	function changeImg(){
		
		for(var i=0;i<banner.length;i++){
			banner[i].style.animation='none';
			nav[i].className='nav';
		}
		banner[index].style.zIndex=j;
		banner[index].style.display='block';
		banner[index].style.animation='fadeIn .5s';
		nav[index].className='nav nav-active';
	}
}
slideImg();
