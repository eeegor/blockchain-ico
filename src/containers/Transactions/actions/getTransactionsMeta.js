import axios from 'axios';
import { mergeMeta } from '../../../util';

const actions = {
	GET_TRANSACTIONS_META_REQUEST: 'GET_TRANSACTIONS_META_REQUEST',
	GET_TRANSACTIONS_META_SUCCESS: 'GET_TRANSACTIONS_META_SUCCESS',
	GET_TRANSACTIONS_META_ERROR: 'GET_TRANSACTIONS_META_ERROR'
};

export const getTransactionsMetaActions = actions;

/**
 *
 * @function getTransactionsMetaRequest
 *
 * @return {object}
 */
export const getTransactionsMetaRequest = () => ({
	type: actions.GET_TRANSACTIONS_META_REQUEST
});

/**
 *
 * @function getTransactionsMetaSuccess
 *
 * @return {object}
 */
export const getTransactionsMetaSuccess = ({ response, state }) => {
	const { data } = response;
	return {
		type: actions.GET_TRANSACTIONS_META_SUCCESS,
		payload: {
			data: mergeMeta(data, state)
		}
	};
};

/**
 *
 * @function getTransactionsMetaError
 *
 * @return {object}
 */
export const getTransactionsMetaError = ({ error }) => ({
	type: actions.GET_TRANSACTIONS_META_ERROR,
	payload: { error }
});

/**
 *
 * @function getTransactionsMeta
 *
 * @return {object}
 */
export const getTransactionsMeta = () => (dispatch, getState) => {
	dispatch(getTransactionsMetaRequest());
	axios
		.get('https://bb-data.now.sh/index')
		.then(response => {
			dispatch(
				getTransactionsMetaSuccess({
					response,
					state: getState().transactions.data
				})
			);
		})
		.catch(error => {
			dispatch(getTransactionsMetaError({ error }));
		});
};
