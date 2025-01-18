import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homes from "./components/home";
import Events from "./components/Eventpage";
import About from "./components/about";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Store from "./components/store";
import Donate from "./components/donate";

const App = () => {
  return (
    <div>
      <Navbar
        links={[
          { name: "Event", path: "/event" },
          { name: "About us", path: "/about" },
          { name: "Resources", path: "/resources" },
          { name: "Store", path: "/store" },
          { name: "Contact", path: "/contact" },
        ]}
        logo="path-to-logo.png"
        donateText="Donate"
      />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
};

export default App;
