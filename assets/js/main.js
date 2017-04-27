console.log("Hello World from main.js!");

$(function () {
	$(".bull, .girl, #back-button").hide();
	// $(".bullvsgirl").hide().fadeIn("slow");

	$("#bull-button").on('click', function () {
		$(".main, .girl, #bull-button").hide();
		$(".bull, #back-button").show();
	});

	$("#girl-button").on('click', function () {
		$(".main, .bull").hide();
		$(".girl").show();
	});

	$("#back-button").on("click", function () {
		$(".girl, .bull").hide();
		$(".main, #bull-button").show();
	});
});
