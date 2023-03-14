import { Figure, Side } from '../../Types';
import { getFigure } from '../../Logic/figure';

type Props = {
   hit: boolean;
   side: Side;
   figure: Figure;
};

export function Part({ figure, side, hit }: Props) {
   const color = hit ? 'bg-red-600' : 'bg-slate-300';
   const hitBox = <div className={`w-1/2 h-1/2 rounded-full ${color}`}></div>;

   const partClass = getFigure(figure, side);

   return <div className={partClass}>{hitBox}</div>;
}
