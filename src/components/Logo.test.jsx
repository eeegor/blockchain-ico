import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Logo } from '.';

describe('Logo', () => {
	test('renders Logo', () => {
		const tree = renderer.create(<Logo />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
