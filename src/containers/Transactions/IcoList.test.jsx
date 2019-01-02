import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { IcoList } from './IcoList';

describe('IcoList', () => {
	const getTransactions = jest.fn();
	const transactions = [];
	const stage = 'all';
	const loading = false;
	const prices = {
		fetched: moment(new Date()).format('DD.MM.YY HH:mm:ss')
	};
	const props = {
		getTransactions,
		transactions,
		stage,
		loading,
		prices
	};

	it('renders IcoList', () => {
		const tree = renderer.create(<IcoList {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
