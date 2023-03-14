import React from 'react';
import PlayerInterface from './PlayerInterface';
import { Player } from '../../Types';

const INIT_OPPONENT: Player = {
   name: 'Opponent',
   color: 'slate',
   ships: []
};

export default function Opponent() {
   return <PlayerInterface type="Opponent" player={INIT_OPPONENT} />;
}
