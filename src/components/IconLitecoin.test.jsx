import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { IconLitecoin } from '.';

describe('IconLitecoin', () => {
	test('renders IconLitecoin', () => {
		const tree = renderer.create(<IconLitecoin />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
