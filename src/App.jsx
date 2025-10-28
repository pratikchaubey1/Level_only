import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Page/LandingPage/Landing";
import Sneaker from "./Page/Sneaker";
import Shirt from "./Page/Shirt";
import Jeans from "./Page/Jeans";
import Bag from "./Page/Bag";
import All from "./Page/All";
import Aboutus from "./Page/Aboutus";
import CartPage from "./Components/Navbar/CartPage";
import Keep from "./Page/ServiceofLevel/Keep";
import SerTwo from "./Page/ServiceofLevel/SerTwo";
import SerThree from "./Page/ServiceofLevel/SerThree";
import Serone from "./Page/ServiceofLevel/Serone";
import Instore from "./Page/ServiceofLevel/Instore";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.css";

function App() {
  const location = useLocation();
  const paths = ["/", "/signup", "/signin"];
  const noPaddingOnLanding = paths.includes(location.pathname);

  return (
    <div className=" bg-white/90">
      <Navbar />
      <div className={noPaddingOnLanding ? "" : "mt-22"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Jeans" element={<Jeans />} />
          <Route path="/Shirt" element={<Shirt />} />
          <Route path="/Sneaker" element={<Sneaker />} />
          <Route path="/About" element={<Aboutus/>}/>
          <Route path="/All" element={<All/>}/>
           <Route path="/cart" element={<CartPage/>}/>
           <Route path="/Keep" element={<Keep/>}/>
           <Route path="/SerTwo" element={<SerTwo/>}/>
           <Route path="/SerThree" element={<SerThree/>}/>
           <Route path="/SerOne" element={<Serone/>}/>
           <Route path="/Instore" element={<Instore/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={2000} newestOnTop limit={1} closeOnClick draggable={false} hideProgressBar={false} />
    </div>
  );
}

export default App;
