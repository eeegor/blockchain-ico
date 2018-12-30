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
		expect(nextState).toEqual({});
	});

	it('handles get transactions error', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.GET_TRANSACTIONS_ERROR
		});
		expect(nextState).toEqual({
			data: []
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
			stage: 'ico'
		});
	});

	it('handles default transactions stage', () => {
		const nextState = transactionReducer(undefined, {
			type: actions.SET_TRANSACTIONS_STAGE,
			payload: {}
		});
		expect(nextState).toEqual({
			stage: 'all'
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
			]
		});
	});
});
