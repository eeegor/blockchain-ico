import React from 'react';
import moment from 'moment';
import {
	Chart,
	ChartInfo,
	TextSmall,
	TitleUppercase,
	Column,
	Tooltip
} from '../../styled';
import { theme } from '../../styled/theme';
import { XYFrame } from 'semiotic';
import { windowMaxWidth } from '../../util';

const selected = {
	all: {
		dateMin: '2017-07-15T10:00:00Z',
		dateMax: '2018-06-10T10:10:00Z',
		totalMin: 0,
		totalMax: 2000000,
		scale: 1500
	},
	preIco: {
		dateMin: '2017-08-02T03:00:00Z',
		dateMax: '2017-08-07T12:00:00Z',
		totalMin: 0,
		totalMax: 1000000,
		scale: 750
	},
	ico: {
		dateMin: '2017-10-31T06:00:00Z',
		dateMax: '2017-11-21T18:45:00Z',
		totalMin: 780000,
		totalMax: 1250000,
		scale: 500
	},
	finalIco: {
		dateMin: '2018-05-09T02:00:00Z',
		dateMax: '2018-05-17T10:00:00Z',
		totalMin: 1110000,
		totalMax: 1800000,
		scale: 750
	}
};

const tooltipCreator = hover => {
	const isTablet = windowMaxWidth() > theme.media.tablet;
	return (
		<Tooltip className="tooltip-content">
			<Column>
				<TextSmall>Index</TextSmall>
				<TitleUppercase color={theme.colors.primaryGreen}>
					{hover.order}
				</TitleUppercase>
			</Column>
			<Column>
				<TextSmall>USD / {hover.currency}:</TextSmall>
				<TitleUppercase>
					${hover.usd.toFixed(2)} / {hover.normalizedValue}
				</TitleUppercase>
			</Column>
			{isTablet && (
				<>
					<Column>
						<TextSmall>Received:</TextSmall>
						<TitleUppercase>
							{moment(hover.received).format('DD.MM.YY, hh:mm')}
						</TitleUppercase>
					</Column>
					<Column>
						<TextSmall>Confirmed:</TextSmall>
						<TitleUppercase>
							{moment(hover.confirmed).format('DD.MM.YY, hh:mm')}
						</TitleUppercase>
					</Column>
				</>
			)}
			<Column>
				<TextSmall>Total:</TextSmall>
				<TitleUppercase color={theme.colors.primaryGreen}>
					$
					{hover.sum.toLocaleString({
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				</TitleUppercase>
			</Column>
		</Tooltip>
	);
};

export const IcoChart = props => {
	const { data, stage } = props;
	const isMobile = windowMaxWidth() < theme.media.tablet;
	const frameHeight = isMobile ? 400 : 600;
	const frameWidth =
		windowMaxWidth() < 1030 - 24 ? windowMaxWidth() - 24 : 1030 - 24;

	if (!stage) {
		return;
	}

	return (
		<Chart maxWidth={frameWidth} noPadding>
			<ChartInfo>
				<TextSmall>
					{isMobile ? 'Tap on' : 'Hover'} the chart to receive
					transaction info
				</TextSmall>
			</ChartInfo>
			<XYFrame
				size={[frameWidth, frameHeight]}
				lines={data}
				points={data}
				xAccessor={'received'}
				yAccessor={'sum'}
				xExtent={[
					new Date(selected[stage].dateMin),
					new Date(selected[stage].dateMax)
				]}
				yExtent={[selected[stage].totalMin, selected[stage].totalMax]}
				lineStyle={{
					stroke: theme.colors.primaryCyan,
					strokeWidth: 2,
					strokeOpacity: 0.3
				}}
				tooltipContent={hover => tooltipCreator(hover)}
				hoverAnnotation={true}
				pointStyle={d => {
					let fill;
					switch (d.currency) {
						case 'ETH':
							fill = theme.colors.primaryGreen;
							break;
						case 'BTC':
							fill = theme.colors.primaryRed;
							break;
						case 'LTC':
							fill = theme.colors.primaryPurple;
							break;
						default:
							fill = theme.colors.primaryLightBlueV2;
							break;
					}
					return {
						fill,
						r: 3,
						strokeWidth: 1,
						fillOpacity: 0.75
					};
				}}
				axes={[
					{
						orient: 'left',
						tickFormat: d => `$${d.toLocaleString()}`,
						ticks: isMobile ? 3 : 4,
						rotate: -90
					},
					{
						orient: 'bottom',
						tickFormat: d => (
							<g
								className="axis-label axis-label--date"
								textAnchor="top"
							>
								<text
									className="axis-label__date"
									x={-32}
									y={10}
								>
									{moment(d).format('DD.MM.YYYY')}
								</text>
								<text
									className="axis-label__time"
									x={-32}
									y={24}
								>
									{moment(d).format('hh:mm')}
								</text>
							</g>
						),
						ticks: isMobile ? 3 : 8
					}
				]}
				margin={
					isMobile
						? { top: 72, left: 20, bottom: 72, right: 8 }
						: { top: 96, left: 32, bottom: 96, right: 16 }
				}
			/>
		</Chart>
	);
};
