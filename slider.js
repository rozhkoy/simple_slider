
	var p = document.querySelectorAll('.button-slider');
	p[0].addEventListener("click", toLeft,  true);
	p[1].addEventListener("click", toRight,  true);
	var width = document.querySelectorAll('div.slider');
	var widthblocks = document.querySelectorAll('div.slide');
	// widthblocks[0].style.width = " 100%";
	var widthBlock = width[0].offsetWidth;
	quantityBlocks = (widthblocks.length) - 1;
	var startSlider = (widthBlock * quantityBlocks) * -1 ;
	var endSlider = (widthBlock * quantityBlocks) * -1 ;
	var BttnLeft = 0;
	
	var position = 0;
	var secondposition;
	secondposition = 1;
	secondposition = position + 1;
	earlyposition =  position - 1;
	width[position].style.webkitTransform = "translateX(" + startSlider + "px)";
	// width[position].style.webkitTransform = "translateX(" + widthBlock + "px)";
	function toLeft() {
			width[position].style.transition = "all .3s";
		 	BttnLeft++;
 			var treking = (BttnLeft *  widthBlock) + startSlider;
 			width[position].style.webkitTransform = "translateX(" + treking + "px)";
 			if(BttnLeft >= widthblocks.length){
 				width[position].style.webkitTransform = "translateX(" + startSlider + "px)";
 				BttnLeft = 0;
 			}

	}
	function toRight() {
		 	BttnLeft--;
 			var treking = (BttnLeft *  widthBlock) + startSlider;
 			width[position].style.webkitTransform = "translateX(" + treking + "px)";
 			if(BttnLeft <= -1){
 				width[position].style.webkitTransform = "translateX(" +  0  + "px)";
 				BttnLeft = widthblocks.length ;
 			}

	}
 
 
