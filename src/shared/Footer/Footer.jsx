import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <h1>Real Car Dealers</h1>
      </div>
      <div className="social-links">
        <ul>
          <a href="#">
            <li>Facebook</li>
          </a>
          <a href="#">
            <li>Twitter</li>
          </a>
          <a href="#">
            <li>Instagram</li>
          </a>
          <a href="#">
            <li>Tiktok</li>
          </a>
          <a href="#">
            <li>YouTube</li>
          </a>
        </ul>
      </div>
      <div className="general">
        <div className="col-1">
          <div className="about-us">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              repellat ipsam quisquam numquam, temporibus ab veritatis,
              recusandae atque saepe quibusdam debitis nulla labore nesciunt hic
              sapiente, asperiores in mollitia vero!
            </p>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="email">
              <p>www.realcardealers@dealer.com</p>
            </div>
            <div className="address">
              <p>abc, new road, new country</p>
            </div>
            <div className="telephone">
              <p>+94 - 812345678</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="customer-links">
            <h2>Customer Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Inventory</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <h2>Subscribe Our Weekly Newsletter</h2>
          <p>You can revieve newest updates</p>
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="bottom">
        <p>Developed by Ravindu Jayaweera - All rights Reserved ©️</p>
      </div>
    </footer>
  );
};

export default Footer;
