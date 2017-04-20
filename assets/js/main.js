console.log("Hello World from main.js!");

$(function () {
	$(".bull").hide();
	$(".girl").hide();
	$(".bullvsgirl").hide().fadeIn("slow");

	$("#bull-button").on('click toggle', function () {
		$(this).empty().html("Back");
		$(".bullvsgirl, h1, .girl").hide();
		$(".bull").show();
	});

	$("#girl-button").on('click', function () {
		$(this).empty().html("Back");
		$(".bullvsgirl, h1, .bull").hide();
		$(".girl").show();
	});
});