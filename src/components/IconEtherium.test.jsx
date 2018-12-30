import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { IconEtherium } from '.';

describe('IconEtherium', () => {
	test('renders IconEtherium', () => {
		const tree = renderer.create(<IconEtherium />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
