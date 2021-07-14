import {createStore, applyMiddleware} from 'redux';

import {
  APPLY_BACKGROUND,
  CHANGE_INPUT,
  HIDE_MODAL,
  IS_LOADING,
  SET_ORGS,
  SHOW_MODAL
} from './action-types';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

function reducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return Object.assign({}, state, { inputs : { ... state.inputs, [action.inputId]: action.payload }});
    case HIDE_MODAL:
      return Object.assign({}, state, { modals : { ...state.modals, [action.payload]: false }});
    case IS_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    case SET_ORGS:
      return Object.assign({}, state, { orgs: action.payload });
    case SHOW_MODAL:
      return Object.assign({}, state, { modals : { ...state.modals, [action.payload]: true }});
    default:
      return state;
  }
}

export default createStore(reducer, {
    // This is the default state.
    loading: false,
    inputs: {} 
	},
	applyMiddleware(logger, crashReporter)
);
