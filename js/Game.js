class Game {
	constructor(phrases, person) {
		this.phrases = phrases;
		this.person = person;
		this.activePhrase = null;
		this.chosenLetters = [];
	}

	startGame() {
		document.getElementById('overlay').style.display = 'none';
		//document.getElementById('game_over_message').style.display = 'none';
		this.person.displayBody();
		this.getRandomPhrase(this.phrases);
		this.activePhrase.displayPhrase();
	}

	getRandomPhrase(phrasesArray) {
		let phrase =
			phrasesArray[Math.ceil(Math.random() * phrasesArray.length - 1)];
		this.activePhrase = new Phrase(phrase);
	}

	handleInteraction(keyObject) {
		let letter = keyObject.key;
		if (!this.chosenLetters.includes(letter)) {
			this.chosenLetters.push(letter);
			this.showChosenLetters();
		} else {
			return;
		}

		if (this.activePhrase.checkForMatch(letter)) {
			this.activePhrase.showMatchedLetter(letter);
			let win = this.activePhrase.checkForWin();
			if (win) {
				this.gameOver(true);
			}
		} else {
			this.person.removeBodyPart();
			let dead = this.person.isDead();
			if (dead) {
				this.gameOver(false);
			}
		}
	}

	gameOver(won) {
		let overlay = document.getElementById('overlay');
		if (won) {
			let html =
				'<p style="text-align: center" id="game_over_message">You have won!</p>';
			overlay.insertAdjacentHTML('beforeend', html);
		} else {
			let html =
				'<p style="text-align: center" id="game_over_message">You have lost!</p>';
			overlay.insertAdjacentHTML('beforeend', html);
		}

		overlay.style.display = 'flex';
	}

	showChosenLetters() {
		let html = ``;

		this.chosenLetters.map((letter) => {
			html += `<li>${letter}</li>`;
		});

		document.getElementById('chosenLetters').innerHTML = html;
	}
}
