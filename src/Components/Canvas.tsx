import React from 'react';
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { type ChangeEvent, useState, useRef } from "react";
import "./Canvas-styles.css";
import './svg.d.ts';
import pen from './Images/pen.svg';
import erase from './Images/eraser.svg';
import redo from './Images/redo.svg';
import undo from './Images/undo.svg';

export default function Canvas() {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);

    const [eraseMode, setEraseMode] = useState(false);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [canvasColor, setCanvasColor] = useState("#ffffff");

    const handleEraserClick = () => {
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
    };

    const handlePenClick = () => {
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
    };

    const handleUndoClick = () => {
        canvasRef.current?.undo();
      };
    
      const handleRedoClick = () => {
        canvasRef.current?.redo();
      };
    
      const handleClearClick = () => {
        canvasRef.current?.clearCanvas();
      };
      const handleStrokeColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStrokeColor(event.target.value);
      };
    
      const handleCanvasColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCanvasColor(event.target.value);
      };
    return (
        <div className='can-container'>
            <div className="c-bar">
                <button className="c-btn" disabled={!eraseMode} onClick={handlePenClick}> <img src={pen} alt="pen" /></button>
                <button className="c-btn" disabled={eraseMode} onClick={handleEraserClick}> <img src={erase} alt="erase" /></button>
                <span className="c-separator"></span>
                <button className="c-btn" onClick={handleUndoClick}> <img src={undo} alt="undo" /></button>
                <button className="c-btn" onClick={handleRedoClick}> <img src={redo} alt="redo" /></button>
                <button className="c-btn" onClick={handleClearClick}> X </button>
                <span className="c-separator"></span>
                <input type="color" value={canvasColor} onChange={handleCanvasColorChange}/>
                <input id = "stroke" type="color" value={strokeColor} onChange={handleStrokeColorChange} />
            </div>
            <ReactSketchCanvas id="canvas"
                ref={canvasRef}
                width="100%"
                height="80vh"
                allowOnlyPointerType="all"
                strokeColor={strokeColor}
                canvasColor={canvasColor}
            />
        </div>
    );
}