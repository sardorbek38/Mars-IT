import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import logo from "./assets/logo.png";
import searchIcon from "./assets/search.png";
import userIcon from "./assets/user.png";

import Home from "./Pages/Home";
import Products from "./Pages/Products";

const App = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />

        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
         <NavLink to="/">Agents</NavLink>
        <NavLink to="/products">Contact</NavLink>

        <div className="auth">
          <img className="auth-img" src={searchIcon} alt="Search" />
          <img className="auth-img" src={userIcon} alt="User" />
          <button className="btn">Sign up</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
