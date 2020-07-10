import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeContainer from './Components/CakeContainer';
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import HookIceCreamContainer from './Components/HookIceCreamContainer';
import ItemContainer from './Components/ItemContainer';
import PostContainer from './Components/PostContainer';
import PostContainerRefactor from './Components/PostContainerRefactor'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>
          {/* <ItemContainer cake/>
          <ItemContainer />
					<HookIceCreamContainer />
					<CakeContainer />
					<HooksCakeContainer /> */}
          <PostContainer />
		  {/* <PostContainerRefactor /> */}
				</h1>
			</div>
		</Provider>
	);
}

export default App;
