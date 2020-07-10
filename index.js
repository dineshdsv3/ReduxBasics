const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

const initialState = {
    noOfCakes:10
}

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy cake Action'
    }
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);
console.log("Initial State is ", store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state is ", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

