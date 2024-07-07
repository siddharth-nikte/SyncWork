import React from 'react';
import Popup from 'reactjs-popup';
import "./Auth-styles.css"

export default function Auth(){
    return(
    <Popup
    trigger={<button className="new"> + </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
    
          
        <div className="actions">
          <Popup
            trigger={<button className="button"> New </button>}
            position="top center"
            nested
          >
          </Popup>
          <Popup
            trigger={<button className="button"> Join </button>}
            position="top center"
            nested
          >
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
}