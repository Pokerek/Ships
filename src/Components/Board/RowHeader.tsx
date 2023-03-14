import React from 'react';
import Row from './Row';
import Field from './Field';

export default function RowHeader() {
   return (
      <Row>
         <>
            <Field text=" " />
            <Field text="A" />
            <Field text="B" />
            <Field text="C" />
            <Field text="D" />
            <Field text="E" />
            <Field text="F" />
            <Field text="G" />
            <Field text="H" />
            <Field text="I" />
            <Field text="J" />
         </>
      </Row>
   );
}
