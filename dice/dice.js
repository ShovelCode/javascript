function rollDice() {
	// Get the dice elements from the HTML
	var dice1 = document.getElementById("dice1");
	var dice2 = document.getElementById("dice2");

	// Generate random numbers between 1 and 6 for each dice
	var roll1 = Math.floor(Math.random() * 6) + 1;
	var roll2 = Math.floor(Math.random() * 6) + 1;

	// Update the dice elements with the new numbers
	dice1.innerHTML = roll1;
	dice2.innerHTML = roll2;
}
