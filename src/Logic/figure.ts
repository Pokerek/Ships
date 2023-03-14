import { Figure, Side } from '../Types';

const INIT_CLASS =
   'w-full h-full bg-slate-600 flex justify-center items-center';

function getCircle(side: Side): string {
   let sideClass;
   switch (side) {
      case 'top':
         sideClass = 'rounded-t-full';
         break;
      case 'right':
         sideClass = 'rounded-r-full';
         break;
      case 'bottom':
         sideClass = 'rounded-b-full';
         break;
      case 'left':
         sideClass = 'rounded-l-full';
         break;
      default:
         sideClass = 'rounded-full';
   }
   return `${INIT_CLASS} ${sideClass}`;
}

function getRectangle(side: Side): string {
   let sideClass;
   switch (side) {
      case 'top':
         sideClass = 'rounded-t-xl';
         break;
      case 'right':
         sideClass = 'rounded-r-xl';
         break;
      case 'bottom':
         sideClass = 'rounded-b-xl';
         break;
      case 'left':
         sideClass = 'rounded-l-xl';
         break;
      default:
         sideClass = 'rounded-none';
   }
   return `${INIT_CLASS} ${sideClass}`;
}

export function getFigure(figure: Figure, side: Side) {
   switch (figure) {
      case 'rectangle':
         return getRectangle(side);
      case 'circle':
         return getCircle(side);
      default:
         return getRectangle('center');
   }
}
