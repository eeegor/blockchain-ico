import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Tooltip } from '.';

describe('Tooltip', () => {
	test('renders default tooltip', () => {
		const tree = renderer.create(<Tooltip>Title</Tooltip>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders tooltip for mobile', () => {
		const tree = renderer
			.create(<Tooltip color="green">Title</Tooltip>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('top', '12px');
	});
});
