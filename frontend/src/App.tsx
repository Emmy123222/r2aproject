import { useState } from "react";

import "./App.css";
import AppRouter from "./routes";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Welcome from "./components/home/Welcome";
import Sidepic from "./components/home/Sidepic";
function App() {
  const [count, setCount] = useState(0);
  const links = [
    { name: "Events", href: "#" },
    { name: "About us", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Store", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const logo = "path-to-logo.png"; // Replace with your logo path
  const donateLink = "/donate";

  return (
    <>
      {/* <AppRouter/> */}
      <div className="p-6 container mx-auto space-y-4">
        <Navbar links={links} logo={logo} donateLink={donateLink} />
        <Home />
        <div className="flex gap-4  relative">
          <div>
            <Welcome />
          </div>
          <div className="relative">
            <Sidepic />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
