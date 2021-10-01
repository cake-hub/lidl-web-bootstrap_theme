import React from "react";

const AvailabilityBadge = ( { children, className="", ...props } ) => (
    <span className={"av-badge" + (className ? " " + className : "")} {...props} >
        { children }
    </span>
);

export default AvailabilityBadge;
