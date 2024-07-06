import React from 'react';
import { useState } from "react";
import "./Header-styles.css";

const Header = ({ onButtonClick }) => {
    const handleButtonClick = (button) => {
        onButtonClick(button);
    };
    return (
        <>
            <nav className='nav'>
                <p>SyncWork</p>
                <div className='option'>
                    <button onClick={() => handleButtonClick('Editor')}>Text</button>
                    <button onClick={() => handleButtonClick('Canvas')}>Canvas</button>
                </div>
                <ul>
                    <li>
                        <a href='/'>Code</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;