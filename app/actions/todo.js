'use strict';

import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';

export const addTodo = createAction(types.ACTION_ADD_TODO, (title) => {
  return title;
});