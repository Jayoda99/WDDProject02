$(document) .ready(function function_name() {
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	});

	//Navigation clisk function

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass(active)
		$('.menu-btn i').toggleClass(active)
	}); 
});
