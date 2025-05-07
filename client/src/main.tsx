import React, { useState } from 'react'
import { Board } from './components/Board'
import { BoardState } from './types'

export const Main = () => {

  const blankBoard: BoardState = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ]

  const handleCellClick = (rowIndex: number, colIndex: number): void => {
    console.log(rowIndex, colIndex)
  }

  return <div className='flex flex-col mt-10 items-center gap-10'>
    <div className='font-bold text-2xl'>Tic Tac Toe</div>
    <Board
      boardState={blankBoard}
      onCellClick={handleCellClick}
    />
  </div>
}
