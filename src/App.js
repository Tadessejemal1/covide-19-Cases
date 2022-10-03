import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './Components/NavBar';
import store from './Redux/configureStore';
import Home from './Components/Home';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
