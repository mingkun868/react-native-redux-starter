'use strict';

import * as types from '../constants/ActionTypes';
import { handleActions } from 'redux-actions';

let initialState = {
  list: []
};

export default handleActions({
  [types.ACTION_ADD_TODO]: (state, action) => ({
    ...state,
    list: state.list.concat(action.payload)
  }),
}, initialState);