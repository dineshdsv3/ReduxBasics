import React from 'react';
import { buyCake } from '../Redux';
import { connect } from 'react-redux';

const  CakeContainer = (props) => {
	return (
		<div>
			<h2>Cake container {props.noOfCakes}</h2>
			<button onClick={props.buyCake}>Buy cake</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		noOfCakes: state.cake.noOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
