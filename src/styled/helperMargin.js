const parseNumber = value =>
	parseInt(value, 10) ? `${value}px !important` : '0 !important';

export const helperMargin = props => {
	const nextMargin = [];
	Object.keys(props).map(key => {
		if (key === 'margin') {
			return nextMargin.push(`margin: ${parseNumber(props.margin)};`);
		}
		if (key === 'marginTop') {
			return nextMargin.push(
				`margin-top: ${parseNumber(props.marginTop)};`
			);
		}
		if (key === 'marginBottom') {
			return nextMargin.push(
				`margin-bottom: ${parseNumber(props.marginBottom)};`
			);
		}
		if (key === 'marginLeft') {
			return nextMargin.push(
				`margin-left: ${parseNumber(props.marginLeft)};`
			);
		}
		if (key === 'marginRight') {
			return nextMargin.push(
				`margin-right: ${parseNumber(props.marginRight)};`
			);
		}
		if (key === 'marginX') {
			return nextMargin.push(
				`margin-left: ${parseNumber(
					props.marginX
				)}; margin-right: ${parseNumber(props.marginX)};`
			);
		}
		if (key === 'marginY') {
			return nextMargin.push(
				`margin-top: ${parseNumber(
					props.marginY
				)}; margin-bottom: ${parseNumber(props.marginY)};`
			);
		}
		return '';
	});
	return nextMargin.join(' ');
};
