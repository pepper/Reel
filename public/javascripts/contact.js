ContactView = Backbone.View.extend({
	initialize: function(){
		this.$el.find(".SendFail").hide();
		this.$el.find(".SendSuccess").hide();
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
			console.log("Success");
			context.$el.find(".SendSuccess").fadeIn();
		}, "json").done(function(data){
			console.log("Success");
			console.log(data);
			context.$el.find(".SendSuccess").fadeIn();
		}).fail(function(data){
			console.log("Fail");
			console.log(data);
			context.$el.find(".SendFail").fadeIn();
		});
	}
});

$(document).ready(function(){
	window.contactView = new ContactView({ el: ".ContactUs" });
});