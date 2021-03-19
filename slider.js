	// button get all 
	var p = document.querySelectorAll('.button-slider');
	p[0].addEventListener("click", toRight,  true);
	p[1].addEventListener("click", toLeft,  true);
	//mainblick
	var mainBlockSlider = document.querySelectorAll('div.slider');
	//subblocks in mainblock
	var widthblocks = document.querySelectorAll('div.slide');
	//width subblock
	var widthBlock = mainBlockSlider[0].offsetWidth;
	//quantity subblock
	var quantityBlocks = (widthblocks.length) - 1;
	var endSlider = (quantityBlocks * widthBlock) * -1;
	var bttn = 0;
	var position = 0;
	var secondposition;
	secondposition = position + 1;


	function toRight() {
		 	if(bttn == 0){
 				mainBlockSlider[position].style.webkitTransform = "translateX(" + endSlider + "px)";
 				bttn = quantityBlocks;
 			}
 			else{
 				// alert(bttn)
	 			var treking = ((bttn) - 1) * (widthBlock) * -1;
	 			mainBlockSlider[position].style.webkitTransform = "translateX(" + treking + "px)";
	 			bttn--;
	 		}
 			

	}
	function toLeft() { 
			var treking = ((bttn + 1) *  widthBlock) * -1;
			mainBlockSlider[position].style.webkitTransform = "translateX(" + treking + "px)";
			if(bttn == quantityBlocks){
				mainBlockSlider[position].style.webkitTransform = "translateX(" +  0  + "px)";
				bttn = -1 ;
			}
		    bttn++;

	}
 
 
