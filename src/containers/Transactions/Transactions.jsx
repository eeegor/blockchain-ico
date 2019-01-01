import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';
import { IconBitcoin, IconEtherium, IconLitecoin } from '../../components';
import {
	Bar,
	BarInfo,
	BarControls,
	Button,
	CardIcon,
	Container,
	Div,
	Grid,
	H1,
	Text,
	TextSmall,
	TitleUppercase,
	CardTransaction,
	CardBody,
	Select
} from '../../styled';
import { getTransactions, setTransactionStage } from './actions';
import { formatValue } from '../../util';
import { theme } from '../../styled/theme';

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
		page: 1,
		perPage: 9
	};

	componentDidMount() {
		const { getTransactions } = this.props;
		getTransactions && getTransactions();
	}

	selectStage = (event, stage = 'all') => {
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
		const { transactions, stage, prices } = this.props;
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
					<H1 marginTop="24">Ico summary</H1>
					<Text marginRight={48}>
						Follow the transactions through different stages of our
						ICO
					</Text>
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
				</Container>
				<Container>
					<Bar centerY justifyBetween>
						<BarInfo paddingY="24" centerY>
							<TextSmall marginBottom="0" marginRight="12">
								{filteredTransactions.length} Transactions
							</TextSmall>
							<TextSmall marginBottom="0" marginRight="12">
								Page {page} / {totalPages}
							</TextSmall>
						</BarInfo>
						<BarControls>
							<Bar centerY>
								<TextSmall marginBottom="0" marginRight="6">
									Per page
								</TextSmall>
								<Select
									className="per-page"
									value={perPage}
									onChange={e =>
										this.handlePerPage(
											e.target.value,
											filteredTransactions.length
										)
									}
								>
									<select>
										<option value="9">9</option>
										<option value="30">30</option>
										<option value="60">60</option>
										<option value="99">99</option>
									</select>
								</Select>
							</Bar>
							<Bar>
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
									onClick={() =>
										this.handleNextPage(totalPages)
									}
								>
									Next
								</Button>
							</Bar>
						</BarControls>
					</Bar>
				</Container>
				<Div background={theme.colors.darkBg} paddingY="24">
					<Container>
						<Grid className="transactions-list" columns={[1, 2, 3]}>
							{filteredTransactions
								.slice(perPage * (page - 1), perPage * page)
								.map(item => (
									<CardTransaction
										key={item.txid}
										withIcon
										noBg
										padding="0"
									>
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
										<CardBody>
											<Bar
												centerY
												className="transaction__head"
											>
												<Text
													className="transaction__stage"
													marginBottom="0"
												>
													{item.stage}
												</Text>
												<Bar className="transaction__currency-usd">
													<TitleUppercase
														color={
															(item.currency ===
																'ETH' &&
																theme.colors
																	.etherium) ||
															(item.currency ===
																'BTC' &&
																theme.colors
																	.bitcoin) ||
															(item.currency ===
																'LTC' &&
																theme.colors
																	.litecoin)
														}
														className="transaction__currency"
														marginBottom="0"
														marginRight="12"
													>
														{item.currency}:
													</TitleUppercase>
													<TitleUppercase
														className="transaction__usd"
														color={
															theme.colors
																.primaryGreen
														}
													>
														$
														{formatValue(
															item.value,
															item.currency,
															prices,
															'USD'
														).toFixed(2)}
													</TitleUppercase>
												</Bar>
											</Bar>
											<TextSmall
												className="transaction__received"
												marginBottom="0"
												marginRight="12"
											>
												Received:{' '}
												{moment(item.received).format(
													'DD.MM.YY, HH:mm:ss'
												)}
											</TextSmall>
											<TextSmall
												className="transaction__confirmed"
												marginBottom="0"
												marginRight="12"
											>
												Confirmed:{' '}
												{moment(item.confirmed).format(
													'DD.MM.YY, HH:mm:ss'
												)}
											</TextSmall>
										</CardBody>
									</CardTransaction>
								))}
						</Grid>
					</Container>
				</Div>
			</TransactionsContainer>
		);
	}
}

const mapStateToProps = state => {
	console.log('mapStateToProps', state);
	return {
		app: state.app,
		transactions: state.transactions.data,
		prices: state.transactions.prices,
		stage: state.transactions.stage
	};
};

export default connect(
	mapStateToProps,
	{ getTransactions, setTransactionStage }
)(Transactions);
