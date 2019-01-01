import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTransactionsCurrentPrice } from './getTransactionsCurrentPrice';

export const mockStore = configureMockStore([thunk]);

describe('getTransactionsCurrentPrice actions', () => {
	it('handles type correctly', async () => {
		const store = mockStore();
		await store.dispatch(getTransactionsCurrentPrice());
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'GET_TRANSACTIONS_CURRENT_PRICE_REQUEST'
		});
	});
});
