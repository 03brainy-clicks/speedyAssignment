import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center text-gray-600">
      <div className="text-center">
        {" "}
        <h2 className=" text-3xl font-semibold">
          Speedy Brand Assignment Solution
        </h2>
        <Link to={"/dashboard"}>
          <button className="py-2  px-5 text-sm font-medium text-white rounded mt-7 bg-cornflower-blue-700">
            Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
