import React from "react";

const Navbar = ({ children }) => {
    return (
        <div
            style={{
                background: "red",
                width: "100%",
                height: "100px",
                color: "white"
            }}
        >
            {children}
        </div>
    );
};

export default Navbar;
