import React from "react";
import fs from "fs";
import path from "path";
import purify from "purify-css";
import filterCss from "filter-css";
import stripCssComments from "strip-css-comments";
import Helmet from "react-helmet";
import UglifyJS from "uglify-js";
import { minify } from "html-minifier";

import config from "@root/config";
import { rawMarkup } from "@root/helper";
import CookieAlert from "@Develop/Components/Cookie alert/cookieAlert.html";
import { OneTrust } from "@Develop/Components/Cookie alert/OneTrust.html";

const CookieAlertExample = () => (
    <React.Fragment>
        <CookieAlert/>
        <Helmet>
            <script src={config.assetPath + "initialize-cookie-alert.js"}></script>
        </Helmet>
    </React.Fragment>
);

const PreviewCookieBotSource = (sourceCode) => (
    <div className="form-group">
        <textarea
            className="form-control w-100"
            style={{height: "200px"}}
            defaultValue={ sourceCode }>
        </textarea>
    </div>
);

const CookieAlertJavaScript = () => {
    const cookieAlertJavaScriptFilePath = path.join (config.rootPath, '/dist/js/cookieAlert.js');
    let javascriptFile = fs.readFileSync (cookieAlertJavaScriptFilePath, { encoding: "utf8" });
    javascriptFile = UglifyJS.minify (javascriptFile).code;
    return PreviewCookieBotSource (javascriptFile);
};

const CookieAlertHTML = () => {
    let html = rawMarkup (
        <CookieAlert
            c_language="[#LANGUAGE#]"
            c_textDirection="[#TEXTDIRECTION#]"
            c_title="[#TITLE#]"
            c_text="[#TEXT#]"
            c_details="[#DETAILS#]"
            c_acceptButton="[#ACCEPT#]"
            c_acceptConfigurationButton="[#DECLINE#]"
            c_necessaryButton="[#COOKIETYPE_NECESSARY_RAW#]"
            c_preferenceButton="[#COOKIETYPE_PREFERENCE_RAW#]"
            c_statisticsButton="[#COOKIETYPE_STATISTICS_RAW#]"
            c_marketingButton="[#COOKIETYPE_ADVERTISING_RAW#]"
        />,
        null,
        ".html"
    );
    html = minify (html, {
        collapseWhitespace: true,
    });
    return PreviewCookieBotSource (html);
};

const CookieAlertCSS = () => {
    const cookieAlertCSSFilePath = path.join (config.rootPath, '/dist/css/cake-cookiebot.css');
    const cssContent = fs.readFileSync (cookieAlertCSSFilePath, { encoding: "utf8" });

    const transformCssToBeAllowedByCookieBot = (css) => {
        //Filter not supported css-selectors (Cookiebot)
        css = filterCss (css, [
            /@-moz-document/,
            /@supports/,
            /:root/,
        ]);
        // delete all selectors with '@-moz-document' at the beginning (selector content included)
        const regEx = /[\t\f ]*@-moz-document[\t\f ].*\{(?:(?:[\s]|[^{}])*(?:\{(?:[^{}]|[\s])*\})(?:[\s]|[^{}])*)*\}/gm;
        css = css.replace(regEx, "");
        css = purify (
            rawMarkup ( <CookieAlert />, null, ".html" ),
            css, {
                minify: true,
            }
        );
        //Remove css comments, because they are not supported by Cookiebot
        css = stripCssComments (
            css,
            {
                preserve: false,
            }
        );
        return css.trim ();
    }

    return PreviewCookieBotSource (
        transformCssToBeAllowedByCookieBot (cssContent)
    );
};

const CookieAlertOneTrustTemplate = (cssFileName = null) => {
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

const CookieAlertOneTrust = () => {
    return CookieAlertOneTrustTemplate();
};

const CookieAlertOneTrustv2 = () => { // old example, new Link need to be sent after vacation season
    return CookieAlertOneTrustTemplate('cake-onetrust.css');
};

const CookieAlertOneTrustDev = () => {
    return CookieAlertOneTrustTemplate('cake-onetrust.css');
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
        //Remove css comments, because they are not supported by Cookiebot
        css = stripCssComments (
            css,
            {
                preserve: false,
            }
        );
        return css.trim ();
    }

    if(isForShowroom) {
        return PreviewCookieBotSource (
            transformCss4OneTrust (cssContent)
        );
    }
    return transformCss4OneTrust (cssContent);
};

const CookieAlertOneTrustCSS = () => {
    return OneTrustCSS('cake-onetrust.css', true);
};

export default {
    CookieAlertExample,
    CookieAlertJavaScript,
    CookieAlertHTML,
    CookieAlertCSS,
    CookieAlertOneTrust,
    CookieAlertOneTrustv2,
    CookieAlertOneTrustDev,
    CookieAlertOneTrustCSS,
};
