const minZero = value =>
	parseInt(value, 10) && value > 0 ? `${value}px !important` : '0 !important';

export const helperPadding = props => {
	const nextPadding = [];
	Object.keys(props).map(key => {
		if (key === 'padding') {
			return nextPadding.push(`padding: ${minZero(props.padding)};`);
		}
		if (key === 'paddingTop') {
			return nextPadding.push(
				`padding-top: ${minZero(props.paddingTop)};`
			);
		}
		if (key === 'paddingBottom') {
			return nextPadding.push(
				`padding-bottom: ${minZero(props.paddingBottom)};`
			);
		}
		if (key === 'paddingLeft') {
			return nextPadding.push(
				`padding-left: ${minZero(props.paddingLeft)};`
			);
		}
		if (key === 'paddingRight') {
			return nextPadding.push(
				`padding-right: ${minZero(props.paddingRight)};`
			);
		}
		if (key === 'paddingX') {
			return nextPadding.push(
				`padding-left: ${minZero(
					props.paddingX
				)}; padding-right: ${minZero(props.paddingX)};`
			);
		}
		if (key === 'paddingY') {
			return nextPadding.push(
				`padding-top: ${minZero(
					props.paddingY
				)}; padding-bottom: ${minZero(props.paddingY)};`
			);
		}
		return '';
	});
	return nextPadding.join(' ');
};
