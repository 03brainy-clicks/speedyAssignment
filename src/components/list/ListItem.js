// Importing necessary dependencies and modules
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Modal from "../../utils/Modal";

// Component for rendering a single list item
const ListItem = ({ data }) => {
  // Accessing functions and states from the context
  const { handleTopicDelete, activeTone, setActiveTone } = useContext(Context);

  // State for controlling the modal visibility
  const [open, setOpen] = useState(false);

  // React Router's navigate function for programmatic navigation
  const navigate = useNavigate();

  // State for handling tone selection error
  const [toneErr, setToneErr] = useState(false);

  // Handle generate button click
  const handleGenerate = (e) => {
    e.preventDefault();
    if (activeTone) {
      setToneErr(false);
      console.log(activeTone);
      navigate(`/editor/${data.topicId}`);
    } else {
      setToneErr(true);
    }
  };

  // Rendering the list item
  return (
    <div className=" sm:flex  sm:flex-nowrap  justify-between items-center border-b p-4 gap-3">
      <div className="flex-1">
        {/* Displaying topic title */}
        <h6 className="font-medium text-sm">{data.topic}</h6>
        <div className="mt-2 flex gap-2 flex-wrap">
          {/* Rendering tags */}
          {data.tags.map((item, i) =>
            i % 3 === 0 ? (
              <span
                key={item.tagId}
                className="py-1 px-2 text-xs bg-yellow-50 border border-yellow-500 text-yellow-500 rounded"
              >
                {item.tag}
              </span>
            ) : (
              <>
                {" "}
                {i % 3 === 1 ? (
                  <span
                    key={item.tagId}
                    className="py-1 px-2 text-xs bg-green-50 border border-green-500 text-green-500 rounded"
                  >
                    {item.tag}
                  </span>
                ) : (
                  <span
                    key={item.tagId}
                    className="py-1 px-2 text-xs bg-red-50 border border-red-500 text-red-500 rounded"
                  >
                    {item.tag}
                  </span>
                )}
              </>
            )
          )}
        </div>
      </div>
      <div className="flex gap-2 sm:mt-0 mt-3">
        {/* Button to open the modal */}
        <button
          onClick={() => setOpen(!open)}
          className="btn py-1 px-5 text-xs w-full font-semibold text-white rounded "
        >
          <span> Write</span>
        </button>
        {/* Modal component */}
        <Modal open={open} setOpen={setOpen}>
          {/* Modal content */}
          <div
            className="mx-auto w-80 md:w-96 bg-white opacity-100 p-5 rounded"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex justify-between items-center pb-2 border-b">
              {/* Modal title */}
              <h4 className="font-semibold">Generate Blog</h4>
              {/* Close button */}
              <span>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setOpen(!open)}
                  size="sm"
                  className="cursor-pointer text-gray-400 hover:text-red-500 active:text-red-600 transition duration-200"
                />
              </span>
            </div>
            <div>
              {/* Form for generating blog */}
              <form className="mt-5 space-y-3">
                <div>
                  {/* Selecting tone */}
                  <label htmlFor="topic" className="text-sm font-medium">
                    Select Tone
                  </label>{" "}
                  <br />
                  <select
                    onChange={(e) => setActiveTone(e.target.value)}
                    value={activeTone}
                    className="py-2 text-xs px-3 border mt-1 border-black text-black bg-white font-semibold rounded w-full outline-none"
                  >
                    <option className="hidden">Select Tone</option>
                    <option value="Formal">Formal</option>
                    <option value="Casual">Casual</option>
                  </select>
                  {/* Display error if tone is not selected */}
                  {toneErr ? (
                    <p className="text-xs text-red-500 mt-1 ">
                      Please select a tone
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pt-3">
                  {/* Generate button */}
                  <button
                    onClick={handleGenerate}
                    className="btn py-2  px-5 text-xs font-semibold w-full text-white rounded "
                  >
                    <span>Generate</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        {/* Button to delete the topic */}
        <button
          onClick={() => handleTopicDelete(data.topicId)}
          className="bg-gray-200 py-1 px-3 text-gray-500 rounded hover:text-red-500 active:text-red-600 transition-all "
        >
          <FontAwesomeIcon icon={faTrash} size="xs" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
