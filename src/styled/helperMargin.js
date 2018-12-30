const minZero = value => (parseInt(value, 10) && value > 0 ? `${value}px` : 0);

export const helperMargin = props => {
	if (props.margin) {
		return `margin: ${minZero(props.margin)} !important;`;
	}
	if (props.marginTop) {
		return `margin-top: ${minZero(props.marginTop)} !important;`;
	}
	if (props.marginBottom) {
		return `margin-bottom: ${minZero(props.marginBottom)} !important;`;
	}
	if (props.marginLeft) {
		return `margin-left: ${minZero(props.marginLeft)} !important;`;
	}
	if (props.marginRight) {
		return `margin-right: ${minZero(props.marginRight)} !important;`;
	}
	if (props.marginX) {
		return `margin-left: ${minZero(
			props.marginX
		)} !important; margin-right: ${minZero(props.marginX)} !important;`;
	}
	if (props.marginY) {
		return `margin-top: ${minZero(
			props.marginY
		)} !important; margin-bottom: ${minZero(props.marginY)} !important;`;
	}
	return undefined;
};
