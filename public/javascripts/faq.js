FAQRightPanelView = Backbone.View.extend({
	initialize: function(){

	},
	render: function(){
		var template = _.template( $("#FAQ_RightPanel_Template").html(), {});
		this.$el.html( template );
		this.$el.find(".FAQSelector").hide();
		this.$el.find(".FAQSelector").slideDown();
	},
	events:{
		"click img":"changeFAQSet"
	},
	changeFAQSet: function(event){
		this.$el.find("img").removeClass("Selected").each(function(){
			$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"))
		});
		$(event.target).addClass("Selected").attr("src", $(event.target).attr("src").replace("_L.png", "_D.png"));
		window.faqView.changeFAQSet($(event.target).attr("faqSet"));
	}
});

FAQView = Backbone.View.extend({
	initialize: function(){
		this.$el.find(".Answer").hide();
		this.changeFAQSet("Card");
	},
	events:{
		"click .Question":"toggleAnswer",
	},
	toggleAnswer: function(event){
		if($(event.target).next(".Answer").is(':hidden')){
			this.$el.find(".Answer").slideUp();
			$(event.target).next(".Answer").slideToggle(function(){
				$(window).trigger("resize");
			});
		}
		else{
			$(event.target).next(".Answer").slideToggle(function(){
				$(window).trigger("resize");
			});
		}
	},
	changeFAQSet: function(faqSet){
		this.$el.find(".FAQSet").hide();
		this.$el.find(".FAQSet." + faqSet).show();
		$(window).trigger("resize");
	}
});

$(document).ready(function(){
	window.faqRightPanelView = new FAQRightPanelView({ el: $(".FAQSelector") });
	window.faqView = new FAQView({ el: $(".MainContent .FAQ") });
});