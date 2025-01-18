import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contactme from './pages/Contact/Contactme';

// Create the router with the future flag
const router = createBrowserRouter(
  [
    {
      path: '/',
      index: '/index.html',
      element: <App />,
    },
    {
      path: "/project",
      element: <Projects/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contactme/>
    }
  ],
  {
    future: {
      v7_startTransition: true, // Opt-in to v7 transition behavior
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
