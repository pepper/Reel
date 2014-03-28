var maxMainContainerSize = {
	width:	1520,
	//width:	1300,
	height:	855
	//height:	600
}
var minMainContainerSize = {
	width:	1020
}
var footerSize = {
	height:	57
}
//Set no border
var photoFrameModeTriggerSize = {
	width:				1440,
	//width:	1100,
	//height:	maxMainContainerSize.height + footerSize.height,
	height:	500,
	photoFrameWidth:	50
	//photoFrameWidth:	20
}
var systemScrollBarModeTriggerSize = {
	width:	minMainContainerSize.width
}
var maxSizeModeTriggerSize = {
	width:	maxMainContainerSize.width + (photoFrameModeTriggerSize.photoFrameWidth * 2),
	height:	maxMainContainerSize.height + photoFrameModeTriggerSize.photoFrameWidth + footerSize.height
}

$(window).resize(function() {
	var newMainContainer = {
		width:		0,
		height:		0,
		top:		0,
		left:		0,
		borderWidth:0
	}
	var notInFrameMode = false;
	if($(window).width() > maxSizeModeTriggerSize.width){
		newMainContainer.width = maxMainContainerSize.width;
		newMainContainer.left = Math.floor(($(window).width() - maxMainContainerSize.width) / 2);
		newMainContainer.borderWidth = 1;
	}
	else if($(window).width() > photoFrameModeTriggerSize.width){
		newMainContainer.width = $(window).width() - (photoFrameModeTriggerSize.photoFrameWidth * 2);
		newMainContainer.left = photoFrameModeTriggerSize.photoFrameWidth;
		newMainContainer.borderWidth = 1;
	}
	else if($(window).width() > systemScrollBarModeTriggerSize.width){
		notInFrameMode = true;
		newMainContainer.width = $(window).width();
		newMainContainer.left = 0;
		newMainContainer.borderWidth = 0;
	}
	else{
		notInFrameMode = true;
		newMainContainer.width = minMainContainerSize.width;
		newMainContainer.left = 0;
		newMainContainer.borderWidth = 0;
	}
	if(notInFrameMode == true){
		newMainContainer.height = $(window).height() - (newMainContainer.borderWidth * 2) - footerSize.height;
		newMainContainer.top = 0;
	}
	else if($(window).height() > (maxSizeModeTriggerSize.height + (newMainContainer.borderWidth * 2))){
		newMainContainer.height = maxMainContainerSize.height;
		newMainContainer.top = photoFrameModeTriggerSize.photoFrameWidth;
	}
	else if($(window).height() > (photoFrameModeTriggerSize.height + (newMainContainer.borderWidth * 2))){
		//newMainContainer.height = maxMainContainerSize.height;
		//newMainContainer.top = $(window).height() - (photoFrameModeTriggerSize.height + (newMainContainer.borderWidth * 2));
		newMainContainer.height = $(window).height() - (photoFrameModeTriggerSize.photoFrameWidth + (newMainContainer.borderWidth * 2) + footerSize.height);
		newMainContainer.top = photoFrameModeTriggerSize.photoFrameWidth;
	}
	else{
		newMainContainer.height = $(window).height() - (newMainContainer.borderWidth * 2) - footerSize.height;
		newMainContainer.top = 0;
	}
	$(".MainContainer").css({
		"width":		newMainContainer.width + "px",
		"left":			newMainContainer.left + "px",
		"height":		newMainContainer.height + "px",
		"top":			newMainContainer.top + "px",
		"border-width":	newMainContainer.borderWidth + "px"
	});
	$(".Footer").css({
		"width":		newMainContainer.width + "px",
		"left":			newMainContainer.left + "px",
		"height":		footerSize.height + "px",
		"top":			(newMainContainer.top + newMainContainer.height + (newMainContainer.borderWidth * 2)) + "px",
	});
	if($(".MainContent").height() <= $(".MainContentContainer").height()){
		$(".ScrollBar").hide();
	}
	else{
		var maxContentOffset = $(".MainContent").height() - $(".MainContentContainer").height();
		var maxContentOffsetRatio = maxContentOffset / $(".MainContent").height();
		var maxScrollBarOffset = (1 - maxContentOffsetRatio) * $(".ScrollBarContainer").height();
		$(".ScrollBar").css("height", maxScrollBarOffset + "px");
		$(".ScrollBar").show();
	}
	$(".MainContent").css({
		"top": "0px"
	});
	$(".ScrollBar").css({
		"top": "0px"
	});
});

MainContainerView = Backbone.View.extend({
	initialize: function(){
		this.render();
		var parameter = {
			rightPanel: this.$el.find(".RightPanel"),
			leftPanel: this.$el.find(".LeftPanel")
		};
	},
	render: function(){
		var mainContentContainer = this.$el.find(".MainContentContainer");
		var mainContent = this.$el.find(".MainContent");
		var scrollBarContainer = this.$el.find(".ScrollBarContainer");
		var scrollBar = this.$el.find(".ScrollBar");
		var context = this;
		
		scrollBar.draggable({
			axis: "y",
			containment: "parent",
			scroll: false,
			drag: function(event, ui) {
				context.changePosition();
			}
		});
		this.$el.find(".MainContentContainer").mousewheel(function(event, delta, deltaX, deltaY) {
			var maxOffset = scrollBarContainer.height() - scrollBar.height();
			newOffset = scrollBar.position().top - delta * 10;
			if(newOffset < 0){
				newOffset = 0;
			}
			else if(newOffset > maxOffset){
				newOffset = maxOffset;
			}
			scrollBar.css({"top":newOffset + "px"});
			context.changePosition();
			return false;
		});
	},
	changePosition: function(){
		var mainContentContainer = this.$el.find(".MainContentContainer");
		var mainContent = this.$el.find(".MainContent");
		var scrollBarContainer = this.$el.find(".ScrollBarContainer");
		var scrollBar = this.$el.find(".ScrollBar");
		var maxOffset = scrollBarContainer.height() - scrollBar.height();
		var currentOffset = scrollBar.position().top;
		var contentMaxOffset = mainContent.height() - mainContentContainer.height();
		if(contentMaxOffset < 0){
			contentMaxOffset = 0;
		}
		mainContent.css({"top":(contentMaxOffset * (currentOffset / maxOffset) * (-1)) + "px"});
	}
});

$(document).ready(function(){
	window.mainContainerView = new MainContainerView({ el: $(".MainContainer")});
	$(window).trigger("resize");
});