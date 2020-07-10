import React from 'react'
import {connect} from 'react-redux';
import { buyCake, buyIcecream } from '../Redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCream;

    return {
        item: itemState
    }
}

const mapDispacthToProps = (dispatch, ownProps) => {
    const dispathFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
    return {
        buyItem: dispathFunction
    }
}

export default connect(mapStateToProps,mapDispacthToProps)(ItemContainer)
