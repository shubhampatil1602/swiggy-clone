import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Navbar from './pages/Navbar';
import RestaurantMenu from './pages/RestaurantMenu';
import { CoOrdinate } from './contexts/locationContext';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart';

const App = () => {
  const visibility = useSelector(
    (state) => state.locationSearchToggleSlice.locationSearchToggle
  );
  const [coOrdinate, setCoOrdinate] = useState({
    lat: 12.9352403,
    lng: 77.624532,
  });

  return (
    <CoOrdinate.Provider value={{ coOrdinate, setCoOrdinate }}>
      <div
        className={`${visibility ? 'max-h-screen overflow-hidden' : 'h-full'}`}
      >
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Body />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </div>
    </CoOrdinate.Provider>
  );
};

export default App;
