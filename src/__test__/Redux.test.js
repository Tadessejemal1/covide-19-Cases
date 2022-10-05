import covidDataReducer from '../Redux/reducer';
import mock from './mock';

const FETCH_COVID_DATA = 'coviddata/FETCH_COVID_DATA';
const ADD_COVID_DATA = 'coviddata/ADD_COVID_DATA';
const COVID_DATA_ERROR = 'coviddata/COVID_DATA_ERROR';

const state = {
  global: null,
  countries: [],
  loading: true,
  error: false,
};
describe('Redux should work properly', () => {
  it('it should dispatch fetch start action properly ', () => {
    covidDataReducer(state, { type: FETCH_COVID_DATA });
    expect(state.loading).toBeTruthy();
  });
  it('should dispatch add covid data properly', () => {
    const store = covidDataReducer(state, {
      type: ADD_COVID_DATA,
      payload: { countries: mock.countries, global: mock.global },
    });
    expect(store.global).toBe(mock.global);
    expect(store.countries).toBe(mock.countries);
  });
  it('should dispatch an error while fetching', () => {
    const store = covidDataReducer(state, {
      type: COVID_DATA_ERROR,
      payload: '404 server is not responding',
    });
    expect(store.loading).toBeFalsy();
    expect(store.error).toBe('404 server is not responding');
  });
});
