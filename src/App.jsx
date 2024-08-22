import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Navbar from './pages/Navbar';
import RestaurantMenu from './pages/RestaurantMenu';
import { CoOrdinate } from './contexts/locationContext';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart';
import Search from './pages/Search';

const App = () => {
  const visibility = useSelector(
    (state) => state.locationSearchToggleSlice.locationSearchToggle
  );
  const authVisibility = useSelector(
    (state) => state.locationSearchToggleSlice.authToggle
  );
  const [coOrdinate, setCoOrdinate] = useState({
    lat: 12.9352403,
    lng: 77.624532,
  });

  return (
    <CoOrdinate.Provider value={{ coOrdinate, setCoOrdinate }}>
      <main
        className={`overflow-hidden w-full max-w-full ${
          visibility || authVisibility
            ? 'max-h-screen overflow-hidden'
            : 'h-full'
        }`}
      >
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Body />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Body />} />
          </Route>
        </Routes>
      </main>
    </CoOrdinate.Provider>
  );
};

export default App;
