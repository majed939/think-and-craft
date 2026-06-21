import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Woods from "./pages/Woods";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";



export default function App() {


  return (


    <BrowserRouter>


      <div className="min-h-screen flex flex-col">


        <Header />



        <main className="flex-grow pt-16">

          <Routes>



            <Route
              path="/"
              element={<Home />}
            />



            <Route
              path="/login"
              element={<Login />}
            />



            <Route
              path="/register"
              element={<Register />}
            />



            <Route
              path="/store"
              element={<Store />}
            />



            <Route
              path="/product/:id"
              element={<Product />}
            />



            <Route
              path="/cart"
              element={<Cart />}
            />



            <Route
              path="/checkout"
              element={<Checkout />}
            />



            <Route
              path="/courses"
              element={<Courses />}
            />



            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />



            <Route
              path="/woods"
              element={<Woods />}
            />



            <Route
              path="/blog"
              element={<Blog />}
            />



            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />



            <Route
              path="*"
              element={<NotFound />}
            />



          </Routes>


        </main>



        <Footer />


      </div>


    </BrowserRouter>


  );


}
