const actions = {
	SET_TRANSACTIONS_STAGE: 'SET_TRANSACTIONS_STAGE'
};

export const setTransactionStageActions = actions;

/**
 *
 * @function setTransactionStage
 *
 * @return {object}
 */
export const setTransactionStage = ({ stage }) => ({
	type: actions.SET_TRANSACTIONS_STAGE,
	payload: { stage }
});
