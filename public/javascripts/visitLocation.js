VisitLocationView = Backbone.View.extend({
	initialize: function(){
		this.$el.find(".MainMap").mapbox({mousewheel: true});
	},
	events:{
		"mouseover .Sing":"mouseoverSing",
		"mouseout .Sing":"mouseoutSing",
		"click .ZoomIn": "mainMapZoomIn",
		"click .ZoomOut": "mainMapZoomOut"
	},
	mainMapZoomIn: function(){
		this.$el.find(".MainMap").mapbox("zoom");
	},
	mainMapZoomOut: function(){
		this.$el.find(".MainMap").mapbox("back");
	},
	mouseoverSing: function(event){
		var language = this.$el.find(".MainMap").attr("language");
		this.$el.find(".MainMap .Level1").css({"background": "url(/images/Visit/Location/Loaction_Map_Zoom01_" + language + "_" + $(event.target).attr("value") + ".jpg) no-repeat"});
		this.$el.find(".MainMap .Level2").attr("src", "/images/Visit/Location/Loaction_Map_Zoom02_" + language + "_" + $(event.target).attr("value") + ".jpg");
		this.$el.find(".MainMap .Level3").attr("src", "/images/Visit/Location/Loaction_Map_Zoom03_" + language + "_" + $(event.target).attr("value") + ".jpg");
		this.$el.find(".MainMap .Level4").attr("src", "/images/Visit/Location/Loaction_Map_Zoom04_" + language + "_" + $(event.target).attr("value") + ".jpg");
		this.$el.find(".MainMap .Level5").attr("src", "/images/Visit/Location/Loaction_Map_Zoom05_" + language + "_" + $(event.target).attr("value") + ".jpg");
	},
	mouseoutSing: function(event){
		var language = this.$el.find(".MainMap").attr("language");
		this.$el.find(".MainMap .Level1").css({"background": "url(/images/Visit/Location/Loaction_Map_Zoom01_" + language + ".jpg) no-repeat"});
		this.$el.find(".MainMap .Level2").attr("src", "/images/Visit/Location/Loaction_Map_Zoom02_" + language + ".jpg");
		this.$el.find(".MainMap .Level3").attr("src", "/images/Visit/Location/Loaction_Map_Zoom03_" + language + ".jpg");
		this.$el.find(".MainMap .Level4").attr("src", "/images/Visit/Location/Loaction_Map_Zoom04_" + language + ".jpg");
		this.$el.find(".MainMap .Level5").attr("src", "/images/Visit/Location/Loaction_Map_Zoom05_" + language + ".jpg");
	}
});

$(document).ready(function(){
	window.visitLocationView = new VisitLocationView({ el: $(".MainContent .Location") });
});