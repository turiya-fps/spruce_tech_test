import { GameState, CellPosition, BoardState, PlayerMark } from "./types";

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

  const nextPlayer = currentGameState.currentPlayer === 'X' ? 'O' : 'X'

  return {
    boardState: nextBoardState,
    currentPlayer: nextPlayer
  }
}

export const getPlayerPositions = (boardState: BoardState, player: PlayerMark): CellPosition[] => {
  const currentPlayerCellPositions: CellPosition[] = []
  boardState.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if(col === player) {
        currentPlayerCellPositions.push([rowIndex, colIndex])
      }
    })
  })
  return currentPlayerCellPositions
}

export const isGameWon = (boardState: BoardState, currentPlayer: PlayerMark): boolean => {
  const cellPositions = getPlayerPositions(boardState, currentPlayer)
  console.log(`Player ${currentPlayer} has: ${JSON.stringify(cellPositions)}`)
  if (cellPositions.length < 3) return false;
  const rows = cellPositions.map(pos => pos[0])
  const columns = cellPositions.map(pos => pos[1])
  for (let i = 0; i < rows.length; i++) {
    if (columns.join('') === rows[i].toString().repeat(boardState.length)) return true
    if (rows.join('') === columns[i].toString().repeat(boardState.length)) return true
  }
  return false
}

export const getPositiveDiagonalPositions = (
  boardDimension: number = 3,
  targetLength: number = 3) => {

}