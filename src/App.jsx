import { Outlet } from 'react-router-dom';
import Header from './pages/Header';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
};

export default App;
