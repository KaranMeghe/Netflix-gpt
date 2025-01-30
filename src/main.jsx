import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Form, Browse } from './Components';
import App from './App';
import { nowPlayingMoviesLoader } from './Utils/loader';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Form />
      },
      {
        path: "/browse",
        element: <Browse />,
        loader: nowPlayingMoviesLoader
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
);
