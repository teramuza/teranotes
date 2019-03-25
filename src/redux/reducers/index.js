import { combineReducers } from 'redux';

// import todos from './todospath'
import auth from './auth'
import notes from './notes'

const appReducer = combineReducers({
	//todos here
	auth,
	notes
});

export default appReducer;