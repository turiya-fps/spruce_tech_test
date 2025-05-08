import React, { useState } from 'react'
import { Board } from './components/Board'
import { GameState, CellPosition } from './types'
import { makeMove, resetGameState } from './gameLogic'

export const Main = () => {
  const [gameState, setGameState] = useState<GameState>(resetGameState())

  const handleCellClick = (cellPosition: CellPosition): void => {
    setGameState(currentState => makeMove(currentState, cellPosition))
  }

  const getGameStatus = () => {
    if (gameState.winner) return `Winner is ${gameState.winner}!`
    return `Next move: ${gameState.currentPlayer}`
  }

  return <div className='flex flex-col mt-10 items-center gap-10'>
    <div className='font-bold text-2xl'>Tic Tac Toe</div>
    <div>{getGameStatus()}</div>
    <Board
      boardState={gameState.boardState}
      onCellClick={handleCellClick}
    />
  </div>
}
