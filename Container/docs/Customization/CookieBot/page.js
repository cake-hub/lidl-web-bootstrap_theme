import React from "react";
import fs from "fs";
import path from "path";
import purify from "purify-css";
import filterCss from "filter-css";
import stripCssComments from "strip-css-comments";
import UglifyJS from "uglify-js";
import { minify } from "html-minifier";

import config from "@root/config";
import { rawMarkup } from "@root/helper";
import CookieAlert from "@Develop/Components/Cookie alert/cookieAlert.html";

const PreviewCookieBotSource = (sourceCode) => (
    <div className="form-group">
        <textarea
            className="form-control w-100"
            style={{height: "200px"}}
            defaultValue={ sourceCode }>
        </textarea>
    </div>
);

const CookieBotJavaScript = () => {
    const cookieAlertJavaScriptFilePath = path.join (config.rootPath, '/dist/js/cookieAlert.js');
    let javascriptFile = fs.readFileSync (cookieAlertJavaScriptFilePath, { encoding: "utf8" });
    javascriptFile = UglifyJS.minify (javascriptFile).code;
    return PreviewCookieBotSource (javascriptFile);
};

const CookieBotHTML = () => {
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

const CookieBotCSS = () => {
    const CookieBotCSSFilePath = path.join (config.rootPath, '/dist/css/cake-cookiebot.css');
    const cssContent = fs.readFileSync (CookieBotCSSFilePath, { encoding: "utf8" });

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

export default {
    CookieBotJavaScript,
    CookieBotHTML,
    CookieBotCSS,
};