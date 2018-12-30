import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { CardBody } from '.';

describe('CardBody', () => {
	test('renders card body', () => {
		const tree = renderer.create(<CardBody>Hello</CardBody>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders card body with custom padding', () => {
		const tree = renderer
			.create(<CardBody paddingY={30}>Hello</CardBody>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('padding-top', '30px !important');
		expect(tree).toHaveStyleRule('padding-bottom', '30px !important');
	});
});
