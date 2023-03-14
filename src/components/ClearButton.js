import React from "react";
import "../assets/css/ClearButton.css"

const ClearButton = ({ children, handleClear }) => (
    <button className="clear-button" onClick={handleClear}>
        {children}
    </button>
);

export default ClearButton;