import {
	setTransactionStageActions,
	setTransactionStage
} from './setTransactionStage';

describe('setTransactionStage actions', () => {
	it('handles type correctly', () => {
		const stage = 'beta';
		const action = setTransactionStage({ stage });
		expect(action).toEqual({
			type: setTransactionStageActions.SET_TRANSACTIONS_STAGE,
			payload: {
				stage: 'beta'
			}
		});
	});
});
