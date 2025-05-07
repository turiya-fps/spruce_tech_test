import React from 'react'
import { PlayerMark } from '../types'

export interface CellProps {
  value: PlayerMark | undefined
  onClick: () => void
}

export const Cell: React.FC<CellProps> = ({ value, onClick }) => (
  <button 
    className='border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex'
    onClick={onClick}
  >
    {value}
  </button>
)