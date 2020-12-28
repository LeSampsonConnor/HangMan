class Phrase {
	/**
	 * @param {string} phrases - the phrase to show
	 */
	constructor(phrase) {
		this.phrase = phrase;
	}

	checkForMatch(letter) {
		if (this.phrase.toLowerCase().includes(letter.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	}

	displayPhrase() {
		let phraseHTML = '';
		let characters = this.phrase.split('');
		console.log('Character: ', characters);
		characters.map((character) => {
			if (character === ' ') {
				phraseHTML += `<li class="space"> </li>`;
			} else {
				phraseHTML += `<li class="letter hide ${character.toLowerCase()}">${character}</li>`;
			}
		});

		document.getElementById('phrase').innerHTML = phraseHTML;
	}

	/**
	 * showMatchedLetter function
	 * @param {string} letter  - the letter the user chose on the screens
	 */
	showMatchedLetter(letter) {
		// letter = <li class="letter a show">A</li>
		let matchedLetters = document
			.getElementById('phrase')
			.getElementsByClassName(`${letter.toLowerCase()}`);
		console.log(matchedLetters);

		for (let i = 0; i < matchedLetters.length; i++) {
			matchedLetters[i].classList.replace('hide', 'show');
		}
	}

	checkForWin() {
		let letters = document
			.getElementById('phrase')
			.getElementsByClassName('hide');
		console.log(letters);
		if (letters.length) {
			return false;
		} else {
			return true;
		}
	}
}
