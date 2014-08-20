$(document).ready(function(){

	var brandSelectorRun = "0px";
	var foodSelectorRun = "0px";
	$(".HeadLetter img").hover(function(){
		$(this).attr("src", $(this).attr("src").replace("_L.png", "_D.png"));
	}, function(){
		$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"));
	});

	$(".BrandCategorySelector .HoverLink img").hover(function(){
		$(this).attr("src", $(this).attr("src").replace("_L.png", "_D.png"));
	}, function(){
		$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"));
	});

	$(".BrandCategorySelector .SubMenu").slideUp();
	$(".BrandCategorySelector .HaveSubMenu").click(function(){
		$(".BrandCategorySelector .SubMenu." + $(this).closest(".HaveSubMenu").attr("sub_menu")).slideDown();
	});

	$(".BrandItem .BrandContent").hide();
	$(".BrandItem .BrandHeader").click(function(){
		$(".BrandItem .BrandHeader").removeClass("Active");
		$(".BrandItem .BrandContent").slideUp();
		$(this).next(".BrandContent").clearQueue().slideDown();
		var brandItem = $(this).closest(".BrandItem");
		setTimeout(function(){
			$(".MainContent").animate({"top": (-1 * brandItem.position().top) + "px"});
		}, 1000);
		$(this).addClass("Active");
	});

	$(".BrandFilter").click(function(){
		changeModeAndBrand("BrandListMode");
		if(!$(this).attr("brand") || $(this).attr("brand") == ""){
			$(".BrandItem").show();
		}
		else{
			var brand = $(this).attr("brand").split(",");
			$(".BrandItem").hide();
			for(var i = 0; i < brand.length; i++){
				$(".BrandItem." + brand[i]).show();
			}
		}
		if($(this).parent(".SubMenu").length == 0){
			$(".BrandCategorySelector .SubMenu").slideUp();
		}
	});

	$(".FoodItem .FoodContent").hide();
	$(".FoodItem .FoodHeader").click(function(){
		$(".FoodItem .FoodHeader").removeClass("Active");
		$(".FoodItem .FoodContent").slideUp();
		$(this).next(".FoodContent").clearQueue().slideDown();
		$(this).addClass("Active");
	});

	var changeModeAndBrand = function(mode, brand){
		switch(mode){
			case "BrandMapMode":
				$(".MainContainer .BrandContainer").hide();
				$(".MainContainer .BrandMapContainer").show();
				$(".MainContainer .RestaurentContainer").hide();
				$(".MainContainer .FoodContainer").hide();
				$(".BrandSelectorContainer").show();
				$(".BrandSelectorScrollButton").show();
				$(".RestaurentSelectorContainer").hide();
				$(".FoodSelectorContainer").hide();
				$(".FoodSelectorScrollButton").hide();
				break;
			case "BrandListMode":
				$(".MainContainer .BrandContainer").show();
				$(".MainContainer .BrandMapContainer").hide();
				$(".MainContainer .RestaurentContainer").hide();
				$(".MainContainer .FoodContainer").hide();
				$(".BrandSelectorContainer").show();
				$(".BrandSelectorScrollButton").show();
				$(".RestaurentSelectorContainer").hide();
				$(".FoodSelectorContainer").hide();
				$(".FoodSelectorScrollButton").hide();
				$(".BrandItem").show();
				if(brand && brand != "" && $(".BrandItem." + brand)){
					$(".BrandItem." + brand + " .BrandHeader").trigger("click");
				}
				break;
			case "RestaurentMode":
				$(".MainContainer .BrandContainer").hide();
				$(".MainContainer .BrandMapContainer").hide();
				$(".MainContainer .RestaurentContainer").show();
				$(".MainContainer .FoodContainer").hide();
				$(".BrandSelectorContainer").hide();
				$(".BrandSelectorScrollButton").hide();
				$(".RestaurentSelectorContainer").show();
				$(".FoodSelectorContainer").hide();
				$(".FoodSelectorScrollButton").hide();
				break;
			case "FoodMode":
				$(".MainContainer .BrandContainer").hide();
				$(".MainContainer .BrandMapContainer").hide();
				$(".MainContainer .RestaurentContainer").hide();
				$(".MainContainer .FoodContainer").show();
				$(".BrandSelectorContainer").hide();
				$(".BrandSelectorScrollButton").hide();
				$(".RestaurentSelectorContainer").hide();
				$(".FoodSelectorContainer").show();
				$(".FoodSelectorScrollButton").show();
				if(brand && brand != "" && $(".FoodItem." + brand)){
					$(".FoodItem." + brand + " .FoodHeader").trigger("click");
				}
				break;
		}
	}

	$(".BrandSelectorContainer").mousemove(function(e){
		var parentOffset = $(this).parent().offset();
		var parentHeight = $(".BrandSelectorContainer").height();
		var relativeYPosition = (e.pageY - parentOffset.top);
		if(relativeYPosition < 50 && $(".BrandSelector").position().top != 0){
			brandSelectorRun = "+=" + ((200 - (e.pageY - parentOffset.top)) / 5) + "px";
		}
		else if(relativeYPosition > 350 && $(".BrandSelector").position().top != (parentHeight - $(".BrandSelector").height() + 1)){
			brandSelectorRun = "-=" + ((e.pageY - parentOffset.top - 250) / 5) + "px";
		}
	}).mouseout(function(){
		brandSelectorRun = "+=0px";
	});
	$(".FoodSelectorContainer").mousemove(function(e){
		var parentOffset = $(this).parent().offset();
		var parentHeight = $(".FoodSelectorContainer").height();
		var relativeYPosition = (e.pageY - parentOffset.top);
		if(relativeYPosition < 50 && $(".FoodSelector").position().top != 0){
			foodSelectorRun = "+=" + ((200 - (e.pageY - parentOffset.top)) / 5) + "px";
		}
		else if(relativeYPosition > 35 && $(".FoodSelector").position().top != (parentHeight - $(".FoodSelector").height() + 1)){
			foodSelectorRun = "-=" + ((e.pageY - parentOffset.top - 250) / 5) + "px";
		}
	}).mouseout(function(){
		foodSelectorRun = "+=0px";
	});
	$(".OpenBrand").click(function(){
		var brandKey = "";
		brandKey = $(this).html().replace(/\W/g, "").toLowerCase();
		changeModeAndBrand("BrandListMode", brandKey);
	});
	$(".OpenFood").click(function(){
		var brandKey = "";
		changeModeAndBrand("FoodMode", $(this).html());
	});
	$(".BrandMapMode").click(function(){
		changeModeAndBrand("BrandMapMode");
	});
	$(".RestaurentMode").click(function(){
		changeModeAndBrand("RestaurentMode");
	});
	$(".FoodMode").click(function(){
		changeModeAndBrand("FoodMode");
	});

	var brandSelectorPrefixPosition = new Array();

	$(".BrandSelector .HeadLetter").each(function(){
		brandSelectorPrefixPosition.push({
			prefix: $(this).find("img").attr("class"),
			position: (($(this).position().top - 5) * -1) + "px"
		});
	});

	var currentbrandSelectorPrefixPositionIndex = 0;
	var SetPositionFromPrefix = function(prefix){
		for(var i = 0; i < brandSelectorPrefixPosition.length; i++){
			if(brandSelectorPrefixPosition[i].prefix == prefix){
				currentbrandSelectorPrefixPositionIndex = i;
				break;
			}
		}
		brandSelectorRun = brandSelectorPrefixPosition[currentbrandSelectorPrefixPositionIndex].position;
	}
	var UpdateCurrentbrandSelectorPrefixPositionIndex = function(){
		var currentPosition = $(".BrandSelector").position().top;
		currentbrandSelectorPrefixPositionIndex = 0;
		for(var i = 0; i < brandSelectorPrefixPosition.length; i++){
			if(currentPosition > parseInt(brandSelectorPrefixPosition[i].position.replace("px", ""))){
				currentbrandSelectorPrefixPositionIndex = i - 1;
				break;
			}
		}
	}
	var SetPositionFromIndex = function(index){
		currentbrandSelectorPrefixPositionIndex = index;
		brandSelectorRun = brandSelectorPrefixPosition[currentbrandSelectorPrefixPositionIndex].position;
	}
	changeModeAndBrand("BrandMapMode");
	var ScrollBrandSelector = function(){
		var parentHeight = $(".BrandSelectorContainer").height();
		var brandSelectorHeight = $(".BrandSelector").height();
		$(".BrandSelector").animate({
			top: brandSelectorRun
		}, "fast", "linear", function(){
			UpdateCurrentbrandSelectorPrefixPositionIndex();
			if($(this).position().top > 0){
				brandSelectorRun = "0px";
				ScrollBrandSelector();
			}
			else if($(this).position().top <= (parentHeight - brandSelectorHeight)){
				brandSelectorRun = (parentHeight - brandSelectorHeight + 1) + "px";
				ScrollBrandSelector();
			}
			else{
				ScrollBrandSelector();
			}
		});
	}
	ScrollBrandSelector();
	var ScrollFoodSelector = function(){
		var parentHeight = $(".FoodSelectorContainer").height();
		var foodSelectorHeight = $(".FoodSelector").height();
		$(".FoodSelector").animate({
			top: foodSelectorRun
		}, "fast", "linear", function(){
			if($(this).position().top > 0){
				foodSelectorRun = "0px";
				ScrollFoodSelector();
			}
			else if($(this).position().top <= (parentHeight - foodSelectorHeight)){
				foodSelectorRun = (parentHeight - foodSelectorHeight + 1) + "px";
				ScrollFoodSelector();
			}
			else{
				ScrollFoodSelector();
			}
		});
	}
	ScrollFoodSelector();

	$(".BrandSelectorScrollButton .ScrollUp").click(function(){
		if(currentbrandSelectorPrefixPositionIndex > 0){
			SetPositionFromIndex(currentbrandSelectorPrefixPositionIndex - 1);
		}
		else{
			SetPositionFromIndex(0);
		}
	});
	$(".BrandSelectorScrollButton .ScrollDown").click(function(){
		if(currentbrandSelectorPrefixPositionIndex < 25){
			SetPositionFromIndex(currentbrandSelectorPrefixPositionIndex + 1);
		}
		else{
			SetPositionFromIndex(25);
		}
	});

	$(".FoodSelectorScrollButton .ScrollUp").click(function(){
		foodSelectorRun = ($(".FoodSelector").position().top + 80) + "px";
	});
	$(".FoodSelectorScrollButton .ScrollDown").click(function(){
		foodSelectorRun = ($(".FoodSelector").position().top - 80) + "px";
	});
	
	var paper = new Raphael($(".BrandMap").get(0), 980, 630);
	var strokeWidth = 0.35;
	var LINE_A = paper.path("M75.529,305.845c0,0,126.88-5.18,204.045,73.54c0,0,3.279,3.279,1.726,7.076");
	var LINE_B = paper.path("M230.893,238.521c0,0-3.587,71.772-1.075,103.61");
	var LINE_C = paper.path("M229.057,296.319c0,0,2.354-2.385,5.462-1.866c3.1,0.517,33.531,18.049,53.728,59.801c0.044,0.09,0.298,0.537,0.341,0.627");
	var LINE_D = paper.path("M255.752,309.472c0,0,17.263-26.586,84.932-25.896c56.447,0.575,108.411,28.828,148.805,75.957c0,0,2.258,2.695,1.568,5.629");
	var LINE_E = paper.path("M340.684,283.577c0,0-3.034-4.721,11.393-7.251c29.521-5.178,101.299,2.908,145.526,15.02c43.501,11.911,122.738,48.163,158.99,102.54");
	var LINE_F = paper.path("M527.121,436.869c0,0,110.309-78.719,184.883-24.857");
	var LINE_G = paper.path("M624.803,455.19c0,0,44.217-26.09,157.633-15.73");
	var LINE_H = paper.path("M721.326,357.115L708.898,437.904");
	var LINE_I = paper.path("M708.379,488.658c0,0,49.715-35.215,125.846-22.272");
	var LINE_J = paper.path("M785.025,508.856c0,0,57.484-37.807,134.131-34.699");
	var LINE_K = paper.path("M779.33,464.316c0,0,1.553-23.305,8.285-49.197");
	var LINE_L = paper.path("M838.367,449.816c0,0-8.285,36.77-8.805,38.322");
	var LINE_M = paper.path("M490.575,0L490.575,289.506");
	var lineSet = paper.set();
	lineSet.push(LINE_A, LINE_B, LINE_C, LINE_D, LINE_E, LINE_F, LINE_G, LINE_H, LINE_I, LINE_J, LINE_K, LINE_L, LINE_M);
	lineSet.attr({
		"stroke-width": strokeWidth
	});

	var BOX_A = paper.path("M54.815,254.996c-2.418-1.123-1.726,1.209-1.726,1.209s3.835,7.082,5.374,22.221l-6.931-5.801c-1.152-0.965-1.838-1.607-2.062-1.93c-0.226-0.318-0.293-0.719-0.205-1.197l-0.332-0.102l-1.084,3.561l0.332,0.1c0.161-0.406,0.301-0.678,0.418-0.811c0.193-0.209,0.438-0.266,0.74-0.174c0.152,0.047,0.344,0.15,0.574,0.324c0.23,0.168,0.865,0.666,1.896,1.49l-1.441,4.734l-1.947,0.191c-0.277,0.031-0.533,0.043-0.773,0.031c-0.238-0.004-0.4-0.023-0.488-0.051c-0.262-0.078-0.402-0.205-0.424-0.379c-0.021-0.168,0.024-0.525,0.139-1.066l-0.332-0.102l-1.391,4.568l-9.666,31.742c-0.236,0.441-0.443,0.918-0.605,1.449c-0.357,1.174-0.368,2.361-0.027,3.564c0.197,0.707,0.486,1.336,0.869,1.889l0.438-0.232c-0.348-0.691-0.574-1.303-0.689-1.828c-0.207-0.922-0.169-1.846,0.115-2.777c0.391-1.285,1.193-2.203,2.404-2.75c1.211-0.549,2.621-0.576,4.223-0.088c1.741,0.529,2.988,1.344,3.74,2.443c0.754,1.103,0.934,2.279,0.551,3.539c-0.379,1.244-1.139,2.098-2.29,2.551c-0.608,0.236-1.351,0.354-2.226,0.348l-0.126,0.414l4.087,1.062l0.115-0.377c-0.18-0.119-0.294-0.27-0.341-0.451c-0.05-0.18-0.046-0.352,0.007-0.523c0.025-0.084,0.236-0.438,0.637-1.062c0.403-0.625,0.701-1.262,0.9-1.914c0.567-1.863,0.406-3.568-0.486-5.109c-0.852-1.469-2.15-2.469-3.896-3.002c-1.707-0.52-3.293-0.428-4.752,0.273c-0.976,0.467-1.739,1.186-2.337,2.102l4.8-15.764c-0.034,0.353-0.046,0.691-0.018,1.006c0.127,1.459,0.896,2.398,2.3,2.826c0.833,0.254,1.575,0.156,2.218-0.283c0.641-0.443,1.188-1.047,1.639-1.812c-0.042,0.717,0.016,1.281,0.164,1.689c0.26,0.729,0.814,1.217,1.662,1.475c1.131,0.346,2.055,0.168,2.775-0.537c0.719-0.703,1.298-1.775,1.736-3.213l1.531-5.031l-0.334-0.102c-0.254,0.713-0.511,1.147-0.766,1.297c-0.254,0.158-0.711,0.133-1.371-0.068l-7.992-2.434c-0.67-0.205-1.062-0.438-1.18-0.709c-0.119-0.264-0.089-0.766,0.088-1.502l-0.183-0.057l2.435-7.998l0.184,0.057c0.187-0.404,0.387-0.67,0.599-0.799c0.216-0.133,0.704-0.238,1.47-0.334l11.01-1.311c0.299,3.242,0.494,6.826,0.525,10.781c0.259,33.402-9.253,56.956-8.934,58.653c0.259,1.379,1.726,0.517,1.726,0.517s22.269-11.006,24.168-46.743C77.947,266.949,54.815,254.996,54.815,254.996z M47.677,297.064l0.495-1.717l4.061,1.236c0.286,0.086,0.45,0.184,0.487,0.289c0.035,0.109-0.001,0.352-0.115,0.727c-0.301,0.988-0.63,1.693-0.979,2.117c-0.644,0.762-1.502,0.98-2.572,0.654c-0.91-0.277-1.424-0.852-1.544-1.715C47.451,298.201,47.507,297.671,47.677,297.064z M43.021,293.777l4.475,1.363c-0.051,0.15-0.088,0.264-0.109,0.336c-0.023,0.074-0.076,0.25-0.159,0.521c-0.343,1.125-0.81,1.988-1.4,2.604c-0.587,0.613-1.387,0.768-2.391,0.461c-1.012-0.309-1.603-0.822-1.77-1.557c-0.168-0.727-0.113-1.551,0.166-2.467c0.194-0.639,0.364-1.029,0.507-1.178C42.486,293.712,42.712,293.683,43.021,293.777z M51.19,278.537l1.257-4.127l4.318,3.574L51.19,278.537z");
	var BOX_B = paper.path("M267.145,187.153c-1.381,0-14.035,17.425-37.113,19.505c-6.255,0.564-10.755,0.236-14.026-0.518l1.494-0.553l0.356-0.121c0.039-0.016,0.07-0.035,0.109-0.051l28.803-10.648l0.008,0.023l4.928-1.822l-0.009-0.023l1.56-0.577l-0.055-0.146l-1.559,0.576l-0.059-0.156c-0.68,0.193-1.155,0.237-1.421,0.133c-0.265-0.109-0.516-0.485-0.754-1.129l-1.425-3.854l2.553-0.944c0.748-0.276,1.264-0.339,1.553-0.197c0.29,0.146,0.622,0.534,1.007,1.169l0.415-0.153l-1.504-4.067l-0.415,0.152c0.129,0.727,0.124,1.24-0.001,1.537c-0.123,0.297-0.561,0.588-1.311,0.865l-2.553,0.943l-1.454-3.931c-0.087-0.233-0.114-0.405-0.075-0.509c0.035-0.105,0.172-0.201,0.407-0.289l2.417-0.894c0.979-0.362,1.674-0.497,2.086-0.404c0.411,0.089,0.828,0.515,1.244,1.274l0.492-0.182l-0.991-2.497l-9.386,3.47l0.121,0.326c0.668-0.193,1.135-0.23,1.396-0.11c0.26,0.123,0.502,0.495,0.733,1.121l2.821,7.629c0.28,0.761,0.371,1.26,0.27,1.504c-0.104,0.24-0.486,0.529-1.154,0.857l0.059,0.157l-7.111,2.629l-0.291-3.16l-0.492,0.182c-0.08,1.172-0.355,1.991-0.828,2.465c-0.475,0.472-1.307,0.929-2.502,1.371c-1.1,0.406-1.775,0.621-2.019,0.639c-0.246,0.016-0.434-0.148-0.562-0.496l-1.613-4.363l2.719-1.005c0.747-0.276,1.264-0.339,1.551-0.196c0.287,0.146,0.623,0.534,1.007,1.167l0.414-0.153l-1.504-4.066l-0.414,0.153c0.13,0.725,0.127,1.235,0.006,1.534c-0.128,0.3-0.563,0.589-1.316,0.867l-2.719,1.005l-1.453-3.931c-0.084-0.229-0.111-0.398-0.082-0.505c0.029-0.106,0.176-0.206,0.433-0.302l2.397-0.886c1.032-0.382,1.74-0.513,2.123-0.395c0.387,0.118,0.793,0.537,1.229,1.258l0.446-0.165l-0.993-2.496l-9.357,3.459l0.12,0.328c0.669-0.195,1.138-0.233,1.399-0.113c0.26,0.124,0.504,0.496,0.734,1.121l2.896,7.835c0.245,0.663,0.305,1.11,0.168,1.346c-0.129,0.231-0.506,0.503-1.133,0.808l0.084,0.227l-10.659,3.941c1.198-0.721,2.097-1.672,2.67-2.871c0.799-1.668,0.854-3.428,0.171-5.273c-0.337-0.912-0.795-1.66-1.377-2.238c-0.58-0.576-1.264-0.983-2.054-1.217c-0.789-0.232-1.591-0.285-2.407-0.157c-0.816,0.127-1.584,0.329-2.301,0.607l-1.783,0.696l-2.201,0.833c-0.31,0.114-0.924,0.325-1.836,0.633l0.191,0.517l0.691-0.145c0.41-0.089,0.656-0.111,0.744-0.069c0.088,0.043,0.226,0.261,0.415,0.657c0.327,0.681,0.671,1.51,1.03,2.482l0.879,2.378c0.621,1.68,1.063,2.965,1.334,3.865c-5.879-2.142-6.287-5.773-7.001-5.664c-1.123,0.171-2.777,19.174,3.795,28.309c6.647,9.236,16.573,10.705,20.197,10.705c3.627,0,38.325-2.764,38.152-44.885C268.7,193.884,268.527,187.153,267.145,187.153z M211.82,195.42c0.744-0.406,1.402-0.716,1.978-0.929c1.64-0.606,3.04-0.648,4.199-0.125c1.159,0.521,2.034,1.58,2.625,3.178c0.677,1.832,0.681,3.416,0.013,4.75c-0.557,1.102-1.6,1.935-3.131,2.5c-0.562,0.209-1.234,0.395-2.013,0.557c-0.385-0.838-0.761-1.753-1.127-2.744l-1.982-5.361C212.134,196.578,211.947,195.968,211.82,195.42z");
	var BOX_C = paper.path("M242.459,388.016c0,2.246,40.568,2.072,50.926,2.072c10.356,0,26.24-0.689,26.24-2.59C319.625,385.6,242.459,384.562,242.459,388.016z");
	var BOX_D = paper.path("M359.635,415.562c-0.247-0.147-0.413-0.58-0.499-1.295l-0.995-8.297c-0.081-0.684-0.022-1.143,0.18-1.365c0.198-0.221,0.676-0.398,1.431-0.527l-0.043-0.344l-5.515,0.66l0.042,0.346c0.764-0.055,1.268,0.006,1.516,0.174c0.247,0.168,0.416,0.6,0.497,1.283l0.995,8.297c0.086,0.717,0.025,1.176-0.178,1.377c-0.205,0.197-0.682,0.369-1.434,0.514l0.023,0.193l-10.094,1.211l-0.023-0.193c-0.691,0.021-1.154-0.049-1.375-0.215c-0.23-0.166-0.383-0.584-0.465-1.266l-0.994-8.291c-0.06-0.496-0.047-0.867,0.037-1.117c22.785-8.512,18.502-46.48,18.502-46.48s-0.518-1.121-1.726-0.432c-1.211,0.691-13.984,12.086-26.931,12.086c-12.947,0-31.072-6.734-42.983-16.748c0,0-0.652-0.727-1.078-0.613c-0.426,0.111-0.494,1.402-0.469,2.062c0.371,9.914,14.346,51.807,44.704,51.807c0.131,0,0.256-0.006,0.385-0.008c0.043,0.168,0.082,0.354,0.108,0.578l0.969,8.072c0.097,0.805,0.064,1.312-0.097,1.527c-0.156,0.209-0.594,0.4-1.314,0.564l0.022,0.192l-10.915,1.308c0.16-0.068,0.319-0.131,0.48-0.209c1.025-0.492,1.529-0.85,1.503-1.066l-0.44-3.672c-0.072-0.605,0.004-1.023,0.237-1.246c0.137-0.139,0.435-0.252,0.894-0.336l-0.042-0.35l-4.756,0.57l0.042,0.35c0.694-0.041,1.15,0.014,1.374,0.166c0.226,0.154,0.38,0.59,0.466,1.31l0.357,2.971c0.024,0.205-0.01,0.365-0.107,0.486c-0.098,0.119-0.355,0.277-0.783,0.475c-0.263,0.127-0.542,0.229-0.842,0.307c-0.299,0.076-0.559,0.133-0.784,0.158c-1.331,0.16-2.506-0.188-3.524-1.049c-1.022-0.854-1.633-2.141-1.838-3.861c-0.25-2.082,0.025-3.627,0.824-4.645c0.798-1.018,1.793-1.598,2.99-1.74c1.176-0.143,2.178,0.133,3.008,0.82c0.462,0.393,0.934,1.022,1.425,1.879l0.427-0.051l-0.615-3.904l-0.407,0.049c-0.058,0.201-0.134,0.361-0.235,0.479c-0.1,0.119-0.285,0.191-0.55,0.223c-0.103,0.012-0.515-0.037-1.239-0.154c-0.723-0.117-1.445-0.129-2.166-0.043c-1.996,0.238-3.518,1.111-4.562,2.623c-0.949,1.371-1.32,2.924-1.111,4.658c0.236,1.973,1.115,3.463,2.633,4.469c1.376,0.91,2.975,1.26,4.796,1.043c0.647-0.078,1.301-0.244,1.963-0.48l11.519-1.383v0.002l5.173-0.621l-0.042-0.348c-0.69,0.029-1.147-0.039-1.375-0.213c-0.23-0.166-0.384-0.588-0.465-1.268l-0.461-3.838l5.66-0.68l0.436,3.621c0.096,0.805,0.067,1.316-0.091,1.529c-0.151,0.215-0.594,0.404-1.32,0.562l0.042,0.346l5.171-0.619l13.224-1.586l2.385-0.287l-0.041-0.348C360.382,415.76,359.878,415.707,359.635,415.562z M335.584,412.361l-0.436-3.631c-0.018-0.156-0.028-0.299-0.033-0.432c1.997-0.139,3.847-0.455,5.559-0.928c0.056,0.189,0.103,0.41,0.136,0.682l0.435,3.629L335.584,412.361z");
	var BOX_E = paper.path("M447.618,361.078c-1.43,3.342,21.234,5.18,44.021,6.475c22.787,1.297,36.769,2.332,37.027,0c0.26-2.33-31.849-2.59-37.544-2.848C485.424,364.445,448.397,359.268,447.618,361.078z");
	var BOX_F = paper.path("M486.836,425.049c-27.967,0-39.359,21.406-39.359,42.123c0,11.656,3.499,24.518,10.128,35.074c-0.118,0.125-0.273,0.221-0.458,0.301l-7.473,3.225c-1.77,0.764-2.788,0.537-3.387-0.852c-0.271-0.629-0.328-1.35-0.174-1.945c0.414,0.684,1.125,0.789,1.671,0.553c0.562-0.242,0.821-0.824,0.571-1.402c-0.264-0.613-0.992-0.848-1.672-0.555c-1.058,0.457-1.5,1.883-0.687,3.768c0.244,0.566,0.548,1.016,0.896,1.359l4.309,9.982l0.02-0.008l2.018,4.676l0.215-0.092c-0.571-1.461-0.278-1.783,0.482-2.111l3.389-1.461l1.671,0.689l-2.895,4.838c-0.711,1.17-1.199,1.125-1.842-0.088l-0.215,0.092l1.596,3.697l-0.022,0.008l4.43,10.266l0.022-0.008l2.463,5.705l3.675-1.389l-0.075-0.223c-2.994,0.154-4.154-0.58-5.096-2.764l-0.656-1.519l9.803-4.231c0.744-0.322,1.213-0.328,1.939,1.221l0.199-0.084l-2.233-5.176l-0.198,0.086c0.586,1.494,0.326,2.074-0.385,2.383l-8.728,3.766c-0.728,0.315-1.311,0.096-1.996-1.354l-0.052,0.021l-2.402-5.566l0.052-0.022c-0.344-1.342-0.236-1.684,0.898-3.643l3.169-5.428l2.886,1.188c2.411,0.998,3.154,1.402,3.984,2.691l0.199-0.086l-1.983-4.596l-0.198,0.086c0.564,1.856-0.385,2.107-1.758,1.562l-5.771-2.332l4.893-2.111c0.743-0.322,1.194-0.322,1.939,1.221l0.182-0.078l-2.232-5.174l-0.198,0.086c0.585,1.49,0.343,2.066-0.368,2.373l-8.762,3.781c-0.727,0.315-1.295,0.088-1.98-1.361l-0.051,0.023l-4-9.27c0.979,0.729,2.248,0.754,3.638,0.154l6.96-3.004c0.361-0.156,0.69-0.188,1.019,0.014c5.021,7.355,11.632,13.42,19.708,16.898c0,0,37.976-15.881,48.679-84.24C527.231,436.789,514.801,425.049,486.836,425.049z");
	var BOX_G = paper.path("M615.029,526.479c-2.922-0.85-6.506,0.9-7.604,4.67c-0.818,2.816,0.082,5.35,1.826,6.83l-11.363-3.305l2.625-9.025c0.488-1.676,1.025-2.232,2.736-2.055l0.06-0.207l-4.65-1.354l-0.061,0.209c1.652,0.762,1.988,1.609,1.5,3.285l-1.932,6.639l-0.018-0.004l-3.881-10.488c36.449-20.119,30.623-66.539,30.623-66.539c-64.803-53.811-73.217,2.605-73.217,2.605c-6.885,34.791,14.191,51.754,28.955,59.186l-6.494,8.455l-0.07-0.021l-1.094-10.801l-3.943-1.146l-0.059,0.207c1.477,0.469,1.807,1.521,1.5,2.574l-2.043,7.02c-0.486,1.678-1.133,2.221-2.838,2.025l-0.066,0.223l4.633,1.35l0.066-0.225c-1.688-0.773-1.85-1.57-1.361-3.246l2.359-8.109l0.086,0.025l1.365,12.324l0.225,0.064l7.494-9.707l0.086,0.023l-2.752,9.457c-0.232,0.795-0.52,1.143-2.16,0.723l-0.065,0.225l2.463,0.717l0,0l10.801,3.143l0,0l2.881,0.838l0.065-0.225c-1.688-0.772-1.85-1.57-1.361-3.246l2.164-7.435l0.016,0.006l4.84,12.885l0.381,0.111l0.086-0.293l11.812,3.438l0.004-0.016c0.516,0.365,1.086,0.65,1.701,0.83c2.906,0.844,6.508-0.902,7.603-4.67C620.062,530.643,618.021,527.348,615.029,526.479z M591.975,522.451l-2.041,7.019c-0.488,1.676-1.152,2.215-2.857,2.02l-0.01,0.033l-6.117-1.779l0.01-0.035c-1.523-0.5-1.812-1.053-1.592-1.812l2.656-9.129c0.119-0.408,0.346-0.686,0.779-0.793c3.996,1.85,7.344,2.961,9.246,3.523C592.092,521.807,592.068,522.127,591.975,522.451z M617.027,533.924c-1.353,4.65-3.297,5.527-5.51,4.883c-2.213-0.643-3.525-2.449-2.162-7.135c1.353-4.65,3.279-5.533,5.492-4.891C617.078,527.43,618.391,529.238,617.027,533.924z");
	var BOX_H = paper.path("M777.775,337.607c-1.035-1.035-18.75,5.631-39.188,3.48c-13.69-1.443-29.561-5.385-44.102-13.326l1.213-0.064v0.006l17.777-0.951c0.227,0.06,0.455,0.125,0.689,0.156c-0.852,0.262-1.758,0.85-2.762,1.969l0.229,0.203c0.94-0.951,1.725-1.463,2.426-1.498c1.42-0.076,2.523,2.695,5.004,2.562c1.475-0.078,2.385-0.957,2.322-2.09c-0.033-0.629-0.51-1.127-1.086-1.096c-0.559,0.029-0.875,0.478-0.85,0.947c0.037,0.701,0.885,0.727,0.912,1.213c0.014,0.27-0.102,0.457-0.443,0.475c-1.35,0.072-2.209-2.19-4.004-2.707c0.428-0.08,0.846-0.217,1.248-0.398l0.004,0.068l12.398-0.664v-0.006l4.221-0.225l-0.014-0.234c-1.693,0.035-2.004-0.361-2.047-1.189l-0.244-4.567l1.617-0.086c2.141-0.115,2.646,0.237,2.957,2.023l0.289,1.697c0.287,1.645,0.682,2.289,2.355,2.2c0.609-0.031,1.271-0.156,1.818-0.35l-0.01-0.197c-1.602,0.086-1.918-0.131-2.297-1.805l-0.146-0.731c-0.391-1.91-1.029-3.065-3.697-3.049l-0.002-0.054c2.711-0.542,3.723-1.841,3.641-3.404c-0.094-1.727-1.639-2.961-5.305-2.765l-5.305,0.284l0.012,0.216c1.604-0.032,2.061,0.412,2.102,1.186l0.506,9.493c0.043,0.791-0.365,1.264-1.961,1.404l0.002,0.039l-10.576,0.564c2.031-1.062,3.562-3.381,3.404-6.297c-0.211-3.957-3.225-6.392-6.336-6.227c-3.039,0.163-5.844,3-5.635,6.919c0.158,2.956,1.865,5.044,4.016,5.849l-14.961,0.799l-0.002-0.041c-1.711,0.039-2.184-0.352-2.227-1.178l-0.217-4.064l1.275-0.068c3.885-0.208,5.047-2.073,4.953-3.816c-0.1-1.87-1.387-3.335-5.197-3.132l-5.143,0.276l0.012,0.216c1.603-0.032,2.061,0.412,2.102,1.186l0.506,9.493c0.023,0.433-0.098,0.766-0.463,1.006c-6.836-3.827-13.358-8.551-19.197-14.335c0,0-1.381-1.728-2.07-1.209c-0.691,0.518,0.086,3.194,0.086,3.194s8.156,34.797,49.111,42.379c40.568,7.51,55.76-17.262,55.76-17.262S778.81,338.645,777.775,337.607z M732.594,313.518c2.572-0.138,3.385,0.901,3.473,2.556c0.096,1.78-0.344,3.011-2.896,3.147l-1.709,0.092l-0.305-5.718L732.594,313.518z M710.908,320.59c-0.26-4.837,1.268-6.307,3.568-6.429c2.32-0.125,4.154,1.148,4.414,6.021c0.26,4.837-1.285,6.308-3.586,6.431C713.002,326.736,711.168,325.465,710.908,320.59z M696.627,315.44c2.482-0.133,3.09,1.132,3.182,2.841c0.106,1.978-0.312,3.243-2.902,3.382l-1.402,0.075l-0.332-6.221L696.627,315.44z");
	var BOX_I = paper.path("M708.725,488.311c0,0-25.5-19.637-40.395-12.428c-10.703,5.178-3.605,21.83,1.727,32.109c0.42,0.807,0.897,1.668,1.418,2.557c-0.68-0.152-1.42-0.109-2.188,0.197c-2.156,0.861-1.928,2.746-1.861,4.562c0.098,2.426-0.029,3.658-1.617,4.295c-1.037,0.412-2.559,0.053-3.26-1.703c-0.756-1.889,0.412-3.578,2.174-5.33l-0.094-0.232l-4.113,1.643l0.08,0.201l1.201,0.723c-0.111,0.84-0.023,2.025,0.352,2.963c0.238,0.596,0.531,1.072,0.858,1.457l4.547,11.369l-0.004,0.002l2.244,5.619l0.006-0.002l4.996,12.498l0.002-0.002c0.047,0.654,0.207,1.361,0.512,2.125c1.17,2.928,3.295,3.629,5.518,2.74l5.383-2.152c1.623-0.648,2.385-0.584,3.297,0.873l0.201-0.08l-1.799-4.498l-0.201,0.082c0.426,1.789-0.037,2.574-1.658,3.223l-5.199,2.078c-1.236,0.494-2.213,0.479-3.033,0.125c-0.748-0.32-1.307-0.988-1.646-1.842c-0.756-1.889-0.672-3.861,1.936-4.904l6.621-2.646c0.752-0.301,1.227-0.277,1.906,1.275l0.199-0.082l-2.092-5.232l-0.201,0.08c0.545,1.508,0.271,2.084-0.447,2.369l-7.072,2.828c-1.418,0.568-2.166,1.652-2.232,3.082l-4.803-12.014l0.027-0.012c-0.545-1.508-0.342-2.209,0.395-2.504l9.896-3.957l0.328,0.82c0.508,1.27-0.221,2.84-1.82,4.565l0.106,0.211l3.42-1.482l-4.023-10.066l-3.502,1.285l0.07,0.225c2.494,0.127,3.978,0.832,4.467,2.053l0.328,0.818l-9.898,3.957c-0.734,0.295-1.367-0.072-2.012-1.541l-0.027,0.012l-4.367-10.922c1.24,1.117,2.854,1.094,4.107,0.592c2.174-0.867,2.047-2.736,1.941-4.557c-0.121-2.145-0.059-3.447,1.461-4.057c0.416-0.166,0.81-0.201,1.178-0.152c0.609,0.998,1.271,2.025,1.981,3.061c-0.199,0.957-0.897,1.959-2.068,3.018l0.094,0.234l3.336-1.334c5.852,7.957,14.104,15.565,20.895,12.547C705.617,524.908,710.107,505.918,708.725,488.311z M674.83,515.879c0.002-0.049-0.004-0.111-0.002-0.164c0.053,0.074,0.105,0.149,0.158,0.221L674.83,515.879z");
	var BOX_J = paper.path("M792.914,546.791l0.031-0.219l-4.648-0.678l-0.033,0.219c1.455,0.361,1.717,1.256,0.594,2.451l-2.404,2.574l-1.697-3.822c-0.445-1.033-0.258-1.676,1.392-1.51l0.033-0.219l-2.822-0.41c0.123-0.057,0.248-0.096,0.371-0.156c7.252-3.629,4.488-27.881,1.469-36.34c0,0-16.229-4.834-24.773-1.469c-8.545,3.369-5.178,16.832,1.555,26.412c3.478,4.949,7.232,8.777,11.049,10.838c0.24,0.439,0.127,1.045-0.346,2.012l-3.279,6.781l-0.068-0.01l-1.457-8.637c-0.207-1.193,0.065-1.445,1.576-1.316l0.031-0.213l-5.115-0.746l-0.031,0.215c1.229,0.324,1.537,0.568,1.797,2.154l0.178,1.043l-3.652,6.584l-0.07-0.01l-1.234-8.66c-0.147-0.984,0.049-1.447,1.557-1.318l0.031-0.215l-5.238-0.762l-0.031,0.213c1.342,0.414,1.635,0.766,1.869,2.164l1.775,11.016l-16.645-2.422l5.113-8.902c1.117-1.93,1.744-2.494,2.994-2.566l0.029-0.215l-4.115-0.598l-0.031,0.213c1.559,0.537,1.699,1.211,0.838,2.742l-4.051,7.217l-0.072-0.01l-1.908-9.139c-0.227-1.07,0.066-1.465,1.754-1.31l0.031-0.215l-5.416-0.787l-0.031,0.213c1.342,0.414,1.559,0.791,1.867,2.182l2.502,11.301l0.127,0.018v0.006l17.137,2.494l0.002-0.006l0.299,0.043l4.697-8.65l1.699,9.582l0.227,0.033l-0.002,0.004l14.108,2.053l0.002-0.012l0.727,0.105l0.035-0.236c-1.455-0.361-1.719-1.238-0.617-2.418l2.777-2.965l1.898,4.352c0.449,1.016,0.461,1.576-1.379,1.42l-0.035,0.238l5.652,0.82l0.035-0.234c-1.438-0.49-1.779-0.818-2.291-1.916l-2.641-5.654l2.561-2.625C790.947,547.119,791.481,546.787,792.914,546.791z M782.279,555.129c-1.797,1.861-2.352,2.096-3.691,2.088l-0.008,0.053l-9.957-1.449l4.418-9.041c0.381-0.779,0.738-1.344,1.127-1.746c2.609,1.158,5.238,1.441,7.818,0.664c0.344,0.289,0.549,0.65,0.803,1.201l2.406,5.211L782.279,555.129z");
	var BOX_K = paper.path("M793.31,399.928c-0.234-0.078-0.514,0.072-0.816,0.387c0.492-4.549,0.592-8.861-0.045-9.02c-1.281-0.318-3.406,10.914-3.441,16.551c-1.293,4.025-2.064,8.143-1.049,8.48C789.791,416.938,795.383,400.615,793.31,399.928z");
	var BOX_L = paper.path("M831.652,422.986c0.832,0,0.067,7.772,1.795,11.897c5.352,12.775,16.746-2.51,17.459-2.391c0,0,0.84-0.455,0.475,1.9c-0.328,2.129-1.172,15.77-12.582,15.77S830.582,422.986,831.652,422.986z");
	var BOX_M = paper.path("M946.69,503.943l-1.592-3.443l-0.223,0.082c-0.082,2.957-0.246,4.1-1.504,4.803l-3.553,1.984l1.025-14.33l-0.104-0.148l-5.086,2.842c0.025-0.059,0.055-0.103,0.074-0.172c0.346-1.207-6.387-6.988-6.387-20.455c0-13.465,3.494-23.068,3.969-24.6c0.477-1.531,1.318-3.15-0.689-1.984c0,0-12.688,10.682-14.242,25.506c-1.553,14.824,15.795,22.396,15.795,22.396s0.072,0.02,0.184,0.033l-1.68,0.939l1.461,3.35l0.221-0.082c0.018-2.773,0.49-4.068,1.59-4.684l3.064-1.713l-1.023,14.312l-7.924,4.43l-0.02-0.035c-1.52,0.789-2.07,0.58-2.457-0.111l-2.012-3.6l0.123-5.059c0.043-2.025,0.371-2.621,1.318-3.399l-0.105-0.189l-3.631,2.029l0.105,0.189c1.672-0.625,1.893-0.232,1.857,1.477l-0.065,4.719l-4.613-2.824c-0.936-0.57-1.104-1.055,0.4-2.018L920.863,504l-4.715,2.635l0.106,0.189c1.047-0.34,1.592-0.25,2.519,0.303l5.504,3.277l1.836,3.285c0.387,0.689,0.275,1.268-1.191,2.15l0.113,0.205l1.982-1.107l0.002,0.004l15.117-8.449l-0.002-0.004L946.69,503.943z");
	var boxSet = paper.set();
	boxSet.push(BOX_A, BOX_B, BOX_C, BOX_D, BOX_E, BOX_F, BOX_G, BOX_H, BOX_I, BOX_J, BOX_K, BOX_L, BOX_M);
	var animateAging = 0;
	var animating = false;
	boxSet.attr({
		"stroke-width": 0,
		"fill": "#262626"
	}).mouseover(function(){
		this.attr({
			"fill": "#E6C455"
		});
		animateAging = 1;
		if(animating == false){
			animating = true;
			LineESubSetMove();
			LineDSubSetMove();
			LineCSubSetMove();
			LineBSubSetMove();
			LineASubSetMove();
			LineFSubSetMove();
			LineHSubSetMove();
			LineJSubSetMove();
		}
	}).mouseout(function(){
		this.attr({
			"fill": "#262626"
		});
	}).click(function(){
		var selectedLetter = [];
		switch($(this).attr("id")){
			case 13:
				selectedLetter = ["A", "B", "C"];
				SetPositionFromPrefix("A");
				break;
			case 14:
				selectedLetter = ["D", "E", "F"];
				SetPositionFromPrefix("D");
				break;
			case 16:
				selectedLetter = ["G", "H", "I"];
				SetPositionFromPrefix("G");
				break;
			case 18:
				selectedLetter = ["J", "K", "L"];
				SetPositionFromPrefix("J");
				break;
			case 19:
				selectedLetter = ["M", "N", "O"];
				SetPositionFromPrefix("M");
				break;
			case 20:
				selectedLetter = ["P", "Q", "R"];
				SetPositionFromPrefix("P");
				break;
			case 21:
				selectedLetter = ["S", "T", "U"];
				SetPositionFromPrefix("S");
				break;
			case 22:
				selectedLetter = ["V", "W", "X"];
				SetPositionFromPrefix("V");
				break;
			case 25:
				selectedLetter = ["Y", "Z"];
				SetPositionFromPrefix("Y");
				break;
		}
		$(".BrandSelectorContainer .HeadLetter img").each(function(){
			$(this).attr("src", $(this).attr("src").replace("_D.png", "_L.png"));
		});
		for(var i = 0; i < selectedLetter.length; i++){
			var headLetter = $(".BrandSelectorContainer .HeadLetter img." + selectedLetter[i]);
			headLetter.attr("src", headLetter.attr("src").replace("_L.png", "_D.png"));
		}
	});
	
	setInterval(function(){
		animateAging = animateAging - 0.1;
		if(animateAging < 0){
			animateAging = 0;
			animating = false;
		}
	}, 1000);

	var animatePitch = 1500;
	var LineEAnimate = {
		Anchor:"504.627,290.271",
		AngleLight:"1",
		AngleHeavy:"1"
	}
	var LineDAnimate = {
		Anchor:"354.737,284.342",
		AngleLight:"-1.5",
		AngleHeavy:"-2"
	}
	var LineCAnimate = {
		Anchor:"269.805,310.237",
		AngleLight:"3.5",
		AngleHeavy:"5"
	}
	var LineBAnimate = {
		Anchor:"243.11,297.084",
		AngleLight:"-5",
		AngleHeavy:"-6"
	}
	var LineAAnimate = {
		Anchor:"243.87,342.9",
		AngleLight:"8",
		AngleHeavy:"15"
	}
	var LineFAnimate = {
		Anchor:"670.65,394.65",
		AngleLight:"-3",
		AngleHeavy:"-5"
	}
	var LineHAnimate = {
		Anchor:"726.06,412.78",
		AngleLight:"5",
		AngleHeavy:"8"
	}
	var LineJAnimate = {
		Anchor:"843.62,488.9",
		AngleLight:"-8",
		AngleHeavy:"-12"
	}
	
	var LineESubSet = paper.set().push(LINE_A, LINE_B, LINE_C, LINE_D, LINE_E, LINE_F, LINE_G, LINE_H, LINE_I, LINE_J, LINE_K, LINE_L, BOX_A, BOX_B, BOX_C, BOX_D, BOX_E, BOX_F, BOX_G, BOX_H, BOX_I, BOX_J, BOX_K, BOX_L, BOX_M);
	var LineDSubSet = paper.set().push(LINE_A, LINE_B, LINE_C, LINE_D, BOX_A, BOX_B, BOX_C, BOX_D, BOX_E);
	var LineCSubSet = paper.set().push(LINE_A, LINE_B, LINE_C, BOX_A, BOX_B, BOX_C, BOX_D);
	var LineBSubSet = paper.set().push(LINE_A, LINE_B, BOX_A, BOX_B, BOX_C);
	var LineASubSet = paper.set().push(LINE_A, BOX_A, BOX_C);
	var LineFSubSet = paper.set().push(LINE_F, LINE_G, LINE_H, LINE_I, LINE_J, LINE_K, LINE_L, BOX_F, BOX_G, BOX_H, BOX_I, BOX_J, BOX_K, BOX_L, BOX_M);
	var LineHSubSet = paper.set().push(LINE_G, LINE_H, LINE_I, LINE_J, LINE_K, LINE_L, BOX_G, BOX_H, BOX_I, BOX_J, BOX_K, BOX_L, BOX_M);
	var LineJSubSet = paper.set().push(LINE_J, BOX_J, BOX_M);
	
	var LineESubSetMove = function(){
		LineEAnimate.AngleLight = LineEAnimate.AngleLight * -1;
		LineESubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor }, animatePitch, function(){
			if(animating){
				LineESubSetMove();
			}
		});
	}
	var LineDSubSetMove = function(){
		LineDAnimate.AngleLight = LineDAnimate.AngleLight * -1;
		LineDSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineDAnimate.AngleLight * animateAging + "," + LineDAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineDSubSetMove();
			}
		});
	}
	var LineCSubSetMove = function(){
		LineCAnimate.AngleLight = LineCAnimate.AngleLight * -1;
		LineCSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineDAnimate.AngleLight * animateAging + "," + LineDAnimate.Anchor + "r" + LineCAnimate.AngleLight * animateAging + "," + LineCAnimate.Anchor }, animatePitch, "<>", function(){
			if(animating){
				LineCSubSetMove();
			}
		});
	}
	var LineBSubSetMove = function(){
		LineBAnimate.AngleLight = LineBAnimate.AngleLight * -1;
		LineBSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineDAnimate.AngleLight * animateAging + "," + LineDAnimate.Anchor + "r" + LineCAnimate.AngleLight * animateAging + "," + LineCAnimate.Anchor + "r" + LineBAnimate.AngleLight * animateAging + "," + LineBAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineBSubSetMove();
			}
		});
	}
	var LineASubSetMove = function(){
		LineAAnimate.AngleLight = LineAAnimate.AngleLight * -1;
		LineASubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineDAnimate.AngleLight * animateAging + "," + LineDAnimate.Anchor + "r" + LineCAnimate.AngleLight * animateAging + "," + LineCAnimate.Anchor + "r" + LineBAnimate.AngleLight * animateAging + "," + LineBAnimate.Anchor + "r" + (LineAAnimate.AngleLight * animateAging) + "," + LineAAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineASubSetMove();
			}
		});
	}
	var LineFSubSetMove = function(){
		LineFAnimate.AngleLight = LineFAnimate.AngleLight * -1;
		LineFSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineFAnimate.AngleLight * animateAging + "," + LineFAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineFSubSetMove();
			}
		});
	}
	var LineHSubSetMove = function(){
		LineHAnimate.AngleLight = LineHAnimate.AngleLight * -1;
		LineHSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineFAnimate.AngleLight * animateAging + "," + LineFAnimate.Anchor + "r" + LineHAnimate.AngleLight * animateAging + "," + LineHAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineHSubSetMove();
			}
		});
	}
	var LineJSubSetMove = function(){
		LineJAnimate.AngleLight = LineJAnimate.AngleLight * -1;
		LineJSubSet.animate({transform: "r" + LineEAnimate.AngleLight * animateAging + "," + LineEAnimate.Anchor + "r" + LineFAnimate.AngleLight * animateAging + "," + LineFAnimate.Anchor + "r" + LineHAnimate.AngleLight * animateAging + "," + LineHAnimate.Anchor + "r" + LineJAnimate.AngleLight * animateAging + "," + LineJAnimate.Anchor }, animatePitch, "<>",  function(){
			if(animating){
				LineJSubSetMove();
			}
		});
	}
	$(".RemoveBrand").click(function(event){
		bootbox.confirm("Are you sure want to remove brand?", function(result){
			if(result){
				$.ajax({
					url: "/brand/" + $(event.target).data("brand-key"),
					type: "DELETE",
					success: function(result) {
						window.location = "/Brands";
					}
				});
			}
		});
	});
	$(".RemoveFood").click(function(event){
		bootbox.confirm("Are you sure want to remove food?", function(result){
			if(result){
				$.ajax({
					url: "/food/" + $(event.target).data("food-key"),
					type: "DELETE",
					success: function(result) {
						window.location = "/Brands";
					}
				});
			}
		});
	});
	$(".RemoveRestaurent").click(function(event){
		bootbox.confirm("Are you sure want to remove restaurent?", function(result){
			if(result){
				$.ajax({
					url: "/restaurent/" + $(event.target).data("restaurent-key"),
					type: "DELETE",
					success: function(result) {
						window.location = "/Brands";
					}
				});
			}
		});
	});
});