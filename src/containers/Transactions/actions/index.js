import {
	getTransactionsActions,
	getTransactions,
	getTransactionsRequest,
	getTransactionsSuccess,
	getTransactionsError
} from './getTransactions';
import {
	setTransactionStageActions,
	setTransactionStage
} from './setTransactionStage';

export const actions = {
	...getTransactionsActions,
	...setTransactionStageActions
};

export {
	getTransactions,
	getTransactionsRequest,
	getTransactionsSuccess,
	getTransactionsError,
	setTransactionStage
};
