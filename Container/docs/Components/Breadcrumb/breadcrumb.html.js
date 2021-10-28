import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const Breadcrumb = (  { children, className="", ...props }  ) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><Icon className="icon-2" name="house" title="Home" /></a></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb level #1</a></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb level #2</a></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb level #3</a></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb level #4</a></li>
        </ol>
    </nav>
);

export default Breadcrumb;
