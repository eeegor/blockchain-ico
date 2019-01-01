import {
	getTransactionsActions,
	getTransactions,
	getTransactionsRequest,
	getTransactionsSuccess,
	getTransactionsError
} from './getTransactions';

import {
	getTransactionsMetaActions,
	getTransactionsMeta,
	getTransactionsMetaRequest,
	getTransactionsMetaSuccess,
	getTransactionsMetaError
} from './getTransactionsMeta';

import {
	getTransactionsCurrentPriceActions,
	getTransactionsCurrentPrice,
	getTransactionsCurrentPriceRequest,
	getTransactionsCurrentPriceSuccess,
	getTransactionsCurrentPriceError
} from './getTransactionsCurrentPrice';

import {
	setTransactionStageActions,
	setTransactionStage
} from './setTransactionStage';

export const actions = {
	...getTransactionsActions,
	...getTransactionsMetaActions,
	...getTransactionsCurrentPriceActions,
	...setTransactionStageActions
};

export {
	getTransactions,
	getTransactionsRequest,
	getTransactionsSuccess,
	getTransactionsError,
	getTransactionsMeta,
	getTransactionsMetaRequest,
	getTransactionsMetaSuccess,
	getTransactionsMetaError,
	getTransactionsCurrentPrice,
	getTransactionsCurrentPriceRequest,
	getTransactionsCurrentPriceSuccess,
	getTransactionsCurrentPriceError,
	setTransactionStage
};
