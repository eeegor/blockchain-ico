import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Card } from '.';

describe('Card', () => {
	test('renders card', () => {
		const tree = renderer.create(<Card>Hello</Card>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders card with no background', () => {
		const tree = renderer.create(<Card noBg>Hello</Card>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('background', 'none !important');
	});

	test('renders card with icon', () => {
		const tree = renderer.create(<Card withIcon>Hello</Card>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('grid-template-columns', '52px auto');
	});
});
