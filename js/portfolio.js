window.HTMLElement = window.HTMLElement || Element;
if (!("classList" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, 'classList', {
            get: function() {
                var self = this;
                function update(fn) {
                    return function(value) {
                        var classes = self.className.split(/\s+/g),
                            index = classes.indexOf(value);
                        
                        fn(classes, index, value);
                        self.className = classes.join(" ");
                    }
                }
                
                return {                    
                    add: update(function(classes, index, value) {
                        if (!~index) classes.push(value);
                    }),
                    
                    remove: update(function(classes, index) {
                        if (~index) classes.splice(index, 1);
                    }),
                    
                    toggle: update(function(classes, index, value) {
                        if (~index)
                            classes.splice(index, 1);
                        else
                            classes.push(value);
                    }),
                    
                    contains: function(value) {
                        return !!~self.className.split(/\s+/g).indexOf(value);
                    },
                    
                    item: function(i) {
                        return self.className.split(/\s+/g)[i] || null;
                    }
                };
            }
        });
    }
var b=$('.pic-item');
for (var i=0;i<b.length;i++) {
	b[i].index=i
	b[i].onmouseover=function(){
	img=this.getElementsByTagName('img');
	opacity=$('.pic-item .opacity')
	mask=$('.pic-item>.mask')
	h=$('.pic-item .mask>h2')
	a=$('.pic-item .mask>a');
	console.log(a)
    img[0].classList.add('current');
    opacity[this.index].style.top=0+'px';
    mask[this.index].classList.add('current');
    h[this.index].classList.add('current') 
    for (var j=0;j<a.length;j++) {
    	console.log(this.index)
    	a[this.index*2].classList.add('transiton');
    	a[this.index*2+1].classList.add('transiton');
    	setTimeout(function(){
    	for (var k=0;k<a.length;k++) {   
		a[this.index*2].classList.add('transiton2');
 		a[this.index*2+1].classList.add('transiton2');
    	}
    	}.bind(this),500)
    }
	}
}
for (var i=0;i<b.length;i++) {
	b[i].index=i
	b[i].onmouseout=function(){
	img=this.getElementsByTagName('img');
	opacity=$('.pic-item .opacity')
	console.log(img)
	mask=$('.pic-item .mask')
	h=$('.pic-item .mask h2')
	a=$('.pic-item .mask a');
 	img[0].classList.remove('current');
    opacity[this.index].style.top=-270+'px'
    mask[this.index].classList.remove('current');
	h[this.index].classList.remove('current');
     for (var j=0;j<a.length;j++) {
    	a[j].classList.remove('transiton');
    	a[j].classList.remove('transiton2')   ; 	
    }
	}
}
















//b.onmouseover=function(){
//	img.classList.add('current')
//	a.style.top=0+'px'
//	mask.classList.add('current')
//	h.classList.add('current')
//	for (var i=0;i<g.length;i++) {
//	g[i].classList.add('transiton')
// setTimeout(function(){
// 	g[0].classList.add('transiton2')
// 	g[1].classList.add('transiton2')
// },500)
//}}
//b.onmouseout=function(){
//	img.classList.remove('current')
//	a.style.top=-270+'px'
//	mask.classList.remove('current')
//	h.classList.remove('current')
//	for (var i=0;i<g.length;i++) {
//	g[i].classList.remove('transiton2')
//	g[i].classList.remove('transiton')
//}
//}
