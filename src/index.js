import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Template from './Template';
import Shop from './page/Shop';
import About from './page/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
  {
    path: "/Shop",
    element: <Shop />
  },
  {
    path: "/About",
    element: <About />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
