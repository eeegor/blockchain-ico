import React from 'react';
import Styleguide from '../../__playground/styleguide';
import Transactions from '../Transactions/Transactions';
import { GlobalStyle } from '../../styled/GlobalStyle';

export const App = () => {
	return (
		<div className="app">
			<GlobalStyle />
			<Transactions />
			<Styleguide />
		</div>
	);
};

export default App;
