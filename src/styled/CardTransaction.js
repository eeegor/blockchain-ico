import styled from 'styled-components';
import { Card } from './Card';

export const CardTransaction = styled(Card)`
	color: #fff5;
	margin-top: 12px;
	margin-bottom: 12px;

	.transaction__head {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		flex-wrap: nowrap;
		margin-bottom: 12px;
	}

	.transaction__stage {
		margin-bottom: 0;
		line-height: 1;
		border: 1px solid #fff3;
		color: #fff8;
		padding: 4px 6px;
		border-radius: 4px;
	}

	.transaction__currency-usd {
		width: 100%;
	}

	.transaction__currency {
		margin-bottom: 0;
		line-height: 1;
	}

	.transaction__usd {
		margin-bottom: 0;
		line-height: 1;
	}

	.transaction__index {
		color: #fff7;
	}

	.transaction__received {
	}

	.transaction__confirmed {
	}
`;
