import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/list/List";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating loading time using setTimeout
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // If still loading, show the Loader component
  if (loading) return <Loader />;

  // Once loading is done, render the Dashboard
  return (
    <div className="text-gray-800 h-screen bg-gray-100  flex flex-col gap-5 pb-5">
      <Header />
      <List />
    </div>
  );
};

export default Dashboard;
