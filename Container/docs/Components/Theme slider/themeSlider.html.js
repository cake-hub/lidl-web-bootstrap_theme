import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const ThemeSlider = ( { children,
                        className="",
                        c_noJavascript=false,
                        ...props } ) => (
    <div className={"theme-slider " + (c_noJavascript ? "theme-slider-nojs" : "") + className} {...props}>
        { c_noJavascript ? "" :
        <React.Fragment>
            <button className="btn btn-slider theme-slider-btn theme-slider-btn-prev" data-controller="theme-slider-previous">
                <Icon name="arrow-left" title="Previous Slide" className="icon-2" />
            </button>
            <button className="btn btn-slider theme-slider-btn theme-slider-btn-next" data-controller="theme-slider-next">
                <Icon name="arrow-right" title="Next Slide" className="icon-2" />
            </button>
        </React.Fragment>}

        <ul className="theme-slider-slides" data-controller="theme-slider-slides">
            {children}
        </ul>
    </div>
);

export default ThemeSlider;
