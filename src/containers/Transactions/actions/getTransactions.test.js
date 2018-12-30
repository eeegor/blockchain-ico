import {
	getTransactionsActions,
	getTransactionsSuccess
} from './getTransactions';

describe('getTransactions actions', () => {
	it('handles type correctly', () => {
		const response = { data: [] };
		const action = getTransactionsSuccess({ response });
		expect(action).toEqual({
			type: getTransactionsActions.GET_TRANSACTIONS_SUCCESS,
			payload: {
				data: []
			}
		});
	});
});
