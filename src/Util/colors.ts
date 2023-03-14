import { PlayerColor } from './../Types/index';

function getBackgroundColor(color: PlayerColor) {
   switch (color) {
      case 'red':
         return 'bg-red-500';
      case 'blue':
         return 'bg-blue-500';
      default:
         return 'bg-slate-500';
   }
}

export function getColorClass(color: PlayerColor) {
   return {
      background: getBackgroundColor(color)
   };
}
