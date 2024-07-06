import React from 'react';
import { useState } from "react";
import Header from './Components/Header.jsx';
import Editor from './Components/Editor.jsx';
import Canvas from './Components/Canvas.tsx';
import './App.css'

function App() {
  const [activeContent, setActiveContent] = useState('Editor');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };
  return (
    <>
      <Header onButtonClick={handleButtonClick}/>
      {activeContent === 'Editor' && <Editor/>}
      {activeContent === 'Canvas' && <Canvas/>}
    </>
  )
}

export default App