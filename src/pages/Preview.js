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
    // Set the inner HTML of the blog content container to the current blog's content
    blogRef.current.innerHTML = currentBlog.content;
  }, [currentBlog.content]);

  return (
    <div className="bg-gray-100 py-7 min-h-screen flex flex-col ">
      <div
        className="lg:w-7/12 md:w-8/12 w-11/12 mx-auto flex-1 bg-white px-5 sm:p-7 sm:px-10 h-full rounded relative "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sticky top-0 bg-white z-10  py-5">
          <div className="flex justify-between items-center">
            {/* Back button */}
            <button className="py-2 px-3 transition duration-300 text-xs font-semibold  rounded hover:text-black">
              <Link to={`/editor/${blogId}`}>
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
                <span className="sm:inline hidden">Back</span>
              </Link>
            </button>
            {/* Tone label */}
            <span className="text-xs font-semibold uppercase">
              {currentBlog.tone}
            </span>
          </div>
          {/* Blog topic */}
          <h2
            className="text-3xl font-bold text-center my-5 "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            {currentBlog.topic}
          </h2>
        </div>
        {/* Blog content */}
        <div
          ref={blogRef}
          className="overflow-hidden blog-content"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2000"
        ></div>
      </div>
    </div>
  );
};

export default Preview;
