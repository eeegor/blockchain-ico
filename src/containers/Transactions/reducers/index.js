import { actions } from '../actions';

/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */

export const transactionReducer = (state = {}, action) => {
	const { payload } = action;

	switch (action.type) {
		case actions.GET_TRANSACTIONS_REQUEST:
		case actions.GET_TRANSACTIONS_META_REQUEST:
			return {
				...state
			};

		case actions.GET_TRANSACTIONS_SUCCESS:
		case actions.GET_TRANSACTIONS_META_SUCCESS:
			return {
				...state,
				data: payload.data
			};

		case actions.GET_TRANSACTIONS_ERROR:
		case actions.GET_TRANSACTIONS_META_ERROR:
			return {
				...state
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
