import React from "react";
import AvailabilityBadge from "@Develop/Components/Availability badge/availabilityBadge.html";

const AvailabilityBadgePreview = () => (
    <AvailabilityBadge className="av-badge-dot">availability badge</AvailabilityBadge>
);

const AvailabilityBadgeVariants = () => (
    <React.Fragment>
        <AvailabilityBadge className="ml-2">availability badge</AvailabilityBadge>
        <AvailabilityBadge className="av-badge-dot ml-1 mr-2">availability badge</AvailabilityBadge>
    </React.Fragment>
);

const AvailabilityBadgeColors = () => (
    <React.Fragment>
        <AvailabilityBadge className="av-badge-dot mt-1 mx-2">gray</AvailabilityBadge><br />
        <AvailabilityBadge className="av-badge-success mt-1 mx-2">success</AvailabilityBadge><br />
        <AvailabilityBadge className="av-badge-attention mt-1 mx-2">attention</AvailabilityBadge><br />
        <AvailabilityBadge className="av-badge-danger mt-1 mx-2">danger</AvailabilityBadge>
    </React.Fragment>
);

const AvailabilityBadgeLong = () => (
    <div style={{maxWidth: "140px"}} id="#showBox">
        <AvailabilityBadge className="av-badge-dot">Availability badges with long content</AvailabilityBadge>
    </div>
);

export default {
    AvailabilityBadgePreview,
    AvailabilityBadgeVariants,
    AvailabilityBadgeColors,
    AvailabilityBadgeLong,
};
