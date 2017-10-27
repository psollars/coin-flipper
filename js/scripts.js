	
	const flipButton = document.getElementById("flip");
	let randomCoinFlipResult = "";

	flipButton.onclick = function() {
		flipACoin();
		checkGuess(userGuess.value, randomCoinFlipResult);
	}

	flipButton.onkeydown = function(e) { // onkeydown is passing the event into the function
		if (e.key === 'Enter') { // we're looking to see if the user pressed the enter key
			flipACoin();
			checkGuess(userGuess.value, randomCoinFlipResult);
		}
	}

	const userGuess = document.getElementById("guess");

	const messageBox = document.getElementById("messageBox");

	function flipACoin() {
		let randomFlip = Math.random()
		if (randomFlip < .5) {
			console.log("heads");
			randomCoinFlipResult = "heads";
		} else {
			console.log("tails");
			randomCoinFlipResult = "tails";
		}
		return randomCoinFlipResult;
	}

	function checkGuess(headsOrTailsGuess, headsOrTailsRandom) {
		let cleanGuess = headsOrTailsGuess.trim()
		cleanGuess = cleanGuess.toLowerCase()
		if (cleanGuess === "heads") {
			console.log("you guessed heads");
			guessResult(cleanGuess, headsOrTailsRandom);
		} else if (cleanGuess === "tails") {
			console.log("you guessed tails");
			guessResult(cleanGuess, headsOrTailsRandom);
		} else
		alert("You need to guess \"Heads\" or \"Tails\".");
	}

	function guessResult(checkedGuess, result) {
		if (checkedGuess === result) {
			console.log(checkedGuess + " | " + result);
			message("It was " + result + "<br/>You guessed right!");
		} else if (checkedGuess !== result) {
			console.log(checkedGuess + " | " + result);
			message("It was " + result + "<br/>You guessed wrong :(");
		} else {
			message("something bad happened");
		}
	}

	function message(messageToDisplay) {
		messageBox.innerHTML = messageToDisplay;
	}

