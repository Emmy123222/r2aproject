import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homes from "./components/home";
import Events from "./components/Eventpage";
import About from "./components/about";
import Resources from "./components/Resources";
import Contact from "./components/Contact";

// import Donate from "./components/donate";
import DonatePage from "./components/donate";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar
        links={[
          { name: "Event", path: "/event" },
          { name: "About us", path: "/about" },
          { name: "Resources", path: "/resources" },

          { name: "Contact", path: "/contact" },
        ]}
        logo="path-to-logo.png"
        donateText="Get Involved"
      />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
