import "./App.css";
import Home from "./pages/home/Home";


import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Bfsi from "./pages/home/components/Bfsi";
import Telecom from "./pages/home/components/Telecom";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/bfsi" element={<Bfsi />} />
            <Route path="/telecom" element={<Telecom />} />
           
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
