export type GameMatrix<T> = (T | undefined)[][]

export type PlayerMark = 'X' | 'O'

export type BoardState = GameMatrix<PlayerMark>

export type GameState = {
  boardState: BoardState
  currentPlayer: PlayerMark
  winner?: PlayerMark
}

/**
 * numbers represent row index and column index respectively
 */
export type CellCoords = [number, number]