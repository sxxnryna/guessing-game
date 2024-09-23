class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.currentGuess = Math.floor((min + max) / 2); // Начальный предположение
  }

  guess() {
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess; // Уменьшаем максимальное значение
    this.currentGuess = Math.floor((this.min + this.max) / 2); // Новое предположение
  }

  greater() {
    this.min = this.currentGuess; // Увеличиваем минимальное значение
    this.currentGuess = Math.floor((this.min + this.max) / 2); // Новое предположение
  }
}

module.exports = GuessingGame; // Экспортируем класс
