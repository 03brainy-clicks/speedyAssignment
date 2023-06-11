import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TopicContext from "./context/Context";
import List from "./components/list/List";

function App() {
  const [activeState, setActiveState] = useState("all");
  return (
    <>
      <TopicContext.Provider value={{ activeState, setActiveState }}>
        <div className="text-gray-800 bg-gray-100 min-h-screen flex flex-col gap-5">
          <Header />
          <List />
        </div>
      </TopicContext.Provider>
    </>
  );
}

export default App;
