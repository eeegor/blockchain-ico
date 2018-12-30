import axios from 'axios';
import { mergeData } from '../../../util';

const actions = {
	GET_TRANSACTIONS_REQUEST: 'GET_TRANSACTIONS_REQUEST',
	GET_TRANSACTIONS_SUCCESS: 'GET_TRANSACTIONS_SUCCESS',
	GET_TRANSACTIONS_ERROR: 'GET_TRANSACTIONS_ERROR'
};

export const getTransactionsActions = actions;

const isLocal = true;

/**
 *
 * @function getTransactionsRequest
 *
 * @return {object}
 */
export const getTransactionsRequest = () => ({
	type: actions.GET_TRANSACTIONS_REQUEST
});

/**
 *
 * @function getTransactionsSuccess
 *
 * @return {object}
 */
export const getTransactionsSuccess = ({ response }) => {
	const { data } = response;
	return {
		type: actions.GET_TRANSACTIONS_SUCCESS,
		payload: {
			data: mergeData(data)
		}
	};
};

/**
 *
 * @function getTransactionsError
 *
 * @return {object}
 */
export const getTransactionsError = ({ error }) => ({
	type: actions.GET_TRANSACTIONS_ERROR,
	payload: { error }
});

/**
 *
 * @function getTransactions
 *
 * @return {object}
 */
export const getTransactions = () => dispatch => {
	dispatch(getTransactionsRequest());
	axios
		.get(
			/* istanbul ignore next */
			isLocal
				? 'http://localhost:5000/db'
				: 'https://blockchain.brickblock.io/inputs'
		)
		.then(response => {
			dispatch(getTransactionsSuccess({ response }));
		})
		.catch(error => dispatch(getTransactionsError({ error })));
};
