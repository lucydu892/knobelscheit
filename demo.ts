export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

console.log(formattedAddition(3, 2));

export function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(): number {
  return rollDie() + rollDie();
}

export function createBoard(): number[] {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export function flipNumber(board: number[],flip: number[]): number[] {
  return board.filter((n) => !flip.includes(n));
}

export function tryFlip(
    board: number[],
    numbers: number[],
    diceSum: number,
): number[] {
  const sum = numbers.reduce((a,b) => a + b, 0);
  if (sum !== diceSum) return board;
  return board.filter((n) => !numbers.includes(n));
}