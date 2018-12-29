const minZero = value => {
	console.log('value', value);
	return value && value > 0 ? value : 0;
};

export const helperMargin = props => {
	if (props.margin) {
		return `margin: ${props.margin}px !important;`;
	} else if (props.marginTop) {
		return `margin-top: ${minZero(props.marginTop)}px !important;`;
	} else if (props.marginBottom) {
		return `margin-bottom: ${minZero(props.marginBottom)}px !important;`;
	} else if (props.marginLeft) {
		return `margin-left: ${minZero(props.marginLeft)}px !important;`;
	} else if (props.marginRight) {
		return `margin-right: ${minZero(props.marginRight)}px !important;`;
	} else if (props.marginX) {
		return `margin-left: ${minZero(
			props.marginX
		)}px !important; margin-right: ${minZero(props.marginX)}px !important;`;
	} else if (props.marginY) {
		return `margin-top: ${minZero(
			props.marginY
		)}px !important; margin-bottom: ${minZero(
			props.marginY
		)}px !important;`;
	}
};
