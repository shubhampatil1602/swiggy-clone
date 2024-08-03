import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Navbar from './pages/Navbar';
import RestaurantMenu from './pages/RestaurantMenu';
import { Visibility } from './contexts/locationContext';

const App = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <Visibility.Provider value={{ visibility, setVisibility }}>
      <div
        className={`${visibility ? 'max-h-screen overflow-hidden' : 'h-full'}`}
      >
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Body />} />
            <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </div>
    </Visibility.Provider>
  );
};

export default App;
