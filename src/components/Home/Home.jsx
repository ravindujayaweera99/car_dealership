import Hero from "./Hero";
import Welcome from "./Welcome";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Home;
