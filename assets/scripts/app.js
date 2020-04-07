const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "designing",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "sql",
				weight: 8
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "react",
				weight: 10
			}, {
				text: "mongo",
				weight: 9
			}, {
				text: "web",
				weight: 15
			}, {
				text: "node",
				weight: 10
			},{
				text: "fullstack",
				weight: 12
			},{
				text: "express",
				weight: 8
			}

		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 200});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "convert ideas into apps.",
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

