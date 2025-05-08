import { BoardState, CellCoords } from "./types";

/**
 * Returns all valid ascending diagonal streaks for a standard 3x3 board
 */
export const getValidPositiveDiagonalStreaks = (): CellCoords[][] => {
  // hardcode for now, can be mathematically generated for a dynamic board size
  return [
    [
      [0,2],[1,1],[2,0],
    ],
  ]
}

/**
 * Returns all valid descending diagonal streaks for a standard 3x3 board
 */
export const getValidNegativeDiagonalStreaks = (): CellCoords[][] => {
  // hardcode for now, can be mathematically generated for a dynamic board size
  return [
    [
      [0,0],[1,1],[2,2],
    ],
  ]
}

/**
 * Checks if an array contains all the elements of a subarray (unordered)
 */
export const areSubArrayCoordsIncluded = (
  array: CellCoords[], subArray: CellCoords[]
): boolean => {
  return subArray.every((subPair) => {
    return array.some(pair => areCellCoordsEqual(subPair, pair));
  });
};

/**
 * Deeply compares two numeric tuples
 */
const areCellCoordsEqual = (pair1: CellCoords, pair2: CellCoords) => {
  return pair1[0] === pair2[0] && pair1[1] === pair2[1];
};


export const isBoardFull = (boardState: BoardState): boolean => {
  let emptyCount = 0
  boardState.forEach((row) => {
    row.forEach((cell) => {
      if (cell === undefined) emptyCount++
    })
  })
  return emptyCount === 0
}