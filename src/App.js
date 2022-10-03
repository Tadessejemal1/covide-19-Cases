import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './Components/NavBar';
import store from './Redux/configureStore';
import Detail from './Components/Detail';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
