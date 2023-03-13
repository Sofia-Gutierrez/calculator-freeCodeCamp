import React from "react";
import "../assets/css/ClearButton.css"

const ClearButton = ({ children, handleClear }) => (
    <div className="clear-button" onClick={handleClear}>
        {children}
    </div>
);

export default ClearButton;