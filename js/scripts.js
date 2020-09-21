$(document).ready( function() {
	//-----------------------------------------------------------------------------------
	/* ======================== */
	/* ======= Subpages ======= */
	/* ======================== */		
	
	// Pictures on the sub-pages
	$('.row-content img').on('click', function() {
		var source = $(this).attr('src');
		
		$('#img-large img').attr('src', source);
		$('#img-large').addClass('visible');
		$('#img-large').removeClass('hidden');
		
		$('#img-large').fadeIn(300);
		
		$('#img-large .exit').on('click', function() {
			$('#img-large').removeClass('visible');
			$('#img-large').addClass('hidden');
			
			$('#img-large').fadeOut(300);
		});
		
		if( $('.visible').css("display") === "block" ) {
			$(document).on('keyup', function() {
				if(event.key == "Escape") {
					$('#img-large').removeClass('visible');
					$('#img-large').addClass('hidden');
					
					$('#img-large').fadeOut(300);
				}
			});
			$(document).on('mouseup', function() {
				$('#img-large').removeClass('visible');
				$('#img-large').addClass('hidden');
				
				$('#img-large').fadeOut(300);
			});
		} else {return;}
	});	
	
	$('.to-top-button-wrapper a').on('click', function() {
		window.scrollTo(0,0);	
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 800) {
			$('.to-top-button-wrapper').fadeIn(0);
		} else {
			$('.to-top-button-wrapper').fadeOut(0);
		}
	});
})