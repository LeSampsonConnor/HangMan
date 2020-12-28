class Person {
	/**
	 *
	 * @param {array} bodyParts - array of strings ["head", "body, etc"]
	 */
	constructor(bodyParts) {
		this.bodyParts = bodyParts;
	}

	removeBodyPart() {
		this.bodyParts.pop();
		this.displayBody();
	}

	isDead() {
		if (this.bodyParts.length) {
			return false;
		} else {
			return true;
		}
	}

	displayBody() {
		let bodyHTML = ``;
		this.bodyParts.map((bodyPart, index) => {
			bodyHTML += `<li class="bodyPart">  ${bodyPart}  </li>`;
		});
		document.getElementById('body').innerHTML = bodyHTML;
	}
}
