import { assertEquals } from "@std/assert";
import { formattedAddition, rollDice, rollDie, createBoard } from "./demo.ts";

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

Deno.test("Würfeln liefert einen Zahl zwischen 1 bis 6", function () {
  const result = rollDie();

  //when
  const actual = result >= 1 && result <= 6;

  //Then
  assertEquals(actual, true);
});

Deno.test("zwei würfel ergeben eine Summe zwischen 2 und 12", function () {
  const result = rollDice();

  //When
  const actual = result >= 2 && result <= 12;

  //Then
  assertEquals(actual, true);
});

Deno.test("Knobelscheit startet mit Board", function () {
  const board = createBoard();

  //Then
  assertEquals(board, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
