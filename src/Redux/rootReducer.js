import { combineReducers } from 'redux';
import cakeReducer from './Cakes/cakeReducer';
import icecreamReducer from './Icecream/iceCreamReducer';
import postsReducer from './AsyncGetPosts/postReducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: icecreamReducer,
	post: postsReducer
});

export default rootReducer;
