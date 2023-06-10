import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <h2>About</h2>
      <Link to="/">
        <button type="button" className="btn">
          Back Home
        </button>
      </Link>
    </section>
  );
};

export default About;
