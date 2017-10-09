
import _ from 'lodash';

import {
  HOTARTICLES_INVALID,
  HOTARTICLES_REQUESTING,
  HOTARTICLES_FAILURE,
  HOTARTICLES_SUCCESS,
} from './action';

const initialState = {
  readyStatus: HOTARTICLES_INVALID,
  err: null,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOTARTICLES_REQUESTING:
      return _.assign({}, state, { readyStatus: HOTARTICLES_REQUESTING });
    case HOTARTICLES_FAILURE:
      return _.assign({}, state, {
        readyStatus: HOTARTICLES_FAILURE,
        err: action.err,
      });
    case HOTARTICLES_SUCCESS:
      return _.assign({}, state, {
        readyStatus: HOTARTICLES_SUCCESS,
        list: action.data,
      });
    default:
      return state;
  }
};
