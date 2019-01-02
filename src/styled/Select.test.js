import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Select } from '.';

describe('Select', () => {
	test('renders default select', () => {
		const tree = renderer
			.create(
				<Select>
					<option value="one">One</option>
				</Select>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
