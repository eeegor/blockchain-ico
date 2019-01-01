import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Div } from '.';

describe('Div', () => {
	test('renders default div', () => {
		const tree = renderer.create(<Div>Title</Div>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders div with custom color', () => {
		const tree = renderer.create(<Div color="green">Title</Div>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green !important');
	});

	test('renders div with custom background', () => {
		const tree = renderer
			.create(<Div background="green">Title</Div>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('background', 'green !important');
	});

	test('renders div with given min height', () => {
		const tree = renderer.create(<Div minHeight="100">Title</Div>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('min-height', '100px !important');
	});

	test('renders div with given z index', () => {
		const tree = renderer.create(<Div zIndex="100">Title</Div>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('z-index', '100 !important');
	});
});
