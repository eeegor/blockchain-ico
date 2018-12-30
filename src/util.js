import moment from 'moment';

export const sortByKey = (array, key) =>
	array.sort((a, b) => {
		const x = a[key];
		const y = b[key];
		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		return 0;
	});

export const sortByDate = (array, key) =>
	array.sort((a, b) => {
		const x = moment(a[key]).valueOf();
		const y = moment(b[key]).valueOf();
		return x - y;
	});

export const mergeData = data => {
	const merged = {};
	Object.keys(data).forEach(stage =>
		data[stage].forEach(transaction => {
			const { txid } = transaction;
			merged[txid] = {
				...transaction,
				stage
			};
		})
	);
	return Object.keys(merged)
		.map((key, index) => ({ ...merged[key], order: index + 1 }))
		.sort((a, b) => a.txid > b.txid);
};

/**
 *
 * Calculate sum
 */

export const formatValue = (value, currency, format = null) => {
	const btc = value / 100000000;
	const ltc = value / 100000000;
	const eth = value / 1000000000000000000;
	switch (currency) {
		case 'BTC':
			return format === 'USD' ? btc * 3883.81 : btc;
		case 'LTC':
			return format === 'USD' ? ltc * 32.1 : ltc;
		case 'ETH':
			return format === 'USD' ? eth * 140.74 : eth;
		default:
			return value;
	}
};

/**
 *
 * Cases word with a capital letter
 */

export const uppercaseFirst = word =>
	`${word.charAt(0).toUpperCase()}${word.substring(1)}`;

/**
 *
 * Generate unique id
 */

export function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return [s4() + s4(), s4(), s4(), s4(), s4() + s4() + s4()].join('-');
}

/**
 *
 * Calculate current viewport width
 */

export const windowMaxWidth = () =>
	Math.max(
		document.documentElement.clientWidth,
		window.innerWidth /* istanbul ignore next */ || 0
	);

/**
 *
 * Calculate current viewport height
 */

export const windowMaxHeight = () =>
	Math.max(
		document.documentElement.clientHeight,
		window.innerHeight /* istanbul ignore next */ || 0
	);

/**
 *
 * Check if browser agent is ios
 */

export const checkBrowserAgent = () => /* istanbul ignore next */ {
	// Detects if device is on iOS
	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		return /iphone|ipad|ipod/.test(userAgent);
	};

	if (isIos()) {
		return 'ios';
	}

	return 'web';
};
