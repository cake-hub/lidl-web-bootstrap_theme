import React from "react";
import AvailabilityBadge from "@Develop/Components/Availability badge/availabilityBadge.html";

const AvailabilityBadgePreview = () => (
    <AvailabilityBadge>availability badge</AvailabilityBadge>
);

const AvailabilityBadgeColors = () => (
    <div style={{marginRight: "-16px", marginTop: "-8px", maxWidth: "170px", textAlign: "right"}} id="showBox">
        <AvailabilityBadge className="mt-1 ml-2">gray</AvailabilityBadge>
        <AvailabilityBadge className="av-badge-success mt-1 ml-2">success</AvailabilityBadge>
        <AvailabilityBadge className="av-badge-attention mt-1 ml-2">attention</AvailabilityBadge>
        <AvailabilityBadge className="av-badge-danger mt-1 ml-2">danger</AvailabilityBadge>
    </div>
);

const AvailabilityBadgeLong = () => (
    <div style={{maxWidth: "140px"}} id="#showBox">
        <AvailabilityBadge>Availability badges with long content</AvailabilityBadge>
    </div>
);

export default {
    AvailabilityBadgePreview,
    AvailabilityBadgeColors,
    AvailabilityBadgeLong,
};
