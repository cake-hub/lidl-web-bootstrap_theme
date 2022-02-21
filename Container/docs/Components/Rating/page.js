import React from "react";
import Rating from "@Develop/Components/Rating/rating.html";
import ProductTile from "@Develop/Components/Product tile/productTile.html";

const RatingDefault = () => (
    <Rating />
);

const RatingHoverable = () => (
    <Rating isHoverable={true} ratingResultPercent={.5} />
);

const RatingInteractive = () => (
    <Rating isInteractive={true} ratingResultPercent={.5} />
);

const RatingVariants = () => (
    <React.Fragment>
        <Rating ratingResultPercent={1} ratingCount="53" /><br />
        <Rating ratingResultPercent={.8} ratingCount="231" isInteractive={true} /> (interactive)<br />
        <Rating ratingResultPercent={.5} ratingCount="812" isHoverable={true} /> (hoverable)<br />
        <Rating ratingResultPercent={.4} ratingCount="1" isInteractive={true} /> (interactive)<br />
        <Rating ratingResultPercent={.2} ratingCount="12" />
    </React.Fragment>
);

const RatingProductTileExample = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="row">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile c_prefixChildren={
                    <div className="text-right" style={{marginTop: "-.5rem", height: "1rem"}}>
                        <Rating ratingResultPercent={.6} />
                    </div>
                } />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile c_prefixChildren={
                    <div className="text-right mb-1" style={{marginTop: "-.5rem", height: "1rem"}}>
                        <Rating ratingResultPercent={.7} />
                    </div>
                } />
            </div>
        </div>
    </div>
);

export default {
    RatingDefault,
    RatingHoverable,
    RatingInteractive,
    RatingVariants,
    RatingProductTileExample,
};
