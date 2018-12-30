import {
	guid,
	windowMaxHeight,
	windowMaxWidth,
	uppercaseFirst,
	formatValue,
	sortByKey,
	sortByDate,
	mergeData
} from './util';

describe('util', () => {
	it('provides uniq id', () => {
		const id1 = guid();
		const id2 = guid();
		const id3 = guid();
		expect(id1).toHaveLength(36);
		expect(id1 === id2).not.toBe(true);
		expect(id2 === id3).not.toBe(true);
		expect(id3 === id1).not.toBe(true);
	});

	it('formats ETH, BTC and LTC currency value', () => {
		const resultETH = formatValue(357898246000000000, 'ETH');
		const resultBTC = formatValue(9991200, 'BTC');
		const resultLTC = formatValue(50010000, 'LTC');
		expect(resultETH).toEqual(0.357898246);
		expect(resultBTC).toEqual(0.099912);
		expect(resultLTC).toEqual(0.5001);
	});

	it('formats default value', () => {
		const result = formatValue(1345, '');
		expect(result).toEqual(1345);
	});

	it('formats ETH, BTC and LTC value to dollar', () => {
		const resultETH = formatValue(357898246000000000, 'ETH', 'USD');
		const resultBTC = formatValue(9991200, 'BTC', 'USD');
		const resultLTC = formatValue(50010000, 'LTC', 'USD');
		expect(resultETH).toEqual(50.37059914204);
		expect(resultBTC).toEqual(388.03922472);
		expect(resultLTC).toEqual(16.05321);
	});

	it('sorts array by key', () => {
		const result = sortByKey(
			[{ name: 'zorro' }, { name: 'alfred' }, { name: 'charles' }],
			'name'
		);
		expect(result).toEqual([
			{ name: 'alfred' },
			{ name: 'charles' },
			{ name: 'zorro' }
		]);
	});

	it('sorts array by key and handles zero', () => {
		const result = sortByKey(
			[{ name: 'zorro' }, { name: 'zorro' }],
			'name'
		);
		expect(result).toEqual([{ name: 'zorro' }, { name: 'zorro' }]);
	});

	it('merges data', () => {
		const result = mergeData({
			stage1: [
				{ txid: '123452', name: 'zorro' },
				{ txid: '377383', name: 'alfred' },
				{ txid: '898981', name: 'charles' }
			],
			stage2: [
				{ txid: '243433', name: 'batman' },
				{ txid: '423332', name: 'robin' }
			],
			stage3: [{ txid: '033373', name: 'spiderman' }]
		});
		expect(result).toEqual([
			{ txid: '033373', name: 'spiderman', stage: 'stage3', order: 6 },
			{ txid: '123452', name: 'zorro', stage: 'stage1', order: 1 },
			{ txid: '243433', name: 'batman', stage: 'stage2', order: 2 },
			{ txid: '377383', name: 'alfred', stage: 'stage1', order: 3 },
			{ txid: '423332', name: 'robin', stage: 'stage2', order: 4 },
			{ txid: '898981', name: 'charles', stage: 'stage1', order: 5 }
		]);
	});

	it('sorts array by date', () => {
		const result = sortByDate(
			[
				{ received: new Date('2018-02-12T18:32:00Z') },
				{ received: new Date('2017-07-15T10:00:02Z') },
				{ received: new Date('2017-07-15T10:00:00Z') }
			],
			'received'
		);
		expect(result).toEqual([
			{ received: new Date('2017-07-15T10:00:00Z') },
			{ received: new Date('2017-07-15T10:00:02Z') },
			{ received: new Date('2018-02-12T18:32:00Z') }
		]);
	});

	it('uppercases first letter in a word', () => {
		const result = uppercaseFirst('example');
		expect(result).toEqual('Example');
	});

	it('windowMaxWidth', () => {
		const result = windowMaxWidth();
		expect(result).toEqual(1024);
	});

	it('windowMaxHeight', () => {
		const result = windowMaxHeight();
		expect(result).toEqual(768);
	});
});
