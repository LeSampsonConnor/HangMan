let person = new Person(['😐', '💪🏻', '👕', '🤳', '👖', '👟']);
let game = new Game(
	['Coding is Awesome', 'Coding is Great', 'Coding is EASY'],
	person
);

document.getElementById('btn__reset').addEventListener('click', (e) => {
	game.startGame();
});

document.addEventListener('keydown', (e) => {
	game.handleInteraction(e);
});
