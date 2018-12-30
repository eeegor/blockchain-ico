import { appReducer } from '.';

describe('transaction reducer', () => {
	it('handles default state', () => {
		const nextState = appReducer(undefined, { type: 'UNKNOWN_ACTION' });
		expect(nextState).toEqual({});
	});
});
