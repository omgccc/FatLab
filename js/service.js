var a=document.querySelectorAll('.header ul li')
service=document.querySelectorAll('.service_text')
for (var i=0;i<a.length;i++) {
	a[i].index=i
	a[i].onclick=function(){
		for (var j=0;j<a.length;j++) {
		a[j].classList.remove('active')	
		service[j].classList.remove('active')
		}
	this.classList.add('active')
	service[this.index].classList.add('active')
	}
}