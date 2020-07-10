import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyIcecream } from '../Redux';

function HookIceCreamContainer() {
    const noOfIcecreams = useSelector(state => state.iceCream.noOfIceCream);
    console.log(noOfIcecreams)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>No of IceCreams - {noOfIcecreams}</h1>
            <button onClick={() => dispatch(buyIcecream())}>Buy Ice cream</button>
        </div>
    )
}

export default HookIceCreamContainer
