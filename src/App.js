import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/RightSection";

function App() {
  const [currentTab, setCurrentTab] = useState(2);
  return (
    <>
      <Header />
      <div className="middle">
        <LeftSection currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <RightSection currentTab={currentTab} />
      </div>
    </>
  );
}

export default App;
