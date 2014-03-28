VisitView = Backbone.View.extend({
	initialize: function(){
		this.$el.find(".SubMenu").hide();
		this.$el.find(".SubMenu.Selected").slideDown();
	},
	events:{
		"click .FloorGuideSubMenu img":"changeTopic"
	},
	changeTopic: function(event){
		var topic = $(event.target).closest("div").attr("topic");
		window.visitFloorView.changeFloor(topic);
		this.$el.find(".FloorGuideSubMenu img").removeClass("Selected").each(function(){
			$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"))
		});
		$(event.target).addClass("Selected").attr("src", $(event.target).attr("src").replace("_L.png", "_D.png"));
	}
});

$(document).ready(function(){
	window.visitView = new VisitView({ el: ".VisitSelector" });
});