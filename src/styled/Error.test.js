import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Error } from '.';

describe('Error', () => {
	test('renders default error', () => {
		const tree = renderer.create(<Error>Title</Error>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
