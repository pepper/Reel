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
		"click .AddQuestion": "addQuestion",
		"click .RemoveQuestion": "removeQuestion"
	},
	toggleAnswer: function(event){
		if($(event.target).next(".Answer").is(':hidden')){
			var question = $(event.target);
			this.$el.find(".Answer").slideUp();
			$(event.target).next(".Answer").slideToggle(function(){
				setTimeout(function(){
					console.log(question);
					$(".MainContent").animate({"top": (-1 * question.position().top) + "px"});
				}, 700);
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
	},
	addQuestion: function(event){
		var title = $(event.target).data("title");
		bootbox.prompt("Enter the question", function(question){
			if(question && question != ""){
				bootbox.prompt("Enter the answer", function(answer){
					if(answer && answer != ""){
						$.ajax({
							url: "/faq/" + title,
							type: "POST",
							data:{
								Question: question,
								Answer: answer
							},
							success: function(result) {
								window.location = "/faq";
							}
						});
					}
				});
			}
		});
	},
	removeQuestion: function(event){
		var title = $(event.target).data("title");
		var index = $(event.target).data("index");
		bootbox.confirm("Are you sure want to remove question?", function(result){
			if(result){
				$.ajax({
					url: "/faq/" + title + "/question/" + index,
					type: "DELETE",
					success: function(result) {
						window.location = "/faq";
					}
				});
			}
		});
	}
});

$(document).ready(function(){
	window.faqRightPanelView = new FAQRightPanelView({ el: $(".FAQSelector") });
	window.faqView = new FAQView({ el: $(".MainContent .FAQ") });
});