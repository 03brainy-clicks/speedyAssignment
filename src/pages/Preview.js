import React, { useContext, useEffect, useRef } from "react";
import Context from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Preview = () => {
  const { currentBlog } = useContext(Context);
  const blogRef = useRef();
  const { blogId } = useParams();

  useEffect(() => {
    blogRef.current.innerHTML = currentBlog.content;
  }, [currentBlog.content]);

  return (
    <div className="bg-gray-100 p-7 min-h-screen flex flex-col ">
      <div
        className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto flex-1 bg-white p-5 h-full rounded "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <button className="py-2 px-3 transition duration-300 text-xs font-semibold  rounded hover:text-black">
          <Link to={`/editor/${blogId}`}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
        </button>
        <h2
          className="text-3xl font-bold text-center my-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          {currentBlog.topic}
        </h2>
        <div
          ref={blogRef}
          className="overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2000"
        ></div>
      </div>
    </div>
  );
};

export default Preview;
