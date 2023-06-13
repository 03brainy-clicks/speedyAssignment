import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const ListItem = ({ data }) => {
  const { handleTopicDelete } = useContext(Context);
  const navigate = useNavigate();
  const handleWrite = () => navigate(`/editor/${data.topicId}`);

  return (
    <div className=" sm:flex  sm:flex-nowrap  justify-between items-center border-b p-4 gap-3">
      <div className="flex-1">
        <h6 className="font-medium text-sm">{data.topic}</h6>
        <div className="mt-2 flex gap-2 flex-wrap">
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
        <button
          onClick={handleWrite}
          className="btn py-1 px-5 text-xs w-full font-semibold text-white rounded "
        >
          <span> Write</span>
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
