//jQuery with Arrow Function
	/*	old way
		$(document).ready(function(){
			alert('test');
		})
	*/

$(document).ready(()=>{
	//jQuery Selector
		//Element Selector
			// $("p");
		//Class Selector
			//	$(".p");
		//Id Selector
			//	$("#p");

	//jQuery Method
		//Css Method
			//using camelCase
			$("h1").css({border: "1px solid black", fontSize: '1rem'});
			$(".layer-3 li").css({display: 'inline-block', margin: '10px'});

	//jQuery Filters
		//pseudo Class method
		$(".layer-1 h2:last-child").css({color: 'red'});
		$(".layer-1 ul:first").css({border: "1px solid blue"});
		$(".layer-1 ul:last").css({border: "1px solid red"});

		//not
			//filter, layer-1 not modified
		$("section:not('.layer-1')").css({border: '1px solid green'});

		//attribute filter
			//all class in div will be selected
			$('div[class]').css({border: '1px solid red'});

		//attribute with spesific value
			//select image with alt is equal with img-01
			$("img[alt=img-01]").css({border: '2px solid blue'});

	//jQuery Traversing
		//next
			//select next element/sibling from class layer-1
			$(".layer-1").next().css({boxShadow: '0px 0px 6px rgba(0,0,0,.4'});

		//prev
			//select previous element/sibling from class layer-2
			$(".layer-2").prev().css({backgroundColor: "grey"});

		//parent
			//select parent from element
			$(".main").parent().css({boxShadow: '0px 0px 16px rgba(0,0,0,.4'});

		//parents
			//select all parent from element
			$(".main").parents().css({border: '3px solid pink'});

		//children
			//select children from main element
			$(".layer-4").children().css({color: 'red'});

	//jQuery Chaining
			//chaining all target in 1 line
			$(".layer-5 h2").css({fontSize: "30px", color: 'red'}).next().css({color: 'blue'});

	// Adding & Changin Content
		let paragraph = "<p> Using append </p>";
		let paragraph2 = "<p> Using prepend </p>";
		let paragraph3 = "<p> Using after </p>";
		let newDiv = "<div> <p> New Div </p> </div>";
		let text = 'from script.js';
		/*
			.append()	-> adds content to bottom of the element
			.prepend()	-> adds content to top of the element
			.before()	-> adds content before the element
			.after()	-> adds content after the element
			.html()		-> change the while html of the element
			.text()		-> change the text of an element
		*/

		$(".layer-6").append(paragraph);
		$(".layer-6").prepend(paragraph);
		//using chain method
			// $(".layer-6").append(paragraph).prepend(paragraph2);

		$(".layer-6 div p").after(paragraph3);	

		//replace div with new div
			// $(".layer-6 div").html(newDiv);

		//replace text with new Text
			$(".layer-6 div p").text(text);

	//wrap and unwrap element
		//this wrap all elements section into div
		$("section").wrap("<div>");
		//this remove wrap
		$("section").unwrap("");
		//this wrap all elements section into single div
			// $("section").wrapAll("<div>");

	//removing content
		/*
			empty() 	-> empties the inner HTML of the elements, but the tag is exists
			remove()	-> removes the element completely
		*/

			//	$(".layer-7").empty();
			//	$(".layer-7").remove();

	//changing attribute
		// removeAttr()		-> remove attribute from elements
		// attr()			-> can read or set any attribute

		$(".layer-3 ul li:first-child img").removeAttr("alt");
		$(".layer-3 ul li:last-child img").attr("name","test");

	//CSS in jQuery
		//type 1
		/*
			$(".layer-7").css({
			"background-color": 'red',
			"height": '200',
			"box-shadow": "0px 0px 4px rgba(0,0,0,.5)"
		});
		*/

		//type 2 [using camel case if not using string]
		/*
			$(".layer-7").css({
				backgroundColor: 'red',
				height: '200',
				boxShadow: "0px 0px 4px rgba(0,0,0,.5)"
			});
		*/

	//Add or Removing Class
		/*
			removeClass()		-> remove class from elements
			addClass()			-> add class to elements
			toggleClass()		-> remove or add if class is exists in elements
		*/

		//add class with name new-item
		$(".layer-7 h2").addClass("new-item");
		//remove class with name item
		$(".layer-7 h2").removeClass("item");	
		//add class if don't exists or remove class if exists
		let btn = $(".btn");
		btn[0].onclick = function(){
			$(".layer-7").toggleClass("toggle");
			return false;
		}

	//Binding & Unbinding Event
		/*
			on()		-> binds an event to matched elements(s)
			off()		-> unbinds event from matched element(s)
		*/

		let myList = $(".layer-8 ul li");
		myList.on("click", function(){
			// this is meant to use or modified element
			$(this).css({backgroundColor:'red'});
			//to stop other with event
			myList.off("click");
		});

	//Events Helper
		$(".btn2").click(function(){
			alert("test");
			$(".btn2").off("click");
		})

	//Events Object
		$("*").on("click", function(e){
			console.log(e.target);
			//To stop event or just on click
			e.stopPropagation();
		})

	//Animation 
		$(".layer-8 .item").on("click", function(){
			$(this).animate({height: '100px', width: '200px'});
			//or we can set the timer or speed
				//1000 is meant 1 second
				// $(this).animate({height: '100px', width: '200px'}, 1000);
		})

	//Fading Elements
		/* 
			fadeIn()
			fadeOut()
			fadeTo()
		*/
		$(".layer-8 .btn3").on('click', function(){
			$(this).fadeOut();
			$(this).fadeIn();
		})

	//Show, Hide, Toggle Elements
		/*
			show()
			hide()
			toggle()
		*/
		$(".layer-8 .btn4").on('click', function(){
			// $(this).hide(); 
				//or with timer
					$(this).hide(1000); 
		})

		$(".layer-8 .btn5").on('click', function(){
			// $(this).hide(); 
				//or with timer
					$('.layer-8 .btn4').show(1000); 
		})

		$(".layer-8 .btn6").on('click', function(){
			// $(this).hide(); 
				//or with timer
					$('.layer-8 >  ul').toggle(1000); 
		})

	//Sliding Elements
		/*
			slideUp()
			slideDown()
			slideToggle()
		*/
		$(".btn7").on("click", function(){
			$(".layer-7").slideUp();
		});

		$(".btn8").on("click", function(){
			$(".layer-7").slideDown();
		});

		$(".btn9").on("click", function(){
			$(".layer-7").slideToggle();
		});

	//Fading Animation elements
		let allQuotes = $("blockquote");
		let currentQuote = 0;

		function changeQuote(){
			$(allQuotes[currentQuote]).fadeOut(200, function(){
				if(currentQuote == allQuotes.length - 1){
					currentQuote = 0;
				} else {
					currentQuote++;
				}

				$(allQuotes[currentQuote]).fadeIn(200);
			})
		}

		let quoteTimer = setInterval(changeQuote, 3000);

	//Using Plugins
		$(".rslides").responsiveSlides();
})