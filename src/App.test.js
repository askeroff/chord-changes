import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import localStorageMock from './__mocks__/localStorage';

window.localStorage = localStorageMock;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
