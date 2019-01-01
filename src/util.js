import moment from 'moment';

/**
 *
 * Format crypto currency value to readable format
 *
 * @param {number} value
 * @param {string} currency
 * @param {object} prices
 * @param {string} format
 */
export const formatValue = (value, currency, prices, format = null) => {
	const btc = value / 100000000;
	const ltc = value / 100000000;
	const eth = value / 1000000000000000000;
	if (!prices) {
		return 0;
	}
	switch (currency) {
		case 'BTC':
			return format === 'USD' ? btc / prices.BTC : btc;
		case 'LTC':
			return format === 'USD' ? ltc / prices.LTC : ltc;
		case 'ETH':
			return format === 'USD' ? eth / prices.ETH : eth;
		default:
			return value;
	}
};

/**
 *
 * Sort array by key
 *
 * @param {array} array
 * @param {string} key
 */

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

/**
 *
 * Sort array by date
 *
 * @param {array} array
 * @param {string} key
 */

export const sortByDate = (array, key) =>
	array.sort((a, b) => {
		const x = moment(a[key]).valueOf();
		const y = moment(b[key]).valueOf();
		return x - y;
	});

/**
 *
 * Merge data
 *
 * @param {array} data
 */
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
		.map(key => ({ ...merged[key] }))
		.sort((a, b) => a.txid > b.txid);
};

/**
 *
 * Merge data and meta
 *
 * @param {object} meta
 * @param {array} localData
 * @param {object} prices
 */
export const mergeMeta = (meta, localData, prices) => {
	const merged = {};
	// eslint-disable-next-line no-unused-expressions
	localData &&
		localData.forEach(transaction => {
			const { txid } = transaction;
			if (!meta[txid]) {
				return;
			}
			merged[txid] = {
				...transaction,
				...meta[txid],
				confirmed: new Date(meta[txid].confirmed),
				received: new Date(meta[txid].received)
			};
		});

	let sum = 0;
	return sortByDate(
		Object.keys(merged).map(txid => merged[txid]),
		'received'
	).map((sorted, index) => {
		const usd = parseFloat(
			formatValue(sorted.value, sorted.currency, prices, 'USD')
		);
		sum += usd;
		return {
			...sorted,
			normalizedValue: parseFloat(
				formatValue(sorted.value, sorted.currency, prices).toFixed(4)
			),
			order: index + 1,
			usd,
			sum
		};
	});
};

/**
 *
 * Uppercase first letter in a word
 *
 * @param {string} word
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
