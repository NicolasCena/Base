import React from "react";
import { State } from './interfaces/state.interface';

export const reducer = (state: State, action: { type: string; value: any; }) => {
    const newState = { ...state };
    switch (action.type) {
    case 'ADD_NUMBER':
        newState.valor = newState.valor + 1;
      break;

    default:
      break;
  }
};
