import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { useState } from "react";

const Root = () => {
  // THEME SWITCHING STATES
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}></Navbar>
      <div className="min-h-[74.3vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
