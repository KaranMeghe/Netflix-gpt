import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn, Browse } from './Components';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  );

};

export default App;
