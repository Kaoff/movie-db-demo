import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Search from './routes/search';
import Home from './routes/home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/search/:query/:page',
        element: <Search />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
