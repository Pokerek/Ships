import { useEffect, useState } from 'react';
import RowBody from './RowBody';
import RowHeader from './RowHeader';
import { BoardField, ShipModel } from '../../Types';
import { getSide } from '../../Logic/ship';

const INIT_BOARD = Array(10).fill(Array(10).fill(null));

type props = {
   ships: ShipModel[];
};

export default function Board({ ships }: props) {
   const [board, setBoard] = useState<BoardField[][]>(INIT_BOARD);

   useEffect(() => {
      const newBoard = board.map((row) => row.map((field) => field));
      ships?.forEach((ship) => {
         loadShip(ship, newBoard);
      });
      setBoard(newBoard);
   }, [ships]);

   function handleFieldClick(x: number, y: number) {
      if (board[y][x] === null) alert('empty');

      alert('You hit!');
   }

   return (
      <div className="flex flex-col items-center">
         <div className="w-max grid gap-1">
            <RowHeader />
            {board.map((row, index) => (
               <RowBody key={index} header={`${index + 1}`} row={row} />
            ))}
         </div>
      </div>
   );
}

function loadShip(ship: ShipModel, board: BoardField[][]) {
   ship.parts.forEach((part) => {
      if (part.cords) {
         const { x, y } = part.cords;
         board[y][x] = { part, side: getSide(ship.direction, part.position) };
      }
   });
}
