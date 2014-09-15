VisitFloorDescriptionView = Backbone.View.extend({
	// map: null,
	currentFloor:"",
	initialize: function(){
		this.$el.find(".Detail").hide();
	},
	events:{
		"click .AreaSelector img": "selectAreaOnListImage",
		"click .AreaSelector.ChangeColor": "selectAreaOnListText",
		"mousemove .FloorGuideB2AreaList":"moveB2Panel",
		"mouseout .FloorGuideB2AreaList":"stopB2Panel",
		"mousemove .FloorGuideB1AreaList":"moveB1Panel",
		"mouseout .FloorGuideB1AreaList":"stopB1Panel",
		"mousemove .FloorGuide1FAreaList":"move1FPanel",
		"mouseout .FloorGuide1FAreaList":"stop1FPanel",
		"mousemove .FloorGuide2FAreaList":"move2FPanel",
		"mouseout .FloorGuide2FAreaList":"stop2FPanel",
		"mousemove .FloorGuide3FAreaList":"move3FPanel",
		"mouseout .FloorGuide3FAreaList":"stop3FPanel",
		// "mousemove .FloorGuide4FAreaList":"move4FPanel",
		// "mouseout .FloorGuide4FAreaList":"stop4FPanel",
		"click .AreaListScrollButton .ScrollUp":"scrollUp",
		"click .AreaListScrollButton .ScrollDown":"scrollDown",
		"click .AddSection": "addSection",
		"click .RemoveSection": "removeSection"
	},
	moveB2Panel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuideB2AreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.currentB2PanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.currentB2PanelRun = "-=20px";
		}
		else{
			context.currentB2PanelRun = "+=0px";
		}
		var ScrollB2Panel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.currentB2PanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.currentB2PanelRun = "0px";
					ScrollB2Panel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.currentB2PanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					ScrollB2Panel();
				}
				else{
					ScrollB2Panel();
				}
			});
		}
		if(!context.alreadyRunB2Panel){
			context.alreadyRunB2Panel = true;
			ScrollB2Panel();
		}
	},
	stopB2Panel: function(){
		var context = this;
		context.currentB2PanelRun = "+=0px";
	},
	moveB1Panel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuideB1AreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.currentB1PanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.currentB1PanelRun = "-=20px";
		}
		else{
			context.currentB1PanelRun = "+=0px";
		}
		var ScrollB1Panel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.currentB1PanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.currentB1PanelRun = "0px";
					ScrollB1Panel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.currentB1PanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					ScrollB1Panel();
				}
				else{
					ScrollB1Panel();
				}
			});
		}
		if(!context.alreadyRunB1Panel){
			context.alreadyRunB1Panel = true;
			ScrollB1Panel();
		}
	},
	stopB1Panel: function(){
		var context = this;
		context.currentB1PanelRun = "+=0px";
	},
	move1FPanel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuide1FAreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.current1FPanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.current1FPanelRun = "-=20px";
		}
		else{
			context.current1FPanelRun = "+=0px";
		}
		var Scroll1FPanel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.current1FPanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.current1FPanelRun = "0px";
					Scroll1FPanel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.current1FPanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					Scroll1FPanel();
				}
				else{
					Scroll1FPanel();
				}
			});
		}
		if(!context.alreadyRun1FPanel){
			context.alreadyRun1FPanel = true;
			Scroll1FPanel();
		}
	},
	stop1FPanel: function(){
		var context = this;
		context.current1FPanelRun = "+=0px";
	},
	move2FPanel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuide2FAreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.current2FPanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.current2FPanelRun = "-=20px";
		}
		else{
			context.current2FPanelRun = "+=0px";
		}
		var Scroll2FPanel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.current2FPanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.current2FPanelRun = "0px";
					Scroll2FPanel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.current2FPanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					Scroll2FPanel();
				}
				else{
					Scroll2FPanel();
				}
			});
		}
		if(!context.alreadyRun2FPanel){
			context.alreadyRun2FPanel = true;
			Scroll2FPanel();
		}
	},
	stop2FPanel: function(){
		var context = this;
		context.current2FPanelRun = "+=0px";
	},
	move3FPanel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuide3FAreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.current3FPanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.current3FPanelRun = "-=20px";
		}
		else{
			context.current3FPanelRun = "+=0px";
		}
		var Scroll3FPanel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.current3FPanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.current3FPanelRun = "0px";
					Scroll3FPanel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.current3FPanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					Scroll3FPanel();
				}
				else{
					Scroll3FPanel();
				}
			});
		}
		if(!context.alreadyRun3FPanel){
			context.alreadyRun3FPanel = true;
			Scroll3FPanel();
		}
	},
	stop3FPanel: function(){
		var context = this;
		context.current3FPanelRun = "+=0px";
	},
	move4FPanel: function(event){
		var context = this;
		var currentPanel = $(".FloorGuide4FAreaList .AreaListPanel")
		var parentHeight = $(event.target).closest(".AreaList").height();
		var parentOffset = $(event.target).closest(".AreaList").offset();
		var relativeYPosition = (event.pageY - parentOffset.top);
		if(relativeYPosition < 100 && currentPanel.position().top != 0){
			context.current4FPanelRun = "+=20px";
		}
		else if(relativeYPosition > 410 && currentPanel.position().top != (parentHeight - currentPanel.height() + 1)){
			context.current4FPanelRun = "-=20px";
		}
		else{
			context.current4FPanelRun = "+=0px";
		}
		var Scroll4FPanel = function(){
			var currentPanelHeight = currentPanel.height();
			currentPanel.animate({
				top: context.current4FPanelRun
			}, "fast", "linear", function(){
				if($(this).position().top > 0){
					context.current4FPanelRun = "0px";
					Scroll4FPanel();
				}
				else if($(this).position().top <= (parentHeight - currentPanelHeight)){
					context.current4FPanelRun = (parentHeight - currentPanelHeight + 1) + "px";
					Scroll4FPanel();
				}
				else{
					Scroll4FPanel();
				}
			});
		}
		if(!context.alreadyRun4FPanel){
			context.alreadyRun4FPanel = true;
			Scroll4FPanel();
		}
	},
	stop4FPanel: function(){
		var context = this;
		context.current4FPanelRun = "+=0px";
	},
	changeFloor: function(floor){
		this.currentFloor = floor;
		this.$el.find(".AreaList").hide();
		this.$el.find(".AreaList." + floor + "AreaList").show();
	},
	scrollUp: function(){
		var context = this;
		context.current1FPanelRun = ($(".FloorGuide1FAreaList .AreaListPanel").position().top + 100) + "px";
		context.current2FPanelRun = ($(".FloorGuide2FAreaList .AreaListPanel").position().top + 100) + "px";
		context.current3FPanelRun = ($(".FloorGuide3FAreaList .AreaListPanel").position().top + 100) + "px";
		// context.current4FPanelRun = ($(".FloorGuide4FAreaList .AreaListPanel").position().top + 100) + "px";
		context.currentB1PanelRun = ($(".FloorGuideB1AreaList .AreaListPanel").position().top + 100) + "px";
		context.currentB2PanelRun = ($(".FloorGuideB2AreaList .AreaListPanel").position().top + 100) + "px";
	},
	scrollDown: function(){
		var context = this;
		context.current1FPanelRun = ($(".FloorGuide1FAreaList .AreaListPanel").position().top - 100) + "px";
		context.current2FPanelRun = ($(".FloorGuide2FAreaList .AreaListPanel").position().top - 100) + "px";
		context.current3FPanelRun = ($(".FloorGuide3FAreaList .AreaListPanel").position().top - 100) + "px";
		// context.current4FPanelRun = ($(".FloorGuide4FAreaList .AreaListPanel").position().top - 100) + "px";
		context.currentB1PanelRun = ($(".FloorGuideB1AreaList .AreaListPanel").position().top - 100) + "px";
		context.currentB2PanelRun = ($(".FloorGuideB2AreaList .AreaListPanel").position().top - 100) + "px";
	},
	selectAreaOnListImage: function(event){
		var target = $(event.target).closest("div.AreaSelector").attr("value");
		if(target != ""){
			$(".AreaSelector img").removeClass("Selected").each(function(){
				$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"));
			});
			$(event.target).addClass("Selected").attr("src", $(event.target).attr("src").replace("_L.png", "_D.png"));
			this.selectArea(target);
			window.visitFloorView.selectArea(target);
		}
	},
	selectAreaOnListText: function(event){
		var target = $(event.target).attr("value");
		if(target != ""){
			this.$el.find(".AreaSelector").removeClass("Selected").css("color", "#606060");
			$(event.target).addClass("Selected").css("color", "#000000");
			this.selectArea(target);
			window.visitFloorView.selectArea(target);
		}
	},
	selectArea: function(target){
		this.$el.find(".Detail").hide();
		this.$el.find(".Detail[value=" + target + "]").show();
		this.$el.find(".AreaSelector img").removeClass("Selected").each(function(){
			$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"));
		});
		this.$el.find(".AreaSelector").removeClass("Selected").css("color", "#606060");
		this.$el.find(".AreaSelector[value=" + target + "]").addClass("Selected").css("color", "#000000");
		if(this.$el.find(".AreaSelector[value=" + target + "] img").length > 0){
			this.$el.find(".AreaSelector[value=" + target + "] img").addClass("Selected").attr("src", this.$el.find(".AreaSelector[value=" + target + "] img").attr("src").replace("_L.png", "_D.png"));
		}
	},
	addSection: function(event){
		var floorLevel = $(event.target).data("floor-level");
		bootbox.prompt("Enter section number", function(key){
			if(key && key != ""){
				bootbox.prompt("Enter brand name", function(title){
					if(title && title != ""){
						$.ajax({
							url: "/floor/" + floorLevel,
							type: "POST",
							data:{
								Key: key,
								Title: title
							},
							success: function(result) {
								window.location = "/Visit/Floor";
							}
						});
					}
				});
			}
		});
	},
	removeSection: function(event){
		var floorLevel = $(event.target).data("floor-level");
		var sectionKey = $(event.target).data("section-key");
		bootbox.confirm("Are you sure want to remove brand?", function(result){
			if(result){
				$.ajax({
					url: "/floor/" + floorLevel + "/section/" + sectionKey,
					type: "DELETE",
					success: function(result) {
						window.location = "/Visit/Floor";
					}
				});
			}
		});
	}
});

