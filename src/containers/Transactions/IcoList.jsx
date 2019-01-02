import React from 'react';
import moment from 'moment';
import { formatValue, currencyColor } from '../../util';
import {
	Div,
	Container,
	Bar,
	BarInfo,
	TextSmall,
	BarControls,
	Select,
	Button,
	Grid,
	CardTransaction,
	CardIcon,
	CardBody,
	TitleUppercase
} from '../../styled';
import { IconBitcoin, IconLitecoin, IconEtherium } from '../../components';
import { theme } from '../../styled/theme';

export const IcoList = props => {
	const {
		filteredTransactions,
		prices,
		page,
		perPage,
		totalPages,
		handlePerPage,
		handlePrevPage,
		handleNextPage
	} = props;

	if (!filteredTransactions) {
		return null;
	}
	return (
		<Div>
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
									handlePerPage(
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
								onClick={() => handlePrevPage()}
							>
								Prev
							</Button>
							<Button
								paddingX="12"
								className="next-page"
								noShadow
								onClick={() => handleNextPage(totalPages)}
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
											marginBottom={12}
											className="transaction__currency-usd"
										>
											<TitleUppercase
												color={currencyColor(
													item.currency
												)}
												className="transaction__currency"
												marginBottom="0"
												marginRight="12"
											>
												{item.currency}:
											</TitleUppercase>
											<TitleUppercase
												className="transaction__usd"
												color={
													theme.colors.primaryGreen
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
										<Bar className="transaction__index">
											<TextSmall marginRight="6">
												Transaction index:
											</TextSmall>
											<TextSmall color="#fff">
												{item.order}
											</TextSmall>
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
		</Div>
	);
};
