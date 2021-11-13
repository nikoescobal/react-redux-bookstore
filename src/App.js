/* eslint-disable import/no-cycle */
import './Container.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Nav from './components/Nav';
import './index';

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="Container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* <Route exact path="/categories" component={Container} /> */}
      </Routes>
    </div>
  );
}

export default App;
