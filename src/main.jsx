import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

<<<<<<< HEAD
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Women from './Components/Women/Women.jsx';
import Men from './Components/Men/Men.jsx';
import Home from './Components/Home/Home.jsx';
import Main from './Components/Layout/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
    ],
  },
]);
=======
import { RouterProvider } from "react-router-dom";


import router from './Routes/Routes.jsx';

>>>>>>> e5ea6a93d151de4e24c2c8629d3a3fe881658384

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
