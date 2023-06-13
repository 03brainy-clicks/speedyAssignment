import React from "react";
import Header from "../components/Header";
import List from "../components/list/List";

const Dashboard = () => {
  return (
    <div className="text-gray-800 min-h-screen bg-gray-100  flex flex-col gap-5">
      <Header />
      <List />
    </div>
  );
};

export default Dashboard;
