// check off specific to-dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete to-do
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(100);
})