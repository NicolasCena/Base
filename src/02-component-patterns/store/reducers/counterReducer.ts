import { INCREMENT, DECREMENT } from '../actions/actionTypes';
import { CounterAction } from '../actions/counterActions';
import { CounterState } from '../../interfaces/state.interface';

const initialState: CounterState = {
  value: 0
};

const counterReducer = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
