import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeContainer from './Components/CakeContainer';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>
					<CakeContainer />
				</h1>
			</div>
		</Provider>
	);
}

export default App;
