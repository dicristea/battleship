import Ship from "./Ship.js";

const Gameboard = (playerName) => {
  const player = playerName;
  let missedAttacks = [];
  let ships = [];
  let sunkShips = [];

  const createGameBoard = () => {
    let array = [];
    let charCode = 65;
    for (let i = 0; i < 10; i++) {
      const arrayItem = [];

      let letter = String.fromCharCode(charCode);
      for (let j = 0; j < 10; j++) {
        arrayItem.push(letter + j);
      }
      charCode++;
      array.push(arrayItem);
    }
    console.log(array);
    return array;
  };

  const placeShip = (shipLength, coords) => {
    const newShip = Ship(shipLength, coords);
    return ships.push(newShip);
  };

  const receiveAttack = (attackCoords) => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].coords.find((shipCoords) => attackCoords === shipCoords)) {
        ships[i].hit();
        // console.log(ships[i].getHits());
        if (ships[i].isSunk()) {
          sunkShips.push(ships[i]);
          console.log(`Ship of length ${ships[i].length} has been sunk.`);
        }
        return console.log(getSunkShips());
      }
    }
    return missedAttacks.push(attackCoords);
  };

  const getSunkShips = () => {
    if (sunkShips.length === ships.length) {
      console.log("SUNK SHIPS", sunkShips);
      return "LOST ALL SHIPS. LOSER";
    }
    return sunkShips.length;
  };

  return {
    player,
    missedAttacks,
    ships,
    createGameBoard,
    placeShip,
    receiveAttack,
    getSunkShips,
  };
};

export default Gameboard;
