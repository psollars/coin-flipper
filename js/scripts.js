(function() {
	const flipButton = document.getElementById("flip");
	const messageBox = document.getElementById("messageBox");
	const tails = document.getElementById("tails");
	const heads = document.getElementById("heads");
	const coinSpin = document.getElementById("spin");

	tails.onclick = function() {
		let headsOrTails = flipACoin();
		animation(headsOrTails);
		checkGuess("tails", headsOrTails);
	};

	heads.onclick = function() {
		let headsOrTails = flipACoin();
		animation(headsOrTails);
		checkGuess("heads", headsOrTails);
	};

	flipButton.onclick = function() {
		heads.style.display = "block";
		tails.style.display = "block";
		flipButton.style.display = "none";
		message("");
	};

	const flipACoin = function() {
		let randomFlip = Math.random();
		if (randomFlip < .5) {
			return "heads";
		} else {
			return "tails";
		}
	};

	const checkGuess = function(headsOrTailsGuess, headsOrTailsResult) {
		if (headsOrTailsGuess === headsOrTailsResult) {
			console.log("Your Guess: " + headsOrTailsGuess + " | Flip Result: " + headsOrTailsResult);
			window.setTimeout(function() {
				message("It was " + headsOrTailsResult + "<br/>You guessed right!");
				flipButton.style.display = "block";
			}, 2000);
		} else if (headsOrTailsGuess !== headsOrTailsResult) {
			console.log("Your Guess: " + headsOrTailsGuess + " | Flip Result: " + headsOrTailsResult);
			window.setTimeout(function() {
				message("It was " + headsOrTailsResult + "<br/>You guessed wrong :(");
				flipButton.style.display = "block";
			}, 2000);
		} else {
			alert("something bad happened");
		}
	};

	const animation = function(headsOrTails) {
		coinSpin.style.display = "block";
		tails.style.display = "none";
		heads.style.display = "none";
		if (headsOrTails === "heads") {
			window.setTimeout(function() {
				coinSpin.style.display = "none";
				heads.style.display = "block";
				tails.style.display = "none";
			}, 1500);
		} else if (headsOrTails === "tails") {
			window.setTimeout(function() {
				coinSpin.style.display = "none";
				tails.style.display = "block";
				heads.style.display = "none";
			}, 1500);
		} else {
			alert("something bad happened");
		}
	};

	const message = function(messageToDisplay) {
		messageBox.innerHTML = messageToDisplay;
	};
}());