VisitFloorView = Backbone.View.extend({
	currentFloor: "",
	initialize: function(){
		if(this.$el.attr("default-floor") && this.$el.attr("default-floor") != ""){
			this.changeFloor("FloorGuide" + this.$el.attr("default-floor"));
		}
		else{
			this.changeFloor("FloorGuideReelPlace");
		}
	},
	events:{
		"click .FloorGuide area":"selectAreaOnMap"
	},
	changeFloor: function(floor){
		this.currentFloor = floor;
		this.$el.find(".FloorGuide").hide();
		this.$el.find(".FloorGuide." + floor).show();
		if(floor == "FloorGuideReelPlace"){
			this.$el.find(".VisitFloorReelPlaceSelector").show();
			this.$el.find(".VisitFloorDescription").hide();
			$(".AreaListScrollButton").hide();
		}
		else{
			this.$el.find(".VisitFloorReelPlaceSelector").hide();
			this.$el.find(".VisitFloorDescription").show();
			$(".AreaListScrollButton").show();
		}
		window.visitFloorDescriptionView.changeFloor(floor);
	},
	selectAreaOnMap: function(event){
		var target = $(event.target).attr("href").replace("#", "");
		this.selectArea(target);
		window.visitFloorDescriptionView.selectArea(target);
	},
	selectArea: function(id){
		this.$el.find("." + this.currentFloor + " .FloorGuideOver").attr("src", "/images/Visit/" + this.currentFloor + "/" + id + ".png");
	}
});

$(document).ready(function(){
	window.visitFloorDescriptionView = new VisitFloorDescriptionView({ el: $(".VisitFloorDescriptionContainer")});
	window.visitFloorView = new VisitFloorView({ el: $(".VisitFloor")});
	$(window).trigger("resize");
	// $(".EditReelPlaceForm").submit(function(event){
	// 	$(this).find(".Content").val("###Title###" + $(this).find(".Title").val() + "###TitleEnd######Description###" + $(this).find(".Description").val() + "###DescriptionEnd###");
	// });
});