import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ],
    errorElement: <Error />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
