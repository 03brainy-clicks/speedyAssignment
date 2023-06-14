import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Heading */}
        <h2
          className="text-3xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Speedy Brand Assignment Solution
        </h2>

        <div
          className="flex gap-3 justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* Get Started button */}
          <Link to={"/dashboard"}>
            <button className="py-2 px-5 text-sm font-medium text-white rounded mt-7 bg-black">
              Get Started
            </button>{" "}
          </Link>

          {/* View Code button */}
          <a
            href="https://github.com/03brainy-clicks/speedyAssignment"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-2 border border-black px-5 text-sm font-medium rounded mt-7 text-black">
              View Code
            </button>
          </a>
        </div>

        {/* Additional Link */}
        <Link to={"/dashboard"}></Link>
      </div>
    </div>
  );
};

export default Home;
