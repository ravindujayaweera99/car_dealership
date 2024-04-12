import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="id">Real Car Dealers</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Inventory</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
      <button>Sell Your Car</button>
    </nav>
  );
};

export default Navbar;
