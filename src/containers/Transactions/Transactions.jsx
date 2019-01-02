import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	Button,
	Container,
	Div,
	Grid,
	H1,
	Loading,
	Text,
	TextSmall,
	Error
} from '../../styled';
import { getTransactions, setTransactionStage } from './actions';
import { windowMaxWidth, windowMaxHeight } from '../../util';
import { theme } from '../../styled/theme';
import { IcoChart } from './IcoChart';
import { IcoList } from './IcoList';

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
		perPage: 9,
		loading: true
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		const { getTransactions, setTransactionStage } = this.props;
		getTransactions && getTransactions();
		setTransactionStage && setTransactionStage('all');
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	componentDidUpdate(newProps) {
		if (
			this.props.transactions !== newProps.transactions &&
			newProps.prices &&
			newProps.prices !== {} &&
			newProps.transactions &&
			newProps.transactions !== []
		) {
			this.setState(state => ({ ...state, loading: false }));
		}
	}

	componentDidCatch() {
		this.setState(state => ({
			...state,
			errors: [...state.errors, 'Something went wrong, please try again']
		}));
	}

	selectStage = (event, stage = 'all') => {
		event && event.preventDefault();
		const { setTransactionStage } = this.props;
		setTransactionStage && setTransactionStage({ stage });
		this.gotoPage(1);
	};

	gotoPage = page => this.setState(state => ({ ...state, page }));

	handleResize = () => {
		return this.setState(state => ({
			...state,
			windowSize: {
				width: windowMaxWidth(),
				height: windowMaxHeight()
			}
		}));
	};

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
		const { loading, page, perPage } = this.state;
		const { transactions, stage, prices, errors } = this.props;

		if (errors && errors.length > 0) {
			return errors.map((error, index) => (
				<Error key={index}>{error}</Error>
			));
		}

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
		const isMobile = windowMaxWidth() < theme.media.tablet;

		if (loading || !filterTransactions || filterTransactions.length < 1) {
			return <Loading>Loading...</Loading>;
		}

		return (
			<TransactionsContainer>
				<Container>
					<H1 marginTop="24">ICO summary</H1>
					<Text marginRight={60}>Different stages of our ICO</Text>
					<TextSmall marginRight={60}>
						* prices are calculated using{' '}
						<a href="http://cryptocompare.com">cryptocompare</a> on{' '}
						{prices.fetched}
					</TextSmall>
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
				<Div
					zIndex="7001"
					color="#fff"
					background={theme.colors.darkBg}
					minHeight={isMobile ? 400 : 600}
				>
					{transactions && transactions.length > 0 && (
						<IcoChart data={transactions} stage={stage || 'all'} />
					)}
				</Div>
				<IcoList
					filteredTransactions={filteredTransactions}
					prices={prices}
					page={page}
					perPage={perPage}
					totalPages={totalPages}
					handlePerPage={this.handlePerPage}
					handlePrevPage={this.handlePrevPage}
					handleNextPage={this.handleNextPage}
				/>
			</TransactionsContainer>
		);
	}
}

const mapStateToProps = state => {
	return {
		app: state.app,
		transactions: state.transactions.data,
		prices: state.transactions.prices,
		stage: state.transactions.stage,
		errors: state.transactions.errors
	};
};

export default connect(
	mapStateToProps,
	{ getTransactions, setTransactionStage }
)(Transactions);
