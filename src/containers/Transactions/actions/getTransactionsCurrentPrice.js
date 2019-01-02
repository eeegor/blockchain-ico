import axios from 'axios';

const CURRENCY_URL =
	'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=USD,EUR,ETH,LTC,BTC';

const actions = {
	GET_TRANSACTIONS_CURRENT_PRICE_REQUEST:
		'GET_TRANSACTIONS_CURRENT_PRICE_REQUEST',
	GET_TRANSACTIONS_CURRENT_PRICE_SUCCESS:
		'GET_TRANSACTIONS_CURRENT_PRICE_SUCCESS',
	GET_TRANSACTIONS_CURRENT_PRICE_ERROR: 'GET_TRANSACTIONS_CURRENT_PRICE_ERROR'
};

export const getTransactionsCurrentPriceActions = actions;

/**
 *
 * @function getTransactionsCurrentPriceRequest
 *
 * @return {object}
 */
export const getTransactionsCurrentPriceRequest = () => ({
	type: actions.GET_TRANSACTIONS_CURRENT_PRICE_REQUEST
});

/**
 *
 * @function getTransactionsCurrentPriceSuccess
 *
 * @return {object}
 */
export const getTransactionsCurrentPriceSuccess = ({ response }) => {
	const { data } = response;
	return {
		type: actions.GET_TRANSACTIONS_CURRENT_PRICE_SUCCESS,
		payload: { data }
	};
};

/**
 *
 * @function getTransactionsCurrentPriceError
 *
 * @return {object}
 */
export const getTransactionsCurrentPriceError = ({ error }) => ({
	type: actions.GET_TRANSACTIONS_CURRENT_PRICE_ERROR,
	payload: { error }
});

/**
 *
 * @function getTransactionsCurrentPrice
 *
 * @return {object}
 */
export const getTransactionsCurrentPrice = () => dispatch => {
	dispatch(getTransactionsCurrentPriceRequest());
	axios
		.get(CURRENCY_URL)
		.then(response => {
			dispatch(getTransactionsCurrentPriceSuccess({ response }));
		})
		.catch(error => /* istanbul ignore next */ {
			dispatch(getTransactionsCurrentPriceError({ error }));
		});
};
