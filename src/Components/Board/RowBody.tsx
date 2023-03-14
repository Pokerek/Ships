import React, { useContext } from 'react';
import Row from './Row';
import Field from './Field';
import { Part } from '../Ships/Part';
import { BoardField } from '../../Types';
import { PlayerTypeContext } from '../Player/PlayerInterface';

type props = {
   header: string;
   row: BoardField[];
};

export default function RowBody({ header, row }: props) {
   const playerType = useContext(PlayerTypeContext);

   const fieldType = playerType === 'Player' ? 'sea' : 'empty';

   const fields = row?.map((field) => {
      if (field === null) return <Field type={fieldType} />;

      const { part, side } = field;
      return (
         <Field type={fieldType}>
            <Part
               key={part.id}
               figure={part.figure}
               hit={part.hit}
               side={side}
            />
         </Field>
      );
   });
   return (
      <Row>
         <>
            <Field key={header} text={header} />
            {...fields}
         </>
      </Row>
   );
}
