import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from '.';
import { theme } from './theme';

describe('Button', () => {
	it('renders button', () => {
		const tree = renderer.create(<Button />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', theme.colors.buttonPrimary);
		expect(tree).toHaveStyleRule('background', '#fff');
	});

	it('renders selected button', () => {
		const tree = renderer.create(<Button selected />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', '#fff');
		expect(tree).toHaveStyleRule('background', theme.colors.buttonPrimary);
	});

	it('renders outline button', () => {
		const tree = renderer.create(<Button outline />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', theme.colors.buttonPrimary);
		expect(tree).toHaveStyleRule('background', 'none');
	});

	it('renders primary button', () => {
		const tree = renderer.create(<Button primary />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', '#fff');
		expect(tree).toHaveStyleRule('background', theme.colors.buttonPrimary);
	});

	it('renders success button', () => {
		const tree = renderer.create(<Button success />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', '#fff');
		expect(tree).toHaveStyleRule('background', theme.colors.primaryGreen);
	});

	it('renders danger button', () => {
		const tree = renderer.create(<Button danger />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', '#fff');
		expect(tree).toHaveStyleRule('background', theme.colors.primaryRed);
	});

	it('renders token button', () => {
		const tree = renderer.create(<Button token />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', '#fff');
		expect(tree).toHaveStyleRule(
			'background',
			'linear-gradient(45deg,#6947FF 0%,#602BFF 100%)'
		);
	});
});
