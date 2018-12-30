import { helperMargin } from './helperMargin';

describe('helper margin produces correct values', () => {
	test('margin all', () => {
		const margin = helperMargin({ margin: 10 });
		expect(margin).toEqual('margin: 10px !important;');
	});

	test('margin top', () => {
		const margin = helperMargin({ marginTop: 10 });
		expect(margin).toEqual('margin-top: 10px !important;');
	});

	test('margin left', () => {
		const margin = helperMargin({ marginLeft: 10 });
		expect(margin).toEqual('margin-left: 10px !important;');
	});

	test('margin bottom', () => {
		const margin = helperMargin({ marginBottom: 10 });
		expect(margin).toEqual('margin-bottom: 10px !important;');
	});

	test('margin right', () => {
		const margin = helperMargin({ marginRight: 10 });
		expect(margin).toEqual('margin-right: 10px !important;');
	});

	test('margin horizontal', () => {
		const margin = helperMargin({ marginX: 10 });
		expect(margin).toEqual(
			'margin-left: 10px !important; margin-right: 10px !important;'
		);
	});

	test('margin vertical', () => {
		const margin = helperMargin({ marginY: 10 });
		expect(margin).toEqual(
			'margin-top: 10px !important; margin-bottom: 10px !important;'
		);
	});

	test('margin undefined', () => {
		const margin = helperMargin({ margin: 'some-string' });
		expect(margin).toEqual('margin: 0 !important;');
	});
});
