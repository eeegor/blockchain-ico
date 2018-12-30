import {
	getTransactionsMetaActions,
	getTransactionsMetaSuccess
} from './getTransactionsMeta';

describe('getTransactionsMeta actions', () => {
	it('handles type correctly', () => {
		const response = { data: [] };
		const action = getTransactionsMetaSuccess({ response });
		expect(action).toEqual({
			type: getTransactionsMetaActions.GET_TRANSACTIONS_META_SUCCESS,
			payload: {
				data: []
			}
		});
	});
});
