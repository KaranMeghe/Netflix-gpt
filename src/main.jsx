
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './Redux/store';
import App from './App';
import { movieDetailsLoader, nowPlayingMoviesLoader } from './Utils/loader';
import './index.css';

// Lazy load large components
const Form = lazy(() => import('./Components/Form/Form'));
const Browse = lazy(() => import('./Components/Browse/Browse'));
const MovieDetails = lazy(() => import('./Components/MovieContainer/MovieDetails'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Form />
          </Suspense>
        )
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Browse />
          </Suspense>
        ),
        loader: nowPlayingMoviesLoader
      },
      {
        path: "/moviedetails/:movieId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MovieDetails />
          </Suspense>
        ),
        loader: movieDetailsLoader
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
