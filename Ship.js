const Ship = (shipLength, coords) => {
  const length = shipLength;
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const getHits = () => hits;

  const isSunk = () => hits === length;

  return { length, coords, hit, getHits, isSunk };
};

export default Ship;
