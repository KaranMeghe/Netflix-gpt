import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Form, Browse } from './Components';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Form />
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
