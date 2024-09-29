import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ListProperty from './ListProperty';
import HomePage from './HomePage';
import LuxaryGetways from './LuxaryGetways';
import HotelPage from './components/HotelPage';
// import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/luxary',
        element: <LuxaryGetways />,
      },
      {
        path: '/listur',
        element: <ListProperty />,
      },
      {
        path: 'hotelpage/:hotelId',  
        element: <HotelPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);