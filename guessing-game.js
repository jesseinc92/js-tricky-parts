function guessingGame() {
  const number = Math.floor(Math.random() * 100);
  let guesses = 0;
  let won = false;
  return function (guess) {
    if (won) {
      return 'The game is over, you already won!';
    } else if (guess < number) {
      guesses++;
      return `${guess} is too low!`;
    } else if (guess > number) {
      guesses++;
      return `${guess} is too high!`;
    } else if (guess === number) {
      guesses++;
      won = true;
      return `You win! You found ${number} in ${guesses} guesses.`;
    }
  }
}

module.exports = { guessingGame };
