import {
	guid,
	windowMaxHeight,
	windowMaxWidth,
	uppercaseFirst,
	formatValue,
	sortByKey,
	sortByDate,
	mergeData,
	mergeMeta
} from './util';

const prices = {
	BTC: 0.0002678,
	ETH: 0.007358,
	EUR: 0.8772,
	LTC: 0.0328,
	USD: 1
};

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
		const resultETH = formatValue(357898246000000000, 'ETH', prices);
		const resultBTC = formatValue(9991200, 'BTC', prices);
		const resultLTC = formatValue(50010000, 'LTC', prices);
		expect(resultETH).toEqual(0.357898246);
		expect(resultBTC).toEqual(0.099912);
		expect(resultLTC).toEqual(0.5001);
	});

	it('formats default value', () => {
		const result = formatValue(1345, '', prices);
		expect(result).toEqual(1345);
	});

	it('handles default value with no prices', () => {
		const result = formatValue(1345, '');
		expect(result).toEqual(0);
	});

	it('formats ETH, BTC and LTC value to dollar', () => {
		const resultETH = formatValue(357898246000000000, 'ETH', prices, 'USD');
		const resultBTC = formatValue(9991200, 'BTC', prices, 'USD');
		const resultLTC = formatValue(50010000, 'LTC', prices, 'USD');
		expect(resultETH).toEqual(48.640696656700186);
		expect(resultBTC).toEqual(373.0843913368185);
		expect(resultLTC).toEqual(15.246951219512194);
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
			{ txid: '033373', name: 'spiderman', stage: 'stage3' },
			{ txid: '123452', name: 'zorro', stage: 'stage1' },
			{ txid: '243433', name: 'batman', stage: 'stage2' },
			{ txid: '377383', name: 'alfred', stage: 'stage1' },
			{ txid: '423332', name: 'robin', stage: 'stage2' },
			{ txid: '898981', name: 'charles', stage: 'stage1' }
		]);
	});

	it('merges meta', () => {
		const localData = [
			{
				txid: '123452',
				currency: 'ETH',
				value: 357898246000000000,
				stage: 'stage3'
			},
			{
				txid: '377383',
				currency: 'ETH',
				value: 32388246000000000,
				stage: 'stage1'
			},
			{
				txid: '898981',
				currency: 'ETH',
				value: 32883923000000000,
				stage: 'stage2'
			}
		];

		const result = mergeMeta(
			{
				123452: {
					txid: '123452',
					confirmed: '2018-02-12T18:32:00Z',
					received: '2018-02-12T18:32:00Z'
				},
				377383: {
					txid: '377383',
					confirmed: '2017-07-15T10:00:02Z',
					received: '2017-07-15T10:00:02Z'
				},
				898981: {
					txid: '898981',
					confirmed: '2017-07-15T10:00:00Z',
					received: '2017-07-15T10:00:00Z'
				}
			},
			localData,
			prices
		);

		expect(result).toEqual([
			{
				confirmed: new Date('2017-07-15T10:00:00.000Z'),
				currency: 'ETH',
				normalizedValue: 0.0329,
				order: 1,
				received: new Date('2017-07-15T10:00:00.000Z'),
				stage: 'stage2',
				sum: 4.469138760532754,
				txid: '898981',
				usd: 4.469138760532754,
				value: 32883923000000000
			},
			{
				confirmed: new Date('2017-07-15T10:00:02.000Z'),
				currency: 'ETH',
				normalizedValue: 0.0324,
				order: 2,
				received: new Date('2017-07-15T10:00:02.000Z'),
				stage: 'stage1',
				sum: 8.870911796683883,
				txid: '377383',
				usd: 4.401773036151129,
				value: 32388246000000000
			},
			{
				confirmed: new Date('2018-02-12T18:32:00.000Z'),
				currency: 'ETH',
				normalizedValue: 0.3579,
				order: 3,
				received: new Date('2018-02-12T18:32:00.000Z'),
				stage: 'stage3',
				sum: 57.51160845338407,
				txid: '123452',
				usd: 48.640696656700186,
				value: 357898246000000000
			}
		]);
	});

	it('handles merges meta without txid', () => {
		const localData = [
			{ currency: 'ETH', value: 357898246000000000, stage: 'stage3' }
		];

		const result = mergeMeta(
			{
				123452: {
					txid: '123452',
					confirmed: '2018-02-12T18:32:00Z',
					received: '2018-02-12T18:32:00Z'
				}
			},
			localData,
			prices
		);

		expect(result).toEqual([]);
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
