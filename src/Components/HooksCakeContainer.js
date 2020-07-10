import React, {useState} from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { buyCake } from '../Redux';

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch()
    const [num, setnum] = useState(1);
    return (
        <div>
            <h2>No. of Cakes(Hook) - {noOfCakes}</h2>
            <input value={num} onChange={(e) =>  setnum(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(num))}>Buy cake</button>            
        </div>
    )
}

export default HooksCakeContainer
