/* eslint-disable import/no-cycle */
import './Container.css';
import Nav from './components/Nav';
import './index';

function Container() {
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="Container">
      <Nav />

    </div>
  );
}

export default Container;
