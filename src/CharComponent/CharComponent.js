import React from 'react';
import './CharComponent.css';


const charComponent = (props) => {
    
    const message = props.textLength > 5 ? "Text too long" : "Text too short"

    return (
        <div className="Char" onClick={() => props.delete(props.index)}>{props.character}</div>
    )
}

export default charComponent;