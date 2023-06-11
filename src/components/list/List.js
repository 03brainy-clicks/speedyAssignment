import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <>
      {/* list  */}
      <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto bg-white p-5 rounded">
        <div className="h-[60vh] overflow-y-scroll ">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
           <ListItem />
          <ListItem />
          <ListItem />
          <ListItem /> 
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </>
  );
};

export default List;
