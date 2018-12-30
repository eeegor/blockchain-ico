import { actions } from '../actions';

/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */

export const transactionReducer = (state = {}, action) => {
	// console.log(action.type, action);

	const { payload } = action;

	switch (action.type) {
		case actions.GET_TRANSACTIONS_REQUEST:
			return {
				...state
			};

		case actions.GET_TRANSACTIONS_SUCCESS:
			return {
				...state,
				data: payload.data
			};

		case actions.GET_TRANSACTIONS_ERROR:
			return {
				...state,
				data: []
			};

		case actions.SET_TRANSACTIONS_STAGE:
			return {
				...state,
				stage: payload.stage || 'all'
			};

		default:
			return state;
	}
};
