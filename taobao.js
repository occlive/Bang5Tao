/*
* @Author: DELL
* @Date:   2018-12-18 19:29:25
* @Last Modified by:   DELL
* @Last Modified time: 2019-01-03 15:20:58
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
function leftmove(obj,json){
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			var now = parseInt(gets(obj,attr));
			var speed = (json[attr] - now)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed;
			obj.style[attr] = current + "px";
			if(json[attr] != current){
				flag = false;
			}else{
				flag = true;
			}

			if(flag){
				clearInterval(obj.timer);
			}
			
			
		}
	},20);
}
