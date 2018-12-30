import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Header } from '.';

describe('Header', () => {
	test('renders default header', () => {
		const tree = renderer.create(<Header>Content</Header>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
