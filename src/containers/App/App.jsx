import React from 'react';
import Styleguide from '../../__playground/styleguide';
import Transactions from '../Transactions/Transactions';
import { GlobalStyle } from '../../styled/GlobalStyle';
import { Header, Container } from '../../styled';
import { Logo } from '../../components';
import { theme } from '../../styled/theme';

export const App = () => {
	return (
		<div className="app">
			<GlobalStyle />
			<Header>
				<Container center>
					<Logo color={theme.colors.primaryDarkBlue} />
				</Container>
			</Header>
			<Transactions />
			<Styleguide />
		</div>
	);
};

export default App;
