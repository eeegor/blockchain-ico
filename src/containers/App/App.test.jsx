import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { App } from './App';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
	app: {},
	transactions: {}
});

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('renders App', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
