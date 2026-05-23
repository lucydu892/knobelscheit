import {assertEquals} from "@std/assert";
import {formattedAddition, rollDie, rollDice, createBoard} from "./demo.ts";

Deno.test("3 + 5 = 8", function addTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = formattedAddition(a, b);

  // Assert
  assertEquals(actual, "3 + 5 = 8");
});

Deno.test("3 + -5 = -2", function addTest() {
  // Given
  const a = 3;
  const b = -5;

  // When
  const actual = formattedAddition(a, b);

  // Then
  assertEquals(actual, "3 + -5 = -2");
});

Deno.test("Würfel liefert eine Zahl zwischen 1 bis 6", function () {
  const result = rollDie();
  const actual = result >= 1 && result <= 6;
  assertEquals(actual, true);
})

Deno.test("Zwei Würfel ergeben eine Summe zwischen 2 und 12", function () {
  const result = rollDice();
  const actual = result >= 2 && result <= 12;
  assertEquals(actual, true);
})

Deno.test("Knobelscheit startet mit Board 1 bis 9", function () {
  const board = createBoard();
  assertEquals(board, [1,2,3,4,5,6,7,8,9])
})