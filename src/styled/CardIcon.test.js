import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { CardIcon } from '.';

describe('CardIcon', () => {
	test('renders card icon', () => {
		const tree = renderer.create(<CardIcon>Icon</CardIcon>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
