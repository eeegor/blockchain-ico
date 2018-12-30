import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { IconBitcoin } from '.';

describe('IconBitcoin', () => {
	test('renders IconBitcoin', () => {
		const tree = renderer.create(<IconBitcoin />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
