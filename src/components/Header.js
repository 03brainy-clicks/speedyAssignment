import React, { useContext, useState } from "react";

// Importing necessary icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

// Importing context
import Context from "../context/Context";
import Modal from "../utils/Modal";
import AddTopicForm from "./form/AddTopicForm";

// Component for rendering the header
const Header = () => {
  // State for controlling the modal visibility
  const [open, setOpen] = useState(false);

  // Accessing activeState and setActiveState from the context
  const { activeState, setActiveState } = useContext(Context);

  // Rendering the header
  return (
    <>
      {/* Header section */}
      <div
        className="py-5 bg-white"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        {/* Headings */}
        <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto  ">
          <div className=" text-gray-400 text-xs font-medium flex gap-2 items-center">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span>Topic</span>
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span>Categories</span>
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span className="text-black capitalize">{activeState}</span>
          </div>
          <h3 className="text-2xl font-bold mt-3">Categories</h3>
        </div>
      </div>

      {/* Filters section */}
      <div
        className="lg:w-8/12 md:w-9/12 w-11/12 mx-auto bg-white p-4 rounded"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className=" flex justify-between items-center flex-wrap gap-5 ">
          {/* Filter options for larger screens */}
          <div className=" hidden sm:flex gap-5 text-sm font-medium item-center flex-wrap">
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "all"
                  ? "border-black text-black"
                  : "border-none"
              }`}
              onClick={() => setActiveState("all")}
            >
              All
            </div>
            {/* Additional filter options */}
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "custom"
                  ? "border-black text-black"
                  : "border-none"
              }`}
              onClick={() => setActiveState("custom")}
            >
              Custom
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "ICP"
                  ? "border-black text-black"
                  : "border-none"
              }`}
              onClick={() => setActiveState("ICP")}
            >
              ICP
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "mission"
                  ? "border-black text-black"
                  : "border-none"
              }`}
              onClick={() => setActiveState("mission")}
            >
              Mission
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "product"
                  ? "border-black text-black"
                  : "border-none"
              }`}
              onClick={() => setActiveState("product")}
            >
              Product
            </div>
          </div>

          {/* Filter options for smaller screens */}
          <div>
            <select
              onChange={(e) => setActiveState(e.target.value)}
              value={activeState}
              className="py-2 text-xs px-3 border sm:hidden border-black text-black font-semibold bg-white rounded outline-none"
            >
              <option value="all"> All </option>
              <option value="custom">Custom</option>
              <option value="ICP">ICP</option>
              <option value="mission">Mission</option>
              <option value="product">Product</option>
            </select>
          </div>

          {/* Button for adding a new topic */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="btn text-sm text-white font-medium py-2 px-5 rounded"
            >
              <FontAwesomeIcon icon={faPlus} />{" "}
              <span className="hidden sm:inline">New Topic</span>
            </button>
            {/* Modal for adding a new topic */}
            <Modal open={open} setOpen={setOpen}>
              <AddTopicForm open={open} setOpen={setOpen} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
