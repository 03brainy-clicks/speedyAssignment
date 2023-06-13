// lister filter
export const ListFilter = (filter, topicList) => {
  if (filter === "all") {
    return topicList;
  }
  return topicList.filter((item) => item.category === filter);
};
