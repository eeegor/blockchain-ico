import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from '../../store';
import { shallow } from 'enzyme';

describe('App', () => {
	const wrapper = shallow(<App />);
	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
