import { GameState, CellPosition } from "./types";

export const resetGameState = (): GameState => ({
  boardState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ],
  currentPlayer: 'X'
})

export const makeMove = (
  currentGameState: GameState,
  moveIndex: CellPosition
): GameState => {
  const { rowIndex, colIndex } = moveIndex

  if(currentGameState.boardState[rowIndex][colIndex] !== undefined) return currentGameState

  const nextBoardState = [...currentGameState.boardState.map(row => [...row])]
  nextBoardState[rowIndex][colIndex] = currentGameState.currentPlayer

  const nextPlayer = currentGameState.currentPlayer === 'X' ? 'O' : 'X'

  return {
    boardState: nextBoardState,
    currentPlayer: nextPlayer
  }
}