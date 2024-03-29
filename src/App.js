import "./App.css";
import Home from "./pages/home/Home";

import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Bfsi from "./pages/BFSI/Bfsi";
import Telecom from "./pages/Telecom/Telecom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/telecom" element={<Telecom />} />

            <Route path="/bfsi" element={<Bfsi />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
