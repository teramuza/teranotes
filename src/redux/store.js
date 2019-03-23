import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import { createLogger } from 'redux-logger';

import reducers from './reducers'

// const logger = createLogger({});

const store = createStore(
	reducers,
	applyMiddleware(
	    // logger,
	    promiseMiddleware
	)
);

export default store;