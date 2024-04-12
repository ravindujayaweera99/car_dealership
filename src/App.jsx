import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Aboutus from "./components/About Us/Aboutus.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Contactus from "./components/Contact Us/Contactus.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
