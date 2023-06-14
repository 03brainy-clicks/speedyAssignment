// List filter function
export const ListFilter = (filter, topicList) => {
  // If the filter is set to "all", return the complete topicList
  if (filter === "all") {
    return topicList;
  }

  // Filter the topicList based on the category
  return topicList.filter((item) => item.category === filter);
};
