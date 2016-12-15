var a=document.getElementById('select').getElementsByTagName('li'),
news=document.getElementById('news'),
events=document.getElementById('event'),
notice=document.getElementById('notice-board');
console.log(a)
a[0].onclick=function(){
		for (var j=0;j<a.length;j++) {
		a[j].classList.remove('active')	
		}
	this.classList.add('active')
	events.classList.remove('activeclick')
	notice.classList.remove('activeclick')
	news.classList.add('activeclick')
}
a[1].onclick=function(){
	for (var j=0;j<a.length;j++) {
		a[j].classList.remove('active')	
		}
	this.classList.add('active')
	news.classList.remove('activeclick')
	notice.classList.remove('activeclick')
	events.classList.add('activeclick')
}
a[2].onclick=function(){
	for (var j=0;j<a.length;j++) {
		a[j].classList.remove('active')	
		}
	this.classList.add('active')
	news.classList.remove('activeclick')
	events.classList.remove('activeclick')
	notice.classList.add('activeclick')
};
var bx_prev=document.getElementById('bx-prev'),
bx_next=document.getElementById('bx-next'),
flul=document.getElementById('flul');
	var d=0;
bx_prev.onclick=function(){
d+=1200
flul.style.transform='translate3d('+d+'px, 0px, 0px)'
	
}
bx_next.onclick=function(){
	d-=1200
	flul.style.transform='translate3d('+d+'px, 0px, 0px)'
	}
	
