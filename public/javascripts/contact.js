ContactView = Backbone.View.extend({
	initialize: function(){
		this.$el.find(".SendFail").hide();
		this.$el.find(".SendSuccess").hide();
		$(".ContactUsMessage .ContactCloseButton").click(function(){
			$(".MessageBoxContainer").fadeOut();
		});
		
		// this.$el.find("input").placeholder();
	},
	events:{
		"click .SubmitButton":"sendContactEmail"
	},
	sendContactEmail: function(){
		var context = this;
		var data = {
			description: this.$el.find(".Content").val(),
			company: this.$el.find(".Company").val(),
			name: this.$el.find(".Name").val(),
			email: this.$el.find(".Email").val(),
			phone: this.$el.find(".Phone").val(),
		}
		$.post("/send_contact_email", data, function(response){
			// console.log("Success");
			context.$el.find(".SendSuccess").fadeIn();
			$(".ContactUsMessage").hide();
			$(".ContactUsCompleted").show();
			$(".MessageBoxContainer").fadeIn();
		}, "json").done(function(data){
			// console.log("Success");
			// console.log(data);
			context.$el.find(".SendSuccess").fadeIn();
			$(".ContactUsMessage").hide();
			$(".ContactUsCompleted").show();
			$(".MessageBoxContainer").fadeIn();
		}).fail(function(data){
			// console.log("Fail");
			// console.log(data);
			context.$el.find(".SendFail").fadeIn();
			$(".ContactUsMessage").show();
			$(".ContactUsCompleted").hide();
			$(".MessageBoxContainer").fadeIn();
		});
	}
});

$(document).ready(function(){
	window.contactView = new ContactView({ el: ".ContactUs" });
	setTimeout(function(){
		$(".Cooperation input,.Cooperation textarea").placeholder().focus(function(){
			$(this).val("");
		});
	}, 2000);
});