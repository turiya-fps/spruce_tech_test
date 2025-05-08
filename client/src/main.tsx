import React, { useState } from 'react'
import { Board } from './components/Board'
import { GameState, CellCoords } from './types'
import { makeMove, resetGameState } from './gameLogic'

export const Main = () => {
  const [gameState, setGameState] = useState<GameState>(resetGameState())

  const handleCellClick = (cellCoords: CellCoords): void => {
    setGameState(currentState => makeMove(currentState, cellCoords))
  }

  const handleReset = (): void => {
    setGameState(resetGameState())
  }

  const renderGameStatus = (): JSX.Element => {
    if (gameState.winner) return <div className='text-lg font-semibold'>Winner is {gameState.winner}!</div>
    if (gameState.gameOver) return <div className='text-lg font-semibold'>Game Over</div>
    return <div className='text-lg'>Next move: {gameState.currentPlayer}</div>
  }

  return <div className='flex flex-col mt-10 items-center gap-10'>
    <div className='font-bold text-2xl'>Tic Tac Toe</div>
    {renderGameStatus()}
    <Board
      boardState={gameState.boardState}
      onCellClick={handleCellClick}
    />
      {(gameState.gameOver || gameState.winner) && (
        <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleReset}
        >
          New Game
        </button>
      )}
  </div>
}
