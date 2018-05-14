import {ADD_MARKERS} from '../actions/types';
const initialState={
  items:[],
  item:{}
}

export default function(state=initialState,action) {

  switch (action.type) {
    case ADD_MARKERS:

    default: return state;

  }
}
