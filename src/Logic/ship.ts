import {
   Cords,
   Direction,
   Figure,
   ShipModel,
   ShipPart,
   ShipTypes,
   Position,
   Side
} from '../Types';

export function setShipCords(ship: ShipModel, startCords: Cords): ShipModel {
   const newParts = ship.parts.map((part, index) => {
      let newCords = { x: 0, y: 0 };

      if (ship.direction === 'horizontal') {
         newCords = { x: startCords.x + index, y: startCords.y };
      } else {
         newCords = { x: startCords.x, y: startCords.y + index };
      }

      return {
         ...part,
         cords: newCords
      };
   });

   return {
      ...ship,
      parts: newParts
   };
}

export function getSide(direction: Direction, position: Position): Side {
   switch (position) {
      case 'first':
         return direction === 'horizontal' ? 'left' : 'top';
      case 'last':
         return direction === 'horizontal' ? 'right' : 'bottom';
      default:
         return 'center';
   }
}

function createPart(figure: Figure, position: Position = 'center') {
   return {
      id: crypto.randomUUID(),
      hit: false,
      figure,
      cords: null,
      position
   };
}

export function createShip(
   direction: Direction,
   type: ShipTypes,
   name: string = type
): ShipModel {
   let parts: ShipPart[];

   switch (type) {
      case 'Cruiser':
         parts = createCruiser();
         break;
      case 'AircraftCarrier':
         parts = createAircraftCarrier();
         break;
      case 'Battleship':
         parts = createBattleship();
         break;
      case 'Destroyer':
         parts = createDestroyer();
         break;
      case 'Submarine':
         parts = createSubmarine();
         break;
      default:
         parts = createBug();
   }

   return {
      id: crypto.randomUUID(),
      name,
      direction,
      parts
   };
}

function createBug(): ShipPart[] {
   return [createPart('circle')];
}

function createCruiser(): ShipPart[] {
   return [createPart('rectangle', 'first'), createPart('circle', 'last')];
}

function createSubmarine(): ShipPart[] {
   return [
      createPart('rectangle', 'first'),
      createPart('rectangle'),
      createPart('circle', 'last')
   ];
}

function createDestroyer(): ShipPart[] {
   return [
      createPart('circle', 'first'),
      createPart('rectangle'),
      createPart('circle', 'last')
   ];
}

function createBattleship(): ShipPart[] {
   return [
      createPart('rectangle', 'first'),
      createPart('rectangle'),
      createPart('rectangle'),
      createPart('circle', 'last')
   ];
}

function createAircraftCarrier(): ShipPart[] {
   return [
      createPart('rectangle', 'first'),
      createPart('rectangle'),
      createPart('rectangle'),
      createPart('rectangle'),
      createPart('rectangle', 'last')
   ];
}
