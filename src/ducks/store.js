import {createStore, applyMiddleware} from 'redux';

import {
  APPLY_BACKGROUND,
  CHANGE_INPUT
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
    case APPLY_BACKGROUND:
      return Object.assign({}, state, { backgroundColor: action.payload });
    case CHANGE_INPUT:
      return Object.assign({}, state, { backgroundColorValue: action.payload });
    default:
      return state
  }
}

export default createStore(reducer, {
    // This is the default state.
    backgroundColor: 'lightgrey',
    backgroundColorValue: ''
	},
	applyMiddleware(logger, crashReporter)
);
