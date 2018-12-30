import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Hr } from '.';

describe('Hr', () => {
	test('renders default header', () => {
		const tree = renderer.create(<Hr>Content</Hr>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
