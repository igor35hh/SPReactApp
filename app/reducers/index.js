import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';

var reducers = combineReducers({
	userState: userReducer,
	widgetState: widgetReducer,
	searchLayoutState: searchLayoutReducer
});

export default reducers;