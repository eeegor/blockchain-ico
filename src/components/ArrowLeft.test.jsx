import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ArrowLeft } from '.';

describe('ArrowLeft', () => {
	test('renders ArrowLeft', () => {
		const tree = renderer.create(<ArrowLeft />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
