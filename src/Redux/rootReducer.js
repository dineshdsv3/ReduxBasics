import { combineReducers } from 'redux';
import iceCreamReducer from './Icecream/iceCreamReducer';
import cakeReducer from './Cakes/cakeReducer';
import icecreamReducer from './Icecream/iceCreamReducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: icecreamReducer,
});

export default rootReducer;
