import "./App.css";
import Footer from "./shared/Footer/Footer.jsx";
import Navbar from "./shared/Navbar/Navbar.jsx";
import hero from "./assets/hero.jpg";
import Home from "./components/Home/Home.jsx";

const imgStyle = {
  width: "100vw",
  height: "90vh",
  margin: '0'
};

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
