import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.jsx'
import EmployeeList from './pages/home/employee-list/employee-list.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
