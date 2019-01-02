import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Transactions } from './Transactions';
import { mount } from 'enzyme';
import { CardTransaction } from '../../styled';

afterEach(() => {
	jest.clearAllMocks();
	jest.restoreAllMocks();
});

describe('Transactions', () => {
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

	it('renders Transactions', () => {
		const tree = renderer.create(<Transactions {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('switches stage', () => {
		const wrapper = mount(<Transactions {...props} />);
		setTimeout(() => {
			wrapper
				.find('button')
				.first()
				.simulate('click');
			expect(getTransactions).toHaveBeenCalledTimes(1);
		}, 200);
	});

	it('shows prev transactions page', () => {
		const wrapper = mount(<Transactions {...props} />);
		setTimeout(() => {
			wrapper
				.find('.prev-page')
				.first()
				.simulate('click');
			expect(getTransactions).toHaveBeenCalledTimes(1);
			expect(wrapper.state().page).toEqual(1);
		}, 200);
	});

	it('shows next transactions page', () => {
		const transactions = [
			{ txid: '212122112121', value: '1222000000000', currency: 'ETH' },
			{ txid: '242343432332', value: '393832323', currency: 'BTC' },
			{ txid: '992392383332', value: '32323232', currency: 'LTC' }
		];
		const state = {
			page: 1,
			perPage: 2
		};
		const wrapper = mount(
			<Transactions {...props} transactions={transactions} />
		);
		wrapper.setState(state);
		setTimeout(() => {
			wrapper
				.find('.next-page')
				.first()
				.simulate('click');
			expect(getTransactions).toHaveBeenCalledTimes(1);
			expect(wrapper.state().page).toEqual(2);
			expect(wrapper.state().perPage).toEqual(2);
		}, 200);
	});

	it('handles items per page', () => {
		const transactions = [
			{ txid: '212122112121', value: '1222000000000', currency: 'ETH' },
			{ txid: '242343432332', value: '393832323', currency: 'BTC' },
			{ txid: '992392383332', value: '32323232', currency: 'LTC' }
		];
		const state = {
			page: 1,
			perPage: 9
		};
		const wrapper = mount(
			<Transactions {...props} transactions={transactions} />
		);
		wrapper.setState(state);
		setTimeout(() => {
			wrapper
				.find('.per-page')
				.first()
				.simulate('change', { target: { value: 99 } });
			expect(wrapper.state().perPage).toEqual(99);
		}, 200);
	});

	it('filters transactions by stage', () => {
		const transactions = [
			{
				txid: '212122112121',
				value: '1222000000000',
				currency: 'ETH',
				stage: 'ico'
			},
			{
				txid: '723939839833',
				value: '44399993333',
				currency: 'ETH',
				stage: 'ico'
			},
			{
				txid: '242343432332',
				value: '393832323',
				currency: 'BTC',
				stage: 'preIco'
			},
			{
				txid: '992392383332',
				value: '32323232',
				currency: 'LTC',
				stage: 'finalIco'
			}
		];
		const state = {
			page: 1,
			perPage: 3
		};
		const wrapper = mount(
			<Transactions {...props} transactions={transactions} stage="ico" />
		);
		wrapper.setState(state);
		setTimeout(() => {
			const cards = wrapper
				.find('.transactions-list')
				.find(CardTransaction);
			expect(cards.length).toEqual(2);
		}, 200);
	});
});
