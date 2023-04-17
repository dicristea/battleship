// Battleship Code
import Gameboard from "./Gameboard.js";

let Gameboard1 = Gameboard("player1");

Gameboard1.createGameBoard();
Gameboard1.printGameboard();

const bigShipCoords = ["A1", "A2", "A3", "A4", "A5", "A6"];
const smallShipCoords = ["B0", "B1"];
const midShipCoords = ["C4", "D4", "E4", "F4"];

Gameboard1.placeShip(6, bigShipCoords);
Gameboard1.placeShip(2, smallShipCoords);
Gameboard1.placeShip(4, midShipCoords);

console.log("Placed Ships", Gameboard1.ships);

// Big Ship Attacks
Gameboard1.receiveAttack("A1");
Gameboard1.receiveAttack("A2");
Gameboard1.receiveAttack("A3");
Gameboard1.receiveAttack("A4");
Gameboard1.receiveAttack("A5");
Gameboard1.receiveAttack("A6");

// Small Ship Attacks
Gameboard1.receiveAttack("B0");
Gameboard1.receiveAttack("B1");
Gameboard1.receiveAttack("B2");

// Mid Ship Attacks
Gameboard1.receiveAttack("C4");
Gameboard1.receiveAttack("D4");
Gameboard1.receiveAttack("E4");
Gameboard1.receiveAttack("F4");

console.log(Gameboard1.missedAttacks);
