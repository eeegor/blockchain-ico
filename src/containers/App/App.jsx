import React from 'react';
import Styleguide from '../../__playground/styleguide';
import { GlobalStyle } from '../../styled/GlobalStyle';

export const App = () => {
	return (
		<div className="app">
			<GlobalStyle />
			<Styleguide />
		</div>
	);
};

export default App;
