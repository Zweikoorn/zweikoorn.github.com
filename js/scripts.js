window.onload = function() {

	$('ul.nav li a').click( function(event) {
		$('ul.nav a.active').removeClass('active');
		$(event.target).addClass('active');
		$('div.main').fadeOut(function(){
			$('div.main').load(event.target.href+" div.main > *", function(){
				$('div.main').fadeIn();
			});
		});
		event.preventDefault();
	});

}