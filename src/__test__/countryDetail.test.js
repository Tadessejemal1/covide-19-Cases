import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Details from '../Components/countryDetail';
import store from '../Redux/configureStore';

describe('Detail', () => {
  it('countryDeatil component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
