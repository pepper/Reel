IndexView = Backbone.View.extend({
	currentImageItemQuantity:0,
	initialize: function(){
		this.render();
	},
	render: function(){
		var context = this;
		this.$el.find(".ImageItem").each(function(currentImageItemQuantity){
			var position = {
				x:currentImageItemQuantity % 3,
				y:Math.floor(currentImageItemQuantity / 3)
			};
			$(this).css({
				"left":((position.x) * 338) + "px",
				"top":(525 + ((position.y) * 458)) + "px"
			});
			currentImageItemQuantity++;
			context.resetIndexHeight(position.y + 1);
		});
	},
	resetIndexHeight: function(newsLineQuantity){
		this.$el.find(".MainImage").css("position", "absolute");
		this.$el.find(".ImageItem").css("position", "absolute");
		this.$el.css({
			"position":"relative",
			"height":(570 + (newsLineQuantity * 458)) + "px"
		});
	}
});

$(document).ready(function(){
	indexView = new IndexView({ el: $(".Index") });
});