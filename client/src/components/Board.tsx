import React from "react";
import { BoardState } from "../types";

export interface BoardProps {
  boardState: BoardState
}

export const Board: React.FC<BoardProps> = ({ boardState }) => (
  <div className='flex flex-col gap-1'>
  {boardState.map((row, i) => (
    <div key={`row-${i}`} className='flex gap-1'>
      {row.map(() => (
        <button 
          className='border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex'
        />
      ))}
    </div>
  ))}
</div>
)