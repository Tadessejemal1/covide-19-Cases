import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../Components/Home';
import store from '../Redux/configureStore';

describe('Home', () => {
  it('Home component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
