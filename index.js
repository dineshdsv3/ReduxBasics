const redux = require('redux');
const reduxLogger  = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";

const initialCakeState = {
    noOfCakes:10,
}

const initialIceCreamState = {
    noOfIcecreams: 50
}

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy cake Action'
    }
}
const buyIceCream = () => {
    return {
        type: BUY_ICECREAMS,
        info: 'Buy Ice creams'
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            return {
                ...state, noOfCakes: state.noOfCakes -1
            }
        }
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAMS: {
            return {
                ...state, noOfIcecreams: state.noOfIcecreams -1
            }
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})


const store = createStore(rootReducer,applyMiddleware(logger));
console.log("Initial State is ", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

