import './App.css';
import Login from './Login/Login';

import Signup from './Signup/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
