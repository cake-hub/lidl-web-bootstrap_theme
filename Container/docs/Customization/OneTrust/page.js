import React from "react";
import fs from "fs";
import path from "path";
import purify from "purify-css";
import stripCssComments from "strip-css-comments";
import Helmet from "react-helmet";

import config from "@root/config";
import { rawMarkup } from "@root/helper";
import { OneTrust } from "@Develop/Customization/OneTrust/OneTrust.html";

const OutputSourceCode = (sourceCode) => (
    <div className="form-group">
        <textarea
            className="form-control w-100"
            style={{height: "200px"}}
            defaultValue={ sourceCode }>
        </textarea>
    </div>
);

const OneTrustTemplate = (cssFileName = null) => {
    const styles = cssFileName ? OneTrustCSS(cssFileName, false) : null;

    return (
        <React.Fragment>
            <Helmet>
                <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="688b250d-2690-400d-af88-2c66c3bf1f75-test"></script>
                <script type="text/javascript">
                    {"function OptanonWrapper() { }"}
                </script>
                <script type="text/javascript" charset="UTF-8" src="cookieAlertOneTrust.js" defer></script>
                {/* <link rel="stylesheet" type="text/css" href="../../../_assets/css/{cssFileName}"></link> */}
                <style id="onetrust-costume-css">{ styles }</style>
                <script type="text/javascript" defer>
                    {"let intervalId = setInterval(() => {const oneTrustCss = document.querySelector('#onetrust-style'); const oneTrustCostumeCss = document.querySelector('#onetrust-costume-css'); if(oneTrustCss != null) {oneTrustCss.after(oneTrustCostumeCss); console.log('css moved'); clearInterval(intervalId)}},17);"}
                </script>
            </Helmet>
        </React.Fragment>
    );
};

const OneTrustExample = () => {
    return OneTrustTemplate();
};

const OneTrustDev = () => { // develop envirement
    return OneTrustTemplate('cake-onetrust.css');
};

const OneTrustCSS = (fileName ,isForShowroom = true) => {
    const cookieAlertCSSFilePath = path.join (config.rootPath, '/dist/css/' + fileName);
    const cssContent = fs.readFileSync (cookieAlertCSSFilePath, { encoding: "utf8" });
    const html4Purify = <OneTrust />;

    const transformCss4OneTrust = (css) => {
        css = purify (
            rawMarkup ( html4Purify, null, ".html" ),
            css, {
                minify: true,
            }
        );
        //Remove css comments
        css = stripCssComments (
            css,
            {
                preserve: false,
            }
        );
        return css.trim ();
    }

    if(isForShowroom) {
        return OutputSourceCode (
            transformCss4OneTrust (cssContent)
        );
    }
    return transformCss4OneTrust (cssContent);
};

const OneTrustCSSOutput = () => {
    return OneTrustCSS('cake-onetrust.css', true);
};

export default {
    OneTrustExample,
    OneTrustDev,
    OneTrustCSSOutput,
};
