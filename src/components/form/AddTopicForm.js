// Importing necessary dependencies and modules
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "../../context/Context";

// Component for adding a new topic
const AddTopicForm = ({ open, setOpen }) => {
  // State variables for topic, tag, and tags
  const [topic, setTopic] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  // Accessing the handleTopicAdd function from the context
  const { handleTopicAdd } = useContext(Context);

  // State variables for topic and tag errors
  const [topicErr, setTopicErr] = useState(false);
  const [tagErr, setTagErr] = useState(false);

  // Function to handle adding a new tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tag) {
      setTagErr(false);
      let tagData = {
        tagId: uuidv4(),
        tag: tag,
      };
      setTags([tagData, ...tags]);
      setTag("");
    } else {
      setTagErr(true);
    }
  };

  // Function to handle deleting a tag
  const handleDeleteTag = (tagId) => {
    setTags(tags.filter((item) => item.tagId !== tagId));
  };

  // Function to handle adding a new topic
  const handleAdd = (e) => {
    e.preventDefault();
    if (topic) {
      setTopicErr(false);
      handleTopicAdd({
        topicId: uuidv4(),
        topic: topic,
        tags: tags,
        category: "custom",
      });
      setOpen(!open);
    } else {
      setTopicErr(true);
    }
  };

  // Rendering the add topic form
  return (
    <div
      className="mx-auto w-80 md:w-96 bg-white opacity-100 p-5 rounded"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-center pb-2 border-b">
        <h4 className="font-semibold">Add Topic</h4>
        <span>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setOpen(!open)}
            size="sm"
            className="cursor-pointer text-gray-400 hover:text-red-500 active:text-red-600 transition duration-200"
          />
        </span>
      </div>
      <form className="mt-5 space-y-3">
        {/* Topic input */}
        <div>
          <label htmlFor="topic" className="text-sm font-medium">
            Topic
          </label>
          <input
            type="text"
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            className="mt-1 w-full bg-gray-100 outline-none text-sm py-1 px-2 rounded"
          />
          {topicErr ? (
            <p className="text-xs text-red-500 ">Field is empty</p>
          ) : (
            ""
          )}
        </div>
        {/* Tag input */}
        <div>
          <label htmlFor="topic" className="text-sm font-medium">
            Tag
          </label>
          <div className="flex gap-3 items-center">
            <input
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              type="text"
              className=" w-full bg-gray-100 outline-none text-sm py-1 px-2 rounded"
            />
            <button
              onClick={handleAddTag}
              className="btn btn py-2 px-5 text-xs font-semibold text-white rounded flex  items-center"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-1" />{" "}
              <span>Tag</span>
            </button>
          </div>
          {tagErr ? (
            <p className="text-xs text-red-500 ">Field is empty</p>
          ) : (
            ""
          )}
        </div>
        {/* Displaying tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map((item, i) =>
            i % 3 === 0 ? (
              <div
                className="p-1 px-2 text-xs bg-yellow-50 border border-yellow-500 text-yellow-500 rounded flex items-center gap-1 "
                key={item.tagId}
              >
                <span>{item.tag}</span>
                <FontAwesomeIcon
                  icon={faTimes}
                  size="sm"
                  onClick={() => handleDeleteTag(item.tagId)}
                  className="ml-1 cursor-pointer hover:text-red-500 transition duration-300"
                />
              </div>
            ) : (
              <>
                {i % 3 === 1 ? (
                  <div
                    className="p-1 px-2 text-xs bg-green-50 border border-green-500 text-green-500 rounded flex items-center gap-1 "
                    key={item.tagId}
                  >
                    <span>{item.tag}</span>
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="sm"
                      onClick={() => handleDeleteTag(item.tagId)}
                      className="ml-1 cursor-pointer hover:text-red-500 transition duration-300"
                    />
                  </div>
                ) : (
                  <div
                    className="p-1 px-2 text-xs bg-red-50 border border-red-500 text-red-500 rounded flex items-center gap-1 "
                    key={item.tagId}
                  >
                    <span>{item.tag}</span>
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="sm"
                      onClick={() => handleDeleteTag(item.tagId)}
                      className="ml-1 cursor-pointer hover:text-red-500 transition duration-300"
                    />
                  </div>
                )}
              </>
            )
          )}
        </div>
        {/* Submit button */}
        <div className="pt-3">
          <button
            onClick={handleAdd}
            className="btn py-2  px-5 text-xs font-semibold w-full text-white rounded "
          >
            <FontAwesomeIcon icon={faPlus} /> <span>Add Topic</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTopicForm;
