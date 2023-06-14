// Importing necessary dependencies and modules
import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import Context from "../../context/Context";
import { ListFilter } from "../../utils/UtilFunction";
import ReactPaginate from "react-paginate";

// Component for displaying a list of topics
const List = () => {
  // Accessing topicList and activeState from the context
  const { topicList, activeState } = useContext(Context);

  // Filter data based on activeState
  const filterData = ListFilter(activeState, topicList);

  // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = filterData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page's data
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Rendering the list component
  return (
    <>
      {/* List */}
      <div
        className="lg:w-8/12 md:w-9/12 w-11/12 mx-auto flex flex-col overflow-hidden bg-white pt-5 px-5 rounded flex-1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex-1 overflow-y-scroll">
          {/* Rendering each ListItem component */}
          {currentItems.map((item) => (
            <ListItem data={item} key={item.topicId} />
          ))}
        </div>
        <div className="py-4 flex justify-between">
          {/* Pagination */}
          <div className="flex items-center">
            <label htmlFor="items" className="text-xs font-semibold">
              <span className="sm:inline hidden"> Show rows per page</span>
              <span className="sm:hidden inline"> Rows </span>
            </label>
            {/* Input for setting items per page */}
            <input
              value={itemsPerPage}
              onChange={(e) =>
                setItemsPerPage(e.target.value >= 5 ? e.target.value : 5)
              }
              type="number"
              className=" ml-3 bg-gray-100  outline-none text-xs  text-center py-1 w-12 rounded"
            />
          </div>

          {/* ReactPaginate component for navigation */}
          <ReactPaginate
            className="flex gap-5 items-center text-xs font-semibold text-gray-500 hover:text-gray-700 "
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"bg-black px-3 py-1 text-white rounded"}
          />
        </div>
      </div>
    </>
  );
};

export default List;
