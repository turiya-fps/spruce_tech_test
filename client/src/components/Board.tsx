import React from "react";
import { BoardState } from "../types";
import { Cell } from "./Cell";

export interface BoardProps {
  boardState: BoardState
  onCellClick: (cellPosition) => void
}

export const Board: React.FC<BoardProps> = ({ boardState, onCellClick }) => (
  <div className='flex flex-col gap-1'>
  {boardState.map((row, rowIndex) => (
    <div key={`row-${rowIndex}`} className='flex gap-1'>
      {row.map((cell, colIndex) => (
        <Cell
          key={`cell-${rowIndex}-${colIndex}`}
          value={cell}
          onClick={() => onCellClick([rowIndex, colIndex])}
        />
      ))}
    </div>
  ))}
</div>
)