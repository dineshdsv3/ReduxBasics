import React, { useState } from 'react';
import { buyCake } from '../Redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
	const [number, setNumber] = useState(1);
	return (
		<div>
			<h2>Cake container {props.noOfCakes}</h2>
			<input value={number} onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		noOfCakes: state.cake.noOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: (number) => dispatch(buyCake(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
