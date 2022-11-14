import React from "react";
import Helmet from "react-helmet";

import config from "@root/config";
import CookieAlert from "@Develop/Components/Cookie alert/cookieAlert.html";

const CookieAlertExample = () => (
    <React.Fragment>
        <CookieAlert/>
        <Helmet>
            <script src={config.assetPath + "initialize-cookie-alert.js"}></script>
        </Helmet>
    </React.Fragment>
);

export default {
    CookieAlertExample,
};
