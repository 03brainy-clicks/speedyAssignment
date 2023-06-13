import React, { useContext, useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// context
import Context from "../context/Context";
import Modal from "../utils/Modal";
import AddTopicForm from "./form/AddTopicForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  // context
  const { activeState, setActiveState } = useContext(Context);

  return (
    <>
      <div className="py-5 bg-white">
        {/* headings */}
        <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto ">
          <div className=" text-gray-400 text-xs font-medium flex gap-2 items-center">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span>Topic</span>
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span>Categories</span>
            <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            <span className="text-cornflower-blue-500 capitalize">
              {activeState}
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-3">Categories</h3>
        </div>
      </div>

      {/* filters */}
      <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto bg-white p-4 rounded">
        <div className=" flex justify-between items-center flex-wrap gap-5 ">
          <div className="flex gap-5 text-sm font-medium item-center flex-wrap">
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "all"
                  ? "border-cornflower-blue-500 text-cornflower-blue-500"
                  : "border-none"
              }`}
              onClick={() => setActiveState("all")}
            >
              All
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "custom"
                  ? "border-cornflower-blue-500 text-cornflower-blue-500"
                  : "border-none"
              }`}
              onClick={() => setActiveState("custom")}
            >
              Custom
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "ICP"
                  ? "border-cornflower-blue-500 text-cornflower-blue-500"
                  : "border-none"
              }`}
              onClick={() => setActiveState("ICP")}
            >
              ICP
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "mission"
                  ? "border-cornflower-blue-500 text-cornflower-blue-500"
                  : "border-none"
              }`}
              onClick={() => setActiveState("mission")}
            >
              Mission
            </div>
            <div
              className={`p-2 cursor-pointer border-b-2 px-5 transition duration-300  ${
                activeState === "product"
                  ? "border-cornflower-blue-500 text-cornflower-blue-500"
                  : "border-none"
              }`}
              onClick={() => setActiveState("product")}
            >
              Product
            </div>
          </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="btn text-sm text-white font-medium py-2 px-5 rounded"
            >
              <FontAwesomeIcon icon={faPlus} /> New Topic
            </button>
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
