export const borderService = {
  randomNumber : 0,
  generateRandomNumber() {
    this.randomNumber = Math.random();
    return this.randomNumber;
  },
};
