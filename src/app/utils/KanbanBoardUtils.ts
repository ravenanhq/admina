export function generateRandomNumber(): number {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}
