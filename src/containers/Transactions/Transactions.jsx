import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IconBitcoin, IconEtherium, IconLitecoin } from '../../components';
import {
	Container,
	H2,
	Grid,
	Card,
	Button,
	CardIcon,
	TitleUppercase,
	Text,
	TextSmall,
	Bar,
	Hr
} from '../../styled';
import { getTransactions, setTransactionStage } from './actions';
import { formatValue } from '../../util';

export const TransactionsContainer = styled.div`
	margin-top: 84px;
`;

const buttonData = [
	{
		label: 'All',
		selectStage: '',
		selected: stage => !stage || stage === 'all' || stage === ''
	},
	{
		label: 'Pre Ico',
		selectStage: 'preIco',
		selected: stage => stage === 'preIco'
	},
	{ label: 'Ico', selectStage: 'ico', selected: stage => stage === 'ico' },
	{
		label: 'Final Ico',
		selectStage: 'finalIco',
		selected: stage => stage === 'finalIco'
	}
];

export class Transactions extends Component {
	state = {
		page: 2,
		perPage: 30
	};

	componentDidMount() {
		const { getTransactions } = this.props;
		getTransactions && getTransactions();
	}

	selectStage = (event, stage = '') => {
		event && event.preventDefault();
		const { setTransactionStage } = this.props;
		setTransactionStage && setTransactionStage({ stage });
		this.gotoPage(1);
	};

	gotoPage = page => this.setState(state => ({ ...state, page }));

	handlePerPage = (nextPerPage, totalItems) =>
		this.setState(state => {
			const nextMaxPages = Math.ceil(totalItems / nextPerPage);
			return {
				...state,
				page: state.page < nextMaxPages ? state.page : nextMaxPages,
				perPage: nextPerPage
			};
		});

	handlePrevPage = () =>
		this.setState(state => ({
			...state,
			page: state.page > 1 ? state.page - 1 : 1
		}));

	handleNextPage = totalPages =>
		this.setState(state => ({
			...state,
			page: state.page + 1 < totalPages ? state.page + 1 : totalPages
		}));

	render() {
		const { page, perPage } = this.state;
		const { transactions, stage } = this.props;
		const filterTransactions = (transactions, stage) => {
			if (!transactions) {
				return [];
			}
			if (!stage || stage === 'all') {
				return transactions;
			}
			return transactions.filter(item => item.stage === stage);
		};
		const filteredTransactions = filterTransactions(transactions, stage);
		const totalPages =
			filteredTransactions &&
			Math.ceil(filteredTransactions.length / perPage);

		return (
			<TransactionsContainer>
				<Container>
					<H2 marginTop="48">Transactions by stage</H2>
					<Grid gap="6" columns={[4, 7, 8]} marginY="24">
						{buttonData.map((button, index) => (
							<Button
								paddingX="0"
								noShadow
								key={index}
								onClick={e =>
									this.selectStage(e, button.selectStage)
								}
								selected={button.selected(stage)}
							>
								{button.label}
							</Button>
						))}
					</Grid>
					<Bar marginTop="24" centerY justifyBetween>
						<Bar paddingY="24" centerY>
							<Text marginBottom="0" marginRight="12">
								{filteredTransactions.length} Transactions
							</Text>
							<Text marginBottom="0" marginRight="12">
								Page {page} / {totalPages}
							</Text>
						</Bar>
						<Bar>
							<select
								className="per-page"
								value={perPage}
								onChange={e =>
									this.handlePerPage(
										e.target.value,
										filteredTransactions.length
									)
								}
							>
								<option value="">Per page</option>
								<option value="9">9</option>
								<option value="30">30</option>
								<option value="60">60</option>
								<option value="99">99</option>
							</select>
							<Button
								className="prev-page"
								noShadow
								marginX="12"
								paddingX="12"
								onClick={() => this.handlePrevPage()}
							>
								Prev
							</Button>
							<Button
								paddingX="12"
								className="next-page"
								noShadow
								onClick={() => this.handleNextPage(totalPages)}
							>
								Next
							</Button>
						</Bar>
					</Bar>
					<Hr />
					<Grid className="transactions-list" columns={3}>
						{filteredTransactions
							.slice(perPage * (page - 1), perPage * page)
							.map(item => (
								<Card key={item.txid} withIcon noBg padding="0">
									<CardIcon>
										{item.currency === 'BTC' && (
											<IconBitcoin />
										)}
										{item.currency === 'LTC' && (
											<IconLitecoin />
										)}
										{item.currency === 'ETH' && (
											<IconEtherium />
										)}
									</CardIcon>
									<Container center>
										<TitleUppercase
											marginBottom="0"
											marginRight="12"
										>
											{item.currency}
										</TitleUppercase>
										<Text marginBottom="0" marginRight="12">
											{item.stage}
										</Text>
										<TextSmall
											marginBottom="0"
											marginRight="12"
										>
											$
											{formatValue(
												item.value,
												item.currency,
												'USD'
											).toFixed(2)}
										</TextSmall>
									</Container>
								</Card>
							))}
					</Grid>
				</Container>
			</TransactionsContainer>
		);
	}
}

const mapStateToProps = state => {
	console.log('mapStateToProps', state);
	return {
		app: state.app,
		transactions: state.transactions.data,
		stage: state.transactions.stage
	};
};

export default connect(
	mapStateToProps,
	{ getTransactions, setTransactionStage }
)(Transactions);
