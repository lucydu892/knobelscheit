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
  return [1,2,3,4,5,6,7,8,9];
}