TopMenuView = Backbone.View.extend({
	searchBoxTimeout: null,
	selectionBarTimeout: null,
	initialize: function(){
		this.$el.find(".SearchBox").hide();
		var context = this;
		setTimeout(function(){
			context.resetSelectionBarStatus();
		}, 1000);
	},
	events:{
		"mouseover .MenuItem":"mouseoverTopMenuItem",
		"mouseout .MenuItem":"mouseoutTopMenuItem",
		"mouseover .SearchArea, .SearchBox input":"showSearchBox",
		"mouseover .SearchBox input":"keepShowSearchBox",
		"mouseout .SearchBox input":"hideSearchBox"
	},
	mouseoverTopMenuItem: function(event){
		if(this.selectionBarTimeout != null){
			clearTimeout(this.selectionBarTimeout);
		}
		this.setSelectionBarStatus($(event.target));
	},
	mouseoutTopMenuItem: function(event){
		var context = this;
		this.selectionBarTimeout = setTimeout(function(){
			context.resetSelectionBarStatus();
		}, 300);
	},
	showSearchBox: function(){
		this.$el.find(".SearchBox").show();
		this.$el.find(".SearchBox input").focus();
	},
	keepShowSearchBox: function(){
		if(this.searchBoxTimeout != null){
			clearTimeout(this.searchBoxTimeout);
		}
	},
	hideSearchBox: function(){
		var context = this;
		this.searchBoxTimeout = setTimeout(function(){
			context.$el.find(".SearchBox").hide();
			context.$el.find(".SearchBox input").attr("value", "");
		}, 1000);
	},
	setSelectionBarStatus: function(menuItem){
		if(menuItem == null){
			this.$el.find(".SelectionBar").fadeOut();
		}
		else{
			this.$el.find(".SelectionBar").clearQueue().animate({
				left: (menuItem.position().left - 10)+ "px",
				width: (menuItem.width() + 20) + "px"
			}, 100, "swing").fadeIn();
		}
	},
	resetSelectionBarStatus: function(){
		var target = this.$el.find(".MenuItem.Selected");
		if(target.length > 0){
			this.setSelectionBarStatus(target);
		}
		else{
			this.setSelectionBarStatus(null);
		}
	}
});
$(document).ready(function(){
	window.topMenuView = new TopMenuView({ el: $(".MainContainer .TopMenu")});
});