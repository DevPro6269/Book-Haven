import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/HomePage/Home.jsx';
import AddbookForm from './components/AddBook/AddbookForm.jsx';
import Browsebooks from './components/Browsebooks/Browsebooks.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { Provider } from 'react-redux';
import store from './App/Appstore'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';



// Define your routes using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path: "Addbook",
      element: <AddbookForm />,
    },
    {
      path: "browsebooks/:category",
      element: <Browsebooks />,
    },
    {
      path: "/bookdetails/:category/:id",
      element: <BookDetails />,
    },
    {
      path:"/*",
      element:<ErrorPage/>
    }
  ]
  },
  
  
  
]);

// Render the app with RouterProvider
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
