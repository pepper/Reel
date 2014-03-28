$(document).ready(function(){
	$(document).on("mouseover", ".HoverLink.ChangeColor", function(e){
		$(this).css({
			color: $(this).attr("overColor")
		})
	}).on("mouseout", ".HoverLink.ChangeColor", function(e){
		if(!$(this).hasClass("Selected")){
			$(this).css({
				color: $(this).attr("outColor")
			})
		}
	}).on("mouseover", ".HoverLink.ChangeImage", function(e){
		$(this).attr("src", $(this).attr("src").replace("L.jpg", "D.jpg"));
		$(this).attr("src", $(this).attr("src").replace("L.png", "D.png"));
	}).on("mouseout", ".HoverLink.ChangeImage", function(e){
		if(!$(this).hasClass("Selected")){
			$(this).attr("src", $(this).attr("src").replace("D.jpg", "L.jpg"));
			$(this).attr("src", $(this).attr("src").replace("D.png", "L.png"));
		}
	});
	$(".HoverLink.Selected").each(function(){
		if($(this).hasClass("ChangeImage")){
			$(this).attr("src", $(this).attr("src").replace("L.jpg", "D.jpg"));
			$(this).attr("src", $(this).attr("src").replace("L.png", "D.png"));
		}
		else if($(this).hasClass("ChangeColor")){
			$(this).css({
				color: $(this).attr("overColor")
			})
		}
	});
});