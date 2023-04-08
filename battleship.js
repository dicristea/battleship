// Battleship Code

const Ship = (shipLength, shipHeight, collisions, hasSunk) => {
  const length = shipLength;
  const height = shipHeight;
  const sunk = hasSunk;
  let hits = collisions;

  const hit = () => {
    return (hits += 1);
  };
  return { length, height, hit, hits, sunk };
};

const BigShip = Ship(5, 5, 2, false);

console.log(BigShip.hits);
console.log(BigShip.hit());
console.log(BigShip.hits);

const Gameboard = (coords) => {
  let attackCoords = [...coords];

  const receiveAttack = (attackCoords) => {
    return true;
  };

  return { gameboard, receiveAttack };
};

const Player = () => {
  return { plays };
};
