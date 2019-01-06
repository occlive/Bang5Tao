/*
* @Author: DELL
* @Date:   2018-12-18 19:29:25
* @Last Modified by:   DELL
* @Last Modified time: 2019-01-06 16:04:42
*/
window.onload = function(){
	textroll();
	var cover = document.getElementById('top');
	window.onscroll = function(){

		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}
	var xb = document.getElementById("xb");
		var youhui = document.getElementById("youhui");
		var app = document.getElementById("app");
		var app1 = document.getElementById("app1");
		var app2 = document.getElementById("app2");
		var cart = document.getElementById("cart");
		var yhload = document.getElementById("yhload");

		cart.onmouseenter = function(){
			animate(cart,{right:0});
		}
		app.onmouseenter = function(){
			app1.style.display = "none";
			app2.style.display = "inline";
			animate(app,{right:0});
		}
		youhui.onmouseenter = function(){
			yhload.style.display = "inline";
			animate(youhui,{right:0});
		}
		xb.onmouseenter = function(){
			animate(xb,{right:0});
		}

		cart.onmouseleave = function(){

			animate(cart,{right:-85});
		}
		app.onmouseleave = function(){
			app1.style.display = "inline";
			app2.style.display = "none";
			animate(app,{right:-85});
		}
		youhui.onmouseleave = function(){
			yhload.style.display = "none";
			animate(youhui,{right:-85});
		}
		xb.onmouseleave = function(){
		
			animate(xb,{right:-85});
		}
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

function gets(obj,style){
			if(obj.currentStyle)
			{
				return obj.currentStyle[style];
			}
			else{
				return getComputedStyle(obj)[style];
			}
}