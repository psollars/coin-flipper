(function(){
	const flipButton = document.getElementById("flip");
	let coin = ["",""]
	const messageBox = document.getElementById("messageBox");
	const tails = document.getElementById("tails");
	const heads = document.getElementById("heads");
	const coinSpin = document.getElementById("spin");

	tails.onclick = function() {
		flipACoin();
		checkGuess("tails", coin[0]);
		animation(coin);
	}

	heads.onclick = function() {
		flipACoin(heads);
		checkGuess("heads", coin[0]);
		animation(coin);
	}

	flipButton.onclick = function() {
		heads.style.display = "block";
		tails.style.display = "block";
		flipButton.style.display = "none";
		message("");
	}

	const flipACoin = function() {
		let randomFlip = Math.random()
		if (randomFlip < .5) {
			coin = ["heads", "tails"];
		} else {
			coin = ["tails", "heads"];
		}
		return coin;
	}

	const checkGuess = function(headsOrTailsGuess, headsOrTailsRandom) {
		if (headsOrTailsGuess === headsOrTailsRandom) {
			console.log("Your Guess: " + headsOrTailsGuess + " | Flip Result: " + headsOrTailsRandom);
			window.setTimeout(function() {
				message("It was " + headsOrTailsRandom + "<br/>You guessed right!");
				flipButton.style.display = "block";
			}, 2000);
		} else if (headsOrTailsGuess !== headsOrTailsRandom) {
			console.log("Your Guess: " + headsOrTailsGuess + " | Flip Result: " + headsOrTailsRandom);
			window.setTimeout(function() {
				message("It was " + headsOrTailsRandom + "<br/>You guessed wrong :(");
				flipButton.style.display = "block";
			}, 2000);
		} else {
			alert("something bad happened");
		}
	}

	const animation = function(coin) {
		coinSpin.style.display = "block";
		tails.style.display = "none";
		heads.style.display = "none";
		if (coin[0] === "heads") {
			window.setTimeout(function() {
				coinSpin.style.display = "none";
				heads.style.display = "block";
				tails.style.display = "none";
			}, 1500);
		} else if (coin[0] === "tails") {
			window.setTimeout(function() {
				coinSpin.style.display = "none";
				tails.style.display = "block";
				heads.style.display = "none";
			}, 1500);
		} else {
			alert("something bad happened");
		}
	}

	const message = function(messageToDisplay) {
		messageBox.innerHTML = messageToDisplay;
	}
}());
