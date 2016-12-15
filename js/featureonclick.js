var g=document.getElementById('tclick'),
ul=document.querySelector('.dropdown-menu');
g.onclick=function(){
	ul.classList.remove('boom')
	console.log(g)
	g.classList.add('activeAchor')
	g.style.color='white'
}


