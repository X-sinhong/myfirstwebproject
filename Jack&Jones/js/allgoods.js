window.onload = function(){
			 
			var obox = document.getElementById('goods_box')
			var  ocounts = document.getElementById('counts')
			var str = ''
			for(var i = 0;i<goodsinf.length;i++){
				 str = `<div class="goods">
							<img src="${goodsinf[i].src}" class="gPic"/>
							<h4 class="gName">${goodsinf[i].name}</h4>
							<p class="gInf">${goodsinf[i].inf}</p>
							<div class="bottom">
								<span class="price">${goodsinf[i].price}</span>
								<div class="buy">立即购买</div>
							</div>			
						</div>`
				obox.innerHTML += str
				ocounts.innerHTML = goodsinf.length
			}			
			obox.onclick=function(){  
   				 window.location.href="goodsdetel.html";            
 			}
}