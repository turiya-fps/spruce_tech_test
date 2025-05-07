export type GameMatrix<T> = (T | undefined)[][]

export type PlayerMark = 'X' | 'O'

export type BoardState = GameMatrix<PlayerMark>

export type GameState = {
  boardState: BoardState
  currentPlayer: PlayerMark
}

export type CellPosition = {
  rowIndex: number,
  colIndex: number,
}