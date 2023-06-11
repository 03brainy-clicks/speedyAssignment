import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListItem = () => {
  const tagList = [
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
  ];
  return (
    <div className="flex gap-5 justify-between items-center border-b p-3 ">
      <div className="flex-1">
        <h6 className="font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, nisi?
        </h6>
        <div className="mt-2 flex gap-2 flex-wrap">
          {tagList.map((item) => {
            return (
              <span className="p-1 text-xs bg-cornflower-blue-50 border border-cornflower-blue-400 text-cornflower-blue-400 rounded">
                Lorem.
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn py-1  px-5 text-xs font-semibold text-white rounded ">
          <FontAwesomeIcon icon={faPen} size="sm" /> <span> Write</span>
        </button>
        <button className="bg-gray-200 py-1 px-3 text-gray-500 rounded hover:text-red-500 active:text-red-600 transition-all ">
          <FontAwesomeIcon icon={faTrash} size="xs" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
