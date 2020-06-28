import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="column">
          <p className="title">Africa's Farm Solution</p>
          <div className="location">
            <Link to="https://goo.gl/maps/ct6hbTr46dtLZkLv7">
              <img src="img/icons/location.svg" alt="" />
            </Link>
            <Link to="https://goo.gl/maps/ct6hbTr46dtLZkLv7">
              SOUTH WEST NIGERIA, AFRICA.
            </Link>
          </div>
        </div>

        <div className="column">
          <p className="title">Menu</p>
          <hr />
          <Link className="menu text" to="/">
            Home
          </Link>
          <Link className="menu text" to="/services">
            Services
          </Link>
          <Link className="menu text" to="/products">
            Products
          </Link>

          <Link className="menu text" to="/signup">
            Get Started
          </Link>
        </div>

        <div className="column">
          <p className="title">Contact</p>
          <hr />
          <p className="text phone">+234-811-852-9479</p>
          <p className="text">
            <Link to="mailto:buildforsdgteam044@gmail.com">
              buildforsdgteam044@gmail.com
            </Link>
          </p>
        </div>

        <div className="column">
          <p className="title">Social Media</p>
          <hr />
          {/* <div className="social">
            <Link to="https://facebook.com/buildforsdgteam044">
              <img className="icons" src="img/icons/fb.svg" alt="facebook" />
            </Link>
            <Link to="https://twitter.com/buildforsdgteam044">
              <img className="icons" src="img/icons/tw.svg" alt="twitter" />
            </Link>
            <Link to="https://linkedin.com/buildforsdgteam044">
              <img className="icons" src="img/icons/ln.svg" alt="linkedIn" />
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
