$(document).ready(function(){
	$(".seen").on('click', function(){
		console.log($(this));
		var label = $(this).closest(".courses-block");
		label.addClass('succeeded');
		setTimeout(function(){
			label.fadeOut({
				complete: display_completed
			});
		}, 1000);
		var display_completed = function() {
			var display_block = $(".courses-block:not(.succeeded)").size();
			if (display_block === 0) {
				$(".about-title").css('display', 'none');
				$('.about-subheading').css('display', 'none');
				$(".completed-wrapper").fadeIn();
			}
		}
	})
});