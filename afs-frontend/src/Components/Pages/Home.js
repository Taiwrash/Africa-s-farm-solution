import React from "react";
import { Link } from "react-router-dom";
import CrossServices from "../common/CrossServices";
import Footer from "../common/Footer";

const Home = () => (
  <div>
    <section id="hero">
      <div className="hero-container">
        <h3>
          Welcome to
          <strong>AFRICA FARM SOLUTION</strong>
        </h3>

        <h1>
          We Connect Farmers, Veterinary doctors
          <br />
          and Consumers around the World
        </h1>

        <Link to="/sign-up" className="btn-get-started scrollto">
          Get Started
        </Link>
      </div>
    </section>

    <CrossServices />
    <Footer />
  </div>
);

export default Home;
