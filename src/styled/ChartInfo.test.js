import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ChartInfo } from '.';

describe('ChartInfo', () => {
	it('renders chart wrapper', () => {
		const tree = renderer.create(<ChartInfo>Info</ChartInfo>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
