$(document).ready(function() {

	function addListItem() {
		var item = $(".input-item").val().trim();
 		 if (item != "") {
 		 	$(".alert").hide();
 		 	$(".items-needed").find("ul").append("<li><span class=\"check\"><i class=\"fa fa-check-square\"></i></span><span class=\"trash\"><i class=\"fa fa-trash\"></i></span><span class=\"item-text\">" + item + "</span></li>");
 		 	$(".input-item").val("");
 		 } else {
 		 	// nothing was entered, give a friendly reminder
 		 	$(".alert").show();
 		 }
	}

	$(".add-item").click(function() {
		// click the button to add an item to the first list
		addListItem();
 	});
 	// make the input box accept an enter key
 	$('.input-item').keyup(function(event) {
 		if (event.keyCode == 13) {
 			addListItem();
 		}
 	});

 	// click an item's checkbox on the first list to move to the second list
 	//$(".check").click(function() {
 	$('.items-needed').on('click', '.check', function() {
 		var item = $(this).siblings('.item-text').text();
 		$(".items-got").find("ul").append("<li><span class=\"undo-got\"><i class=\"fa fa-arrow-circle-up\"></i></span><span class=\"trash\"><i class=\"fa fa-trash\"></i></span><span class=\"item-text\">" + item + "</span></li>");
 		$(this).parent().remove();
 		console.log("moved " + item + " to second list");
 	});

 	// click an item's up arrow on the second list to move to the first list
	//$(".undo-got").click(function() {
	$('.items-got').on('click', '.undo-got', function() {
		var item = $(this).siblings('.item-text').text();
		$(".items-needed").find("ul").append("<li><span class=\"check\"><i class=\"fa fa-check-square\"></i></span><span class=\"trash\"><i class=\"fa fa-trash\"></i></span><span class=\"item-text\">" + item + "</span></li>");
		$(this).parent().remove();
		console.log("moved " + item + " to first list");
	});

	// click an item's trash icon to remove it
 	$('ul').on('click', '.trash', function() {
 	 	$(this).parent().remove();
 	 });
});