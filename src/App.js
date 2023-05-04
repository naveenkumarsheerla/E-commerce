
import './App.css';
import { DasshBoard } from './Components/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductList } from './Components/ProductList';
import { PrdooctInfo } from './Components/ProductInfo';

function App() {
     const router = createBrowserRouter([
      {
        path:'/',
        element:<DasshBoard/>
      },
      {
         path:'/:category',
         element:<ProductList/>
      },{
        path:'/:category/:id',
        element:<PrdooctInfo/>
      }
     ])

  return (
   <>
   <RouterProvider router={router}/> 
   </>
  );
}

export default App;
