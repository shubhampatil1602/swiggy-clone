import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import RestaurantMenuDetails from './pages/RestaurantMenuDetails.jsx';
import { Provider } from 'react-redux';
import appStore from './redux/appStore.js';

// const RestaurantMenuDetails = lazy(() =>
//   import('./pages/RestaurantMenuDetails.jsx')
// );

const About = lazy(() => import('./pages/About.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '/restaurants/:resId',
        element: <RestaurantMenuDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
