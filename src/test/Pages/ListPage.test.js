import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../redux/ConfigureStore';
import ListPage from '../../Pages/ListPage';

describe('Detail component', () => {
  it('Rendered Detail component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ListPage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
