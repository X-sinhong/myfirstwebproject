		window.onload = function  () { 
		var opicbtn = document.getElementsByClassName('picBtn');
			var obigpic= document.getElementsByClassName('bigPic');
			var obtndt = document.getElementsByClassName('btndt');
        	var oinfdd = document.getElementsByClassName('infdd');
//			var oBefore = document.getElementById('before');
//			var oNext = document.getElementById('next');
			slider () 
			function slider () {
				inter();
				var inow = 0;
				var timer;
				for (var i = 0;i<opicbtn.length;i++) {
					bind(i);
				}
				function bind (index) {
					
					opicbtn[index].onclick =function  () {
						clearInterval(timer); 
						inow = index;
						changepic(index);
						inter();
					}
				}
				function changepic(index) {
					
					for (var j = 0;j<obigpic.length;j++){
						obigpic[j].style.opacity = 0 ;
						if (j==index){
							obigpic[index].style.opacity = 1 ;
//						opicbtn[index].style.backgroundColor = 'cornflowerblue'	
						}else{
//							opicbtn[index].style.backgroundColor = 'gray'
						}
					}
				}
				function inter() {
					 timer = setInterval(function(){
						inow++;
						if (inow>2) {
							inow = 0;
						}
						changepic(inow);
					},2000)
				}
			}
			//
			for (var i = 0;i<obtndt.length;i++) {
				bind(i);
			}
			function bind (index) {
				obtndt[index].onclick =function  () {
					if (oinfdd[index].style.display =='block'  ){
						oinfdd[index].style.display =  'none'
					} else{
						oinfdd[index].style.display ='block'
					}
					
				}
			}
			var ocategorys= document.getElementsByClassName('categorys')
			var ocategory= document.getElementById('category')
			var inow = 0
				setInterval(function  () {
					inow++
					if (inow>ocategorys.length-1) {
						inow = 0
						ocategory.style.transition = ''
					}
					else{
						ocategory.style.transition = 'left 1s'
					}
					changepic ()
				},5000)
				function  changepic (){
					var nowleft = -inow*1200+'px'
					ocategory.style.left = nowleft
					
				}
			var oboxs= document.getElementsByClassName('boxs')
			var oboxa= document.getElementById('boxa')
			var inowl = 0;
				setInterval(function  () {
					inowl++;
					if (inowl>oboxs.length-1) {
						inowl = 0;
						oboxa.style.transition ='';
					}
					else{
						oboxa.style.transition ='left 1s';
					}
					changepicl ()
				},3000)
				function  changepicl (){
					var nowleftl = -inowl*1200+'px'
					oboxa.style.left = nowleftl
					
		}
				}	