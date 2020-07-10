import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeContainer from './Components/CakeContainer';
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import HookIceCreamContainer from './Components/HookIceCreamContainer';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>
					<HookIceCreamContainer />
					<CakeContainer />
					<HooksCakeContainer />
				</h1>
			</div>
		</Provider>
	);
}

export default App;
