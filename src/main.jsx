import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './components/routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/routes/Home.jsx'
import Bag from './components/routes/Bag.jsx'
import { Provider } from "react-redux"
import myntraStore from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} /></Provider>
  </StrictMode>,
)
