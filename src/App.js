
import {Routes, Route} from "react-router-dom";
import React from "react"
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";
import OneProduct from "./pages/OneProduct";
import { cards } from "./components/data/DataProducts";
import Auth from "./pages/Auth";
export const ThemeContext = React.createContext(null);
function App() {
  
  return (
    <>
    <ThemeContext.Provider value={cards}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/products/:id" element={<OneProduct />} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="*" element={<ErrorPage />} />
            </Route>
    </Routes>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
