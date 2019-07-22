$(function(){
	$("div#design").click(function() {
		// $("design-text").show();
		$("#design-image").toggle();
		$("#design-text").toggle();
	});
	$("div#dev").click(function(){
		$("#dev-image").toggle();
		$("#dev-text").toggle();
	});
	$("div#product").click(function(){
		$("#product-image").toggle();
		$("#product-text").toggle();
	});
});