export type GameMatrix<T> = (T | undefined)[][]

export type PlayerMark = 'X' | 'O'

export type BoardState = GameMatrix<PlayerMark>