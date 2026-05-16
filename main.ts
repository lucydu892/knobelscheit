import {
  createBoard,
  hasPossibleMove,
  isGameFinish,
  rollDice,
  tryFlip,
} from "./demo.ts";

let board = createBoard();

let tries: number = 0;

console.log("Willkommen zu Knobelscheit");
let sum: number = 0;

while (!isGameFinish(board)) {
  tries++;
  sum = rollDice();
  console.log("Noch offen Zahlen: " + board.join(" "));
  console.log("Du hast noch: " + sum + " gewürfelt");

  if (!hasPossibleMove(board, sum)) {
    console.log("Keine mögliche Kombination mehr.");
    console.log("Du hast " + tries + " Würfe gebraucht.");
    console.log("Du hast verloren!");
    break;
  }

  const eingabe = prompt("Welche Zahlen möchtest du umklappen (z.B. 2, 3):");

  if (eingabe) {
    const gewaehlteZahlen = eingabe.split(",").map((n) => Number(n.trim()));

    const falscheEingabe = gewaehlteZahlen.some(
      (number) =>
        Number.isNaN(number) ||
        number < 1 ||
        number > 9 ||
        !board.includes(number),
    );

    if (falscheEingabe) {
      console.log("Bitte gib nur offene Zahlen zwischen 1 und 9 ein.");
    }

    const neuesBoard = tryFlip(board, gewaehlteZahlen, sum);

    if (neuesBoard.length < board.length) {
      console.log("Zahlen wurden umgeklappt");
      board = neuesBoard;
    } else {
      console.log("Die Summe passt nicht oder Zahlen sind schon umgeklappt");
    }
  }
}

if (isGameFinish(board)) {
  console.log("Du hast " + tries + " gebraucht");
  console.log("Gewonnen");
}
