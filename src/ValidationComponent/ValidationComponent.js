import React from 'react';


const validationComponent = (props) => {
    
    const message = props.textLength > 5 ? "Text too long" : "Text too short"

    return (
        <p>Text validation: {message}</p>
    )
}

export default validationComponent;