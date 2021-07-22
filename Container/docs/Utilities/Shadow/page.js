import React from "react";
import CakeExampleImage from "@root/build/CakeExampleImage";

const DefaultShadow = () => (
    <div className="p-4" id="showBox">
        <div class="shadow p-2">Default shadow</div>
    </div>
);

const StrongShadow = () => (
    <div className="p-4" id="showBox">
        <div class="shadow-strong p-2">Strong shadow</div>
    </div>
);

const FlyoutShadow = () => (
    <div className="p-4" id="showBox">
        <div class="shadow-flyout p-2">Flyout shadow</div>
    </div>
);

export default {
    DefaultShadow,
    StrongShadow,
    FlyoutShadow,
};
