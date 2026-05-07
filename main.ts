import {createBoard, hasPossibleMove, isGameFinish, rollDice, tryFlip} from "./demo.ts";

let board = createBoard();

let tries: number = 0;

console.log("Willkommen zu Knobelscheit");
const sum = rollDice();


while (!isGameFinish(board)) {
    tries++;
    console.log("Noch offen Zahlen: "  + board.join(" "));
    console.log("Du hast noch: " + sum + " gewürfelt");

    const eingabe = prompt("Welche Zahlen möchtest du umklappen (z.B. 2, 3):");


    if (eingabe) {
        const gewaehlteZahlen = eingabe.split(",").map((n) => Number(n.trim()));

        const neuesBoard = tryFlip(board, gewaehlteZahlen, sum);

        if (neuesBoard.length < board.length) {
            console.log("Zahlen wurden umgeklappt");
            board = neuesBoard;
        } else {
            console.log("Die Summe passt nicht oder Zahlen sind schon umgeklappt");

        }
    }
}

if (!hasPossibleMove(board,sum)) {
    console.log("Du hast " + tries + " gebraucht");
    console.log("Du hast verloren!");
}

console.log("Gewonnen")
