import React from "react";
import ProductTile from "@Develop/Components/Product tile/productTile.html";

const SkeletonDefault = () => (
    <span className="skeleton medium col-4"></span>
);

const SkeletonAnimated = () => (
    <span className="skeleton medium shimmer col-4"></span>
);

const SkeletonSizes = () => (
    <p aria-hidden="true">
        <span className="skeleton slim shimmer col-4 mb-1"></span><br />
        <span className="skeleton medium shimmer col-4 mb-1"></span><br />
        <span className="skeleton thick shimmer col-4 mb-1"></span><br />
        <span className="skeleton shimmer col-4" style={{height: "4rem"}}></span>
    </p>
);

const SkeletonRatios = () => (
    <p aria-hidden="true">
        <span className="skeleton skeleton-4-to-3 shimmer col-4 mb-1"></span><br />
        <span className="skeleton skeleton-16-to-9 shimmer col-4"></span>
    </p>
);

const SkeletonProductTile = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="row">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <a href="#" tabIndex={-1} style={{pointerEvents: "none"}} className="card product-tile-card" aria-hidden="true">
                    <div className="card-img-top skeleton skeleton-4-to-3 shimmer"></div>
                    <div className="card-body product-tile-card-body">
                        <h3 className="card-title product-tile-card-title">
                            <span className="skeleton medium shimmer col-8"></span>
                        </h3>
                        <p className="card-text product-tile-card-text">
                            <span className="skeleton slim shimmer col-12"></span>
                            <span className="skeleton slim shimmer col-10"></span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default {
    SkeletonDefault,
    SkeletonAnimated,
    SkeletonSizes,
    SkeletonRatios,
    SkeletonProductTile,
};
