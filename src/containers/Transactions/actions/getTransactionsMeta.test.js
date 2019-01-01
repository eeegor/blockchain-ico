import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTransactionsMeta } from './getTransactionsMeta';

export const mockStore = configureMockStore([thunk]);

describe('getTransactionsMeta actions', () => {
	it('handles type correctly', async () => {
		const store = mockStore();
		await store.dispatch(getTransactionsMeta());
		const actions = store.getActions();
		expect(actions[0]).toEqual({ type: 'GET_TRANSACTIONS_META_REQUEST' });
	});
});
