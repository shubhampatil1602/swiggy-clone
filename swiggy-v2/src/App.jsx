import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Navbar from './pages/Navbar';
import RestaurantMenu from './pages/RestaurantMenu';
import { CoOrdinate, Visibility } from './contexts/locationContext';
import { CartContext } from './contexts/cartContext';

const App = () => {
  const [visibility, setVisibility] = useState(false);
  const [coOrdinate, setCoOrdinate] = useState({
    lat: 12.9352403,
    lng: 77.624532,
  });
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <CoOrdinate.Provider value={{ coOrdinate, setCoOrdinate }}>
        <Visibility.Provider value={{ visibility, setVisibility }}>
          <div
            className={`${
              visibility ? 'max-h-screen overflow-hidden' : 'h-full'
            }`}
          >
            <Routes>
              <Route path='/' element={<Navbar />}>
                <Route path='/' element={<Body />} />
                <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
              </Route>
            </Routes>
          </div>
        </Visibility.Provider>
      </CoOrdinate.Provider>
    </CartContext.Provider>
  );
};

export default App;
