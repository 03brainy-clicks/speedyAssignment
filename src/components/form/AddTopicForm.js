import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "../../context/Context";

const AddTopicForm = ({ open, setOpen }) => {
  const [topic, setTopic] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const { handleTopicAdd } = useContext(Context);

  const [topicErr, setTopicErr] = useState(false);
  const [tagErr, setTagErr] = useState(false);

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

  const handleDeleteTag = (tagId) => {
    setTags(tags.filter((item) => item.tagId !== tagId));
  };

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

  return (
    <div className="w-full mx-auto md:w-96 bg-white opacity-100 p-5 rounded">
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
        <div>
          <label htmlFor="topic" className="text-sm font-medium">
            Topic
          </label>
          <input
            type="text"
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            className="mt-1 w-full bg-cornflower-blue-50 outline-none text-sm py-1 px-2 rounded"
          />
          {topicErr ? (
            <p className="text-xs text-red-500 ">Please add a topic</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="topic" className="text-sm font-medium">
            Tag
          </label>
          <div className="flex gap-3 items-center">
            <input
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              type="text"
              className=" w-full bg-cornflower-blue-50 outline-none text-sm py-1 px-2 rounded"
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
            <p className="text-xs text-red-500 ">Please enter a tag</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2">
          {tags.map((item) => {
            return (
              <div
                className="p-1 px-2 text-xs bg-cornflower-blue-50 border border-cornflower-blue-400 text-cornflower-blue-400 rounded flex items-center gap-1 "
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
            );
          })}
        </div>
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
