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
	$("div#jim").hover(function() {
		$("div#jim-text").toggle();
	})
	$("div#bailey").hover(function() {
		$("div#bailey-text").toggle();
	});
	$("div#burned").hover(function(){
		$("div#burned-text").toggle();
	});
	$("div#age").hover(function(){
		$("div#age-text").toggle();
	});
	$("div#elexa").hover(function(){
		$("div#elexa-text").toggle();
	});
	$("div#crystals").hover(function(){
		$("div#crystals-text").toggle();
	});
	$("div#ontario").hover(function(){
		$("div#ontario-text").toggle();
	});
	$("div#dark").hover(function(){
		$("div#dark-text").toggle();
	});
	$("form#contactForm").submit(function(event){
		event.preventDefault();
		// let name = $("#name").val();
		let name = document.getElementById("name").value;
		console.log(name);
		alert(name + " we have received your message. Thank you for reaching out to us.");
	});
});