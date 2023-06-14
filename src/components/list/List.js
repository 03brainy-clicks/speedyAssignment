import React, { useContext } from "react";
import ListItem from "./ListItem";
import Context from "../../context/Context";
import { ListFilter } from "../../utils/UtilFunction";

const List = () => {
  const { topicList, activeState } = useContext(Context);

  //   filter
  const filterData = ListFilter(activeState, topicList);

  return (
    <>
      {/* list  */}
      <div
        className="lg:w-8/12 md:w-9/12 w-11/12 mx-auto flex flex-col overflow-hidden  bg-white pt-5 px-5 rounded  flex-1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex-1 overflow-y-scroll ">
          {filterData.map((item) => {
            return <ListItem data={item} key={item.topicId} />;
          })}
        </div>
        <div className="py-3">
          
        </div>
      </div>
    </>
  );
};

export default List;
