import httpCommon from './httpCommon';

const FETCH_COVID_DATA_START = 'covid-19/coviddata/FETCH_COVID_DATA_START';
const ADD_COVID_DATA = 'covid-19/coviddata/ADD_COVID_DATA';
const COVID_DATA_ERROR = 'covid-19/coviddata/COVID_DATA_ERROR';

export const fetchCovidDataStart = () => ({
  type: FETCH_COVID_DATA_START,
});

export const addCovidData = (payload) => ({
  type: ADD_COVID_DATA,
  payload,
});

export const covidDataError = (payload) => ({
  type: COVID_DATA_ERROR,
  payload,
});

export const addCovidDataAsync = () => (dispatch) => {
  dispatch(fetchCovidDataStart());
  httpCommon.get('/summary').then(({ data }) => {
    const { Countries: countries, Global: global } = data;
    dispatch(addCovidData({ countries, global }));
  }).catch((err) => {
    dispatch(covidDataError(err.message));
  });
};

const INITIAL_STATE = {
  global: null,
  countries: [],
  loading: true,
  error: false,
};

const covidDataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COVID_DATA_START:
      return { ...state, loading: true };
    case ADD_COVID_DATA:
      return {
        ...state,
        global: payload.global,
        countries: payload.countries,
        loading: false,
        error: false,
      };
    case COVID_DATA_ERROR:
      return {
        ...state, loading: false, error: payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
