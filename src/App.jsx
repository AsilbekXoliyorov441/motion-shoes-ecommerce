import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { UpdateFollower } from "react-mouse-follower";
import ProductList from "./components/ProductList";
import Navbar2 from "./components/Navbar2";
import SingleProduct from "./components/SingleProduct";
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/men",
    element: (
      <>
        <Navbar2 />
        <ProductList category="men" />
        <Footer />
      </>
    ),
  },
  {
    path: "/women",
    element: (
      <>
        <Navbar2 />
        <ProductList category="women" />
        <Footer />
      </>
    ),
  },
  {
    path: "/kids",
    element: (
      <>
        <Navbar2 />
        <ProductList category="kid" />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar2 />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <>
        <Navbar2 />
        <SingleProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar2 />
        <Cart />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <RouterProvider router={router} />
      </UpdateFollower>
    </main>
  );
};

export default App;
