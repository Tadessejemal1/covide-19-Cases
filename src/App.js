import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Home from './Components/Home';
import './App.css';
import Details from './Components/countryDetail';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
