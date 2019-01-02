import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Chart } from '.';

describe('Chart', () => {
	it('renders chart wrapper', () => {
		const tree = renderer.create(<Chart>Info</Chart>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders chart wrapper with max width', () => {
		const tree = renderer
			.create(<Chart maxWidth="100">Info</Chart>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('max-width', '100px !important');
	});
});
