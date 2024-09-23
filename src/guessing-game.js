class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.currentGuess = this.min + Math.floor((this.max - this.min) / 2); // Начальное предположение
  }

  guess() {
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess; // Уменьшаем максимальное значение
    this.currentGuess = this.min + Math.floor((this.max - this.min) / 2); // Новое предположение
  }

  greater() {
    this.min = this.currentGuess + 1; // Увеличиваем минимальное значение
    this.currentGuess = this.min + Math.floor((this.max - this.min) / 2); // Новое предположение
  }
}

module.exports = GuessingGame;
