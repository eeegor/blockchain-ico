import { helperPadding } from './helperPadding';

describe('helper padding produces correct values', () => {
	test('padding all', () => {
		const padding = helperPadding({ padding: 10 });
		expect(padding).toEqual('padding: 10px !important;');
	});

	test('padding top', () => {
		const padding = helperPadding({ paddingTop: 10 });
		expect(padding).toEqual('padding-top: 10px !important;');
	});

	test('padding left', () => {
		const padding = helperPadding({ paddingLeft: 10 });
		expect(padding).toEqual('padding-left: 10px !important;');
	});

	test('padding bottom', () => {
		const padding = helperPadding({ paddingBottom: 10 });
		expect(padding).toEqual('padding-bottom: 10px !important;');
	});

	test('padding right', () => {
		const padding = helperPadding({ paddingRight: 10 });
		expect(padding).toEqual('padding-right: 10px !important;');
	});

	test('padding horizontal', () => {
		const padding = helperPadding({ paddingX: 10 });
		expect(padding).toEqual(
			'padding-left: 10px !important; padding-right: 10px !important;'
		);
	});

	test('padding vertical', () => {
		const padding = helperPadding({ paddingY: 10 });
		expect(padding).toEqual(
			'padding-top: 10px !important; padding-bottom: 10px !important;'
		);
	});

	test('padding undefined', () => {
		const padding = helperPadding({ padding: 'some-string' });
		expect(padding).toEqual('padding: 0 !important;');
	});
});
