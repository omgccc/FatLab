var a=document.querySelectorAll('.main .pic_text .pic');
var b=document.querySelector('.sbanner'),
prev=document.getElementById('prev'),
next=document.getElementById('next');
var index=0;
var len=a.length;
var timer=setInterval(banner,2000)
function banner(){
		a[index].classList.remove('active')
		index=++index==len?0:index;
		a[index].classList.add('active')
	}
b.onmouseover=function(){
	clearInterval(timer);
	prev.style.display='block'
	next.style.display='block'
}
b.onmouseout=function(){
timer=setInterval(banner,2000)
prev.style.display='none';
next.style.display='none';
}
next.onclick=function(){
	banner()
	console.log(index)
}
prev.onclick=function(){
	a[index].classList.remove('active')
	index=index>0?index-1:len-1;
	console.log(index)
	a[index].classList.add('active')
}
