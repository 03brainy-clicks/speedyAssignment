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
      <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto bg-white p-5 rounded">
        <div className="h-[60vh] overflow-y-scroll ">
          {filterData.map((item) => {
            return <ListItem data={item} key={item.topicId} />;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
