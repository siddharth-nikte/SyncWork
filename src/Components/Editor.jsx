import React from 'react';
import { useState } from "react";
import "./Editor-styles.css"
import AlignLeft from './Images/align-left.svg';
import AlignCenter from './Images/align-center.svg';
import AlignRight from './Images/align-right.svg';
import Auth from './Auth.jsx';

export default function Editor() {
    const [showHeading, setShowHeading] = useState(""); //Add Heading

    const makeItalic = () => {
        var selection = window.getSelection().toString();
        var editableText = document.getElementById("doc");
        if (selection) {
            if (editableText.innerHTML.includes("<em>" + selection + "</em>")) {
                var newText = editableText.innerHTML.replace("<em>" + selection + "</em>", selection);
                editableText.innerHTML = newText;
            }
            else {
                var newText = editableText.innerHTML.replace(selection, "<em>" + selection + "</em>");
                editableText.innerHTML = newText;
            }
        }
    };

    const makeBold = () => {
        var selection = window.getSelection().toString();
        var editableText = document.getElementById("doc");
        if (selection) {
            if (editableText.innerHTML.includes("<strong>" + selection + "</strong>")) {
                var newText = editableText.innerHTML.replace("<strong>" + selection + "</strong>", selection);
                editableText.innerHTML = newText;
            }
            else {
                var newText = editableText.innerHTML.replace(selection, "<strong>" + selection + "</strong>");
                editableText.innerHTML = newText;
            }
        }
    };

    const makeUnderline = () => {
        var selection = window.getSelection().toString();
        var editableText = document.getElementById("doc");
        if (selection) {
            if (editableText.innerHTML.includes("<u>" + selection + "</u>")) {
                var newText = editableText.innerHTML.replace("<u>" + selection + "</u>", selection);
                editableText.innerHTML = newText;
            }
            else {
                var newText = editableText.innerHTML.replace(selection, "<u>" + selection + "</u>");
                editableText.innerHTML = newText;
            }
        }
    };
    
    //Set text alignment
    const [alignment, setAlignment] = useState('left');
    const changeAlignment = (newAlignment) => {
        setAlignment(newAlignment);
      };

    return (
        <>
            <div className='doc-container'>
                {/* Button Group */}
                <div className="bar">
                    <button className="btn" onClick={() => setShowHeading(!showHeading)}> Ff </button>
                    <span className="separator"></span>
                    <button className="btn" onClick={makeItalic}> <i>I</i> </button>
                    <button className="btn" onClick={makeBold}> <strong>B</strong> </button>
                    <button className="btn" onClick={makeUnderline}> <u>U</u> </button>
                    <span className="separator"></span>
                    <button className="btn" id="btn-img" onClick={() => changeAlignment('left')}><img src={AlignLeft} alt="Align-Left" /></button>
                    <button className="btn" id="btn-img" onClick={() => changeAlignment('center')}><img src={AlignCenter} alt="Align-Center" /></button>
                    <button className="btn" id="btn-img" onClick={() => changeAlignment('right')}><img src={AlignRight} alt="Align-Right" /></button>
                </div>
                {/* Editor */}
                <div contentEditable="true" className="editor" id="doc" style={{ textAlign: alignment}}>
                    <p contentEditable="true">
                        Start typing here.
                        {showHeading && <h1>New heading</h1>}
                    </p>
                </div>
                <Auth/>
            </div>
            
        </>
    )
}