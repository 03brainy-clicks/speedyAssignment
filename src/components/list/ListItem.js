import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {
  const { handleTopicDelete } = useContext(Context);

  return (
    <div className=" sm:flex  sm:flex-nowrap  justify-between items-center border-b p-4 gap-3">
      <div className="flex-1">
        <h6 className="font-medium text-sm">{data.topic}</h6>
        <div className="mt-2 flex gap-2 flex-wrap">
          {data.tags.map((item) => {
            return (
              <span
                key={item.tagId}
                className="py-1 px-2 text-xs bg-cornflower-blue-50 border border-cornflower-blue-400 text-cornflower-blue-400 rounded"
              >
                {item.tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 sm:mt-0 mt-3">
        <button className="btn py-1 px-5 text-xs w-full font-semibold text-white rounded ">
          <Link to={`/editor/${data.topicId}`}>
            <FontAwesomeIcon icon={faPen} size="sm" /> <span> Write</span>
          </Link>
        </button>
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
