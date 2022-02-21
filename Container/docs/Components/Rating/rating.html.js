import React from "react";

const ProductTile = ( {
                        ratingCount="XXX",
                        ratingResultPercent=0,
                        isInteractive=false,
                        isHoverable=false,
                    } ) => (
    <span className={"rating" + (isInteractive ? " rating-interactive" : "") + (isHoverable ? " rating-hoverable" : "")} tabIndex="0" aria-label={"Rating of " + (5/100 * (ratingResultPercent*100)) + " from 5 stars."}>
        <span className="rating-indicators">
            <span className="rating-empty">
                <span tabIndex="0" className="rating-icon icon icon-2"></span>
                <span tabIndex="0" className="rating-icon icon icon-2"></span>
                <span tabIndex="0" className="rating-icon icon icon-2"></span>
                <span tabIndex="0" className="rating-icon icon icon-2"></span>
                <span tabIndex="0" className="rating-icon icon icon-2"></span>
            </span>
            <span className="rating-filled" style={{width: (ratingResultPercent*100) + "%"}}>
                <span className="rating-icon icon icon-2"></span>
                <span className="rating-icon icon icon-2"></span>
                <span className="rating-icon icon icon-2"></span>
                <span className="rating-icon icon icon-2"></span>
                <span className="rating-icon icon icon-2"></span>
            </span>
        </span>
        <span className="rating-details">({ratingCount})</span>
    </span>
);

export default ProductTile;
