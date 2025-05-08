import { GameState, CellCoords, BoardState, PlayerMark } from "./types";
import { areSubArrayCoordsIncluded, getValidNegativeDiagonalStreaks, getValidPositiveDiagonalStreaks, isBoardFull } from "./utils";

export const resetGameState = (): GameState => ({
  boardState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ],
  currentPlayer: 'X',
  gameOver: false,
})

export const makeMove = (
  currentGameState: GameState,
  moveIndex: CellCoords
): GameState => {
  if (currentGameState.winner) return {
    ...currentGameState
  }

  const [ rowIndex, colIndex ] = moveIndex

  if(currentGameState.boardState[rowIndex][colIndex] !== undefined) return currentGameState

  const nextBoardState = [...currentGameState.boardState.map(row => [...row])]
  nextBoardState[rowIndex][colIndex] = currentGameState.currentPlayer

  if (isGameWon(nextBoardState, currentGameState.currentPlayer)) {
    return {
      ...currentGameState,
      boardState: nextBoardState,
      winner: currentGameState.currentPlayer,
    }
  }

  if (isBoardFull(nextBoardState)) return {
    ...currentGameState,
    boardState: nextBoardState,
    gameOver: true
  }

  const nextPlayer = currentGameState.currentPlayer === 'X' ? 'O' : 'X'

  return {
    boardState: nextBoardState,
    currentPlayer: nextPlayer,
    gameOver: false
  }
}

export const getPlayerCellPositions = (boardState: BoardState, player: PlayerMark): CellCoords[] => {
  const currentPlayerPositions: CellCoords[] = []
  boardState.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if(col === player) {
        currentPlayerPositions.push([rowIndex, colIndex])
      }
    })
  })
  return currentPlayerPositions
}

export const isGameWon = (boardState: BoardState, currentPlayer: PlayerMark): boolean => {
  const playerCellPositions = getPlayerCellPositions(boardState, currentPlayer)
  console.log(`Player ${currentPlayer} has: ${JSON.stringify(playerCellPositions)}`)
  if (playerCellPositions.length < 3) return false;
  const rows = playerCellPositions.map(pos => pos[0])
  const columns = playerCellPositions.map(pos => pos[1])

  // very simple logic will suffice for 3x3 board
  for (let i = 0; i < rows.length; i++) {
    if (columns.join('') === rows[i].toString().repeat(boardState.length)) return true
    if (rows.join('') === columns[i].toString().repeat(boardState.length)) return true
  }
  if (checkForDiagonalStreaks(playerCellPositions)) return true
  return false
}

export const checkForDiagonalStreaks = (
  cellCoords: CellCoords[],
): boolean => {
  const validPositiveDiagonalStreaks = getValidPositiveDiagonalStreaks()[0]
  if (areSubArrayCoordsIncluded(cellCoords, validPositiveDiagonalStreaks)) return true
  const validNegativeDiagonalStreaks = getValidNegativeDiagonalStreaks()[0]
  if (areSubArrayCoordsIncluded(cellCoords, validNegativeDiagonalStreaks)) return true
  return false
}

