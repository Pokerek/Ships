export type Position = 'first' | 'last' | 'center';
export type Side = 'left' | 'right' | 'top' | 'bottom' | 'center';
export type Figure = 'rectangle' | 'circle';
export type Direction = 'horizontal' | 'vertical';
export type ShipTypes =
   | 'Bug'
   | 'Cruiser'
   | 'Submarine'
   | 'Destroyer'
   | 'Battleship'
   | 'AircraftCarrier';

export type Cords = {
   x: number;
   y: number;
};

export type ShipPart = {
   id: string;
   hit: boolean;
   figure: Figure;
   cords: Cords | null;
   position: Position;
};

export type ShipModel = {
   id: string;
   name: string;
   direction: Direction;
   parts: ShipPart[];
};

export type RowPart = { part: ShipPart; side: Side };
export type BoardField = null | RowPart;

export type Interface = 'Player' | 'Opponent';

export type PlayerColor = 'red' | 'blue' | 'slate';

export type Player = {
   name: string;
   color: PlayerColor;
   ships: ShipModel[];
};

export type Binary = 0 | 1;

export type Game = {
   player: Player;
   handleEndTurn: () => void;
   handleUpdatePlayer: (id: Binary, player: Player) => void;
};
