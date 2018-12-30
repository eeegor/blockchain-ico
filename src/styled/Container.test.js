import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Container } from '.';

describe('Container', () => {
	test('renders container', () => {
		const tree = renderer
			.create(<Container>Wrapped Content</Container>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders container with centered content', () => {
		const tree = renderer
			.create(<Container center>Wrapped Content</Container>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('display', 'flex');
		expect(tree).toHaveStyleRule('align-items', 'center');
	});

	test('renders container with full width content', () => {
		const tree = renderer
			.create(<Container full>Wrapped Content</Container>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('max-width', '100% !important');
	});

	test('renders container with max content width', () => {
		const tree = renderer
			.create(<Container maxWidth={480}>Wrapped Content</Container>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('max-width', '480px !important');
	});

	test('renders container with no padding', () => {
		const tree = renderer
			.create(<Container padding="0">Wrapped Content</Container>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('padding', '0 !important');
	});
});
