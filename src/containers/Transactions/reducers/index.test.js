import moment from 'moment';
import { actions } from '../actions';
import { transactionReducer } from '.';

describe('transaction reducer', () => {
	it('handles default state', () => {
		const nextState = transactionReducer({}, { type: 'UNKNOWN_ACTION' });
		expect(nextState).toEqual({});
	});

	it('handles get transactions', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_REQUEST
		});
		expect(nextState).toEqual({ errors: [] });
	});

	it('handles get transactions error', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_ERROR
		});
		expect(nextState).toEqual({
			errors: ['Could not fetch transactions']
		});
	});

	it('handles get transactions success', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_SUCCESS,
			payload: {
				data: [
					{
						value: 1,
						currency: 'ETH',
						txid: '2329332hu3huhu',
						address: '2332j3jnjnj'
					}
				]
			}
		});
		expect(nextState).toEqual({
			data: [
				{
					value: 1,
					currency: 'ETH',
					txid: '2329332hu3huhu',
					address: '2332j3jnjnj'
				}
			],
			errors: []
		});
	});

	it('handles set transactions stage', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.SET_TRANSACTIONS_STAGE,
			payload: {
				stage: 'ico'
			}
		});
		expect(nextState).toEqual({
			stage: 'ico',
			errors: []
		});
	});

	it('handles default transactions stage', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.SET_TRANSACTIONS_STAGE,
			payload: {}
		});
		expect(nextState).toEqual({
			stage: 'all',
			errors: []
		});
	});

	it('handles get transactions meta', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_META_REQUEST
		});
		expect(nextState).toEqual({
			errors: []
		});
	});

	it('handles get transactions meta error', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_META_ERROR
		});
		expect(nextState).toEqual({
			errors: ['Could not fetch transactions meta']
		});
	});

	it('handles get transactions meta success', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_META_SUCCESS,
			payload: {
				data: [
					{
						value: 1,
						currency: 'ETH',
						txid: '2329332hu3huhu',
						address: '2332j3jnjnj'
					}
				],
				errors: []
			}
		});
		expect(nextState).toEqual({
			data: [
				{
					value: 1,
					currency: 'ETH',
					txid: '2329332hu3huhu',
					address: '2332j3jnjnj'
				}
			],
			errors: []
		});
	});

	it('handles get transactions current prices success', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_CURRENT_PRICE_SUCCESS,
			payload: {
				data: {
					ETH: 1,
					BTC: 2,
					LTC: 3,
					USD: 4,
					EUR: 5,
					fetched: moment(new Date()).format('DD.MM.YY HH:mm:ss')
				}
			}
		});
		expect(nextState).toEqual({
			prices: {
				ETH: 1,
				BTC: 2,
				LTC: 3,
				USD: 4,
				EUR: 5,
				fetched: moment(new Date()).format('DD.MM.YY HH:mm:ss')
			},
			errors: []
		});
	});
});
