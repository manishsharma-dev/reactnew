import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToggle] = useState(false);
  console.log("App running");
  const toggleParagraph = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((prevState) => !showParagraph);
    }
  }, [allowToogle,showParagraph]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
