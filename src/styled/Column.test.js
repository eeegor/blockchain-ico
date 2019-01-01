import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Column } from '.';

describe('Column', () => {
	it('renders column wrapper', () => {
		const tree = renderer.create(<Column>Info</Column>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders column wrapper with max width', () => {
		const tree = renderer
			.create(<Column maxWidth="100">Info</Column>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('max-width', '100px !important');
	});
});
