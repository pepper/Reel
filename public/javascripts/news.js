$(document).ready(function(){
	$(".RemoveImage").click(function(event){
		bootbox.confirm("Are you sure want to remove image?", function(result){
			if(result){
				$.ajax({
					url: "/news/" + $(event.target).data("news-key") + "/image/" + $(event.target).data("image-key"),
					type: "DELETE",
					success: function(result) {
						location.reload();
					}
				});
			}
		});
	});
	$(".RemoveNews").click(function(event){
		bootbox.confirm("Are you sure want to remove news?", function(result){
			if(result){
				$.ajax({
					url: "/news/" + $(event.target).data("news-key"),
					type: "DELETE",
					success: function(result) {
						window.location = "/";
					}
				});
			}
		});
	});
});