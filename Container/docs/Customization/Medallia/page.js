import config from "@root/config";
import React from "react";
import Helmet from "react-helmet";
import Header from "@Develop/Components/Header/header.html";
import Footer from "@Develop/Components/Footer/footer.html";
import FooterList from "@Develop/Components/Footer/footerList.html";
import FooterListItem from "@Develop/Components/Footer/footerListItem.html";
import SectionHead from "@Develop/Content/Section head/section-head.html.js";
import ProductTile from "@Develop/Components/Product tile/productTile.html";
import Banner from "@Develop/Components/Banner/banner.html";
import ThemeSlider from "@Develop/Components/Theme slider/themeSlider.html";
import ThemeSliderItem from "@Develop/Components/Theme slider/themeSliderItem.html";

const EmbeddedSurveyOnly = () => (
    <React.Fragment>
        <Helmet>
                <title>Medallia embedded survey</title>

                <link href={config.assetPath + "css/cake.min.css"} rel="stylesheet" />

                <script type="text/javascript" src="https://resources.digital-cloud.medallia.eu/wdceu/30990/onsite/embed.js" async></script>
        </Helmet>
        <div className="p-4">
            <div id="cake_medallia_embedded_survey_wrapper" className="shadow bg-white m-4 py-4">
                <div id="cake_medallia_embedded_survey" className="mx-auto px-4" style={{height: "auto", width: "100%", backgroundColor: "#FFF"}}></div>
            </div>
        </div>
    </React.Fragment>
);

const ExamplePageWithMedallia = () => (
    <React.Fragment>
        <Helmet>
            <title>Medallia embedded survey</title>

            <link href={config.assetPath + "css/cake.min.css"} rel="stylesheet" />

            <script type="text/javascript" src={config.assetPath + "js/cake.min.js"}></script>
            <script type="text/javascript" src="https://resources.digital-cloud.medallia.eu/wdceu/30990/onsite/embed.js" async></script>
            <script type="text/javascript" src={config.assetPath + "js/cake-medallia-surveys.js"} async></script>

        </Helmet>
        <Header />

        <div className="container-responsive mb-4">

            <h1 className="mt-2">Medallia embedded survey</h1>

            <Banner
                c_title="Title"
                c_subhead="Subhead"
            />

            <ThemeSlider data-controller="theme-slider" className="mt-2">
                <ThemeSliderItem c_url="#" c_imgAlt="Nice cat" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" className="theme-slider-slide-active" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title with more text and new line" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
                <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            </ThemeSlider>

            <div id="cake_medallia_embedded_survey_wrapper" className="shadow bg-white my-4 py-4">
                <div id="cake_medallia_embedded_survey" className="mx-auto px-4" style={{height: "auto", width: "100%", backgroundColor: "#FFF"}}></div>
            </div>

            <SectionHead className="mb-2 mt-4">Some other products</SectionHead>

            <div className="row">
                <div className="col-6 col-md-3 mb-2 mb-md-0">
                    <ProductTile />
                </div>
                <div className="col-6 col-md-3 mb-2 mb-md-0">
                    <ProductTile c_productTitle="A long product tile headline that has more content that just one line." c_productDescription="This is a example for more then one line copy text. It shows the equal height of the product tiles in the same row."/>
                </div>
                <div className="col-6 col-md-3 mb-2 mb-md-0">
                    <ProductTile />
                </div>
                <div className="col-6 col-md-3 mb-2 mb-md-0">
                    <ProductTile />
                </div>
            </div>

        </div>

        <Footer>
            <ul className="list-unstyled mb-0">
                <li className="mb-4">
                    <strong className="footer-headline">Headline</strong>
                    <FooterList>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                    </FooterList>
                </li>
                <li>
                    <strong className="footer-headline">Headline</strong>
                    <FooterList>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                    </FooterList>
                </li>
            </ul>

            <hr />

            <FooterList>
                <FooterListItem>Main-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
            </FooterList>
        </Footer>

        <script dangerouslySetInnerHTML={{__html: `
            window.addEventListener ("load", () => {
                document.addEventListener ("cake-medallia.OnSurveyLoaded", () => {
                    console.log ("Medallia from was successfully loaded!");
                });
                document.addEventListener ("cake-medallia.OnSurveySubmitted", () => {
                    console.log ("Medallia form was successfully submitted!");
                    // wait 4 seconds before removing survey
                    setTimeout (() => {
                        const surveyElement = document.getElementById ("cake_medallia_embedded_survey_wrapper");
                        surveyElement.style.display = "none";
                    }, 1000 * 4);
                });
            });
        `}}></script>
    </React.Fragment>
);

const ExampleInviteSurvey = () => (
    <React.Fragment>
        <Helmet>
                <title>Medallia embedded survey</title>
                <script type="text/javascript" src="https://resources.digital-cloud.medallia.eu/wdceu/30990/onsite/embed.js" async></script>
        </Helmet>
        <div style={{width: "100%", minHeight: "600px"}}></div>
    </React.Fragment>
);

export default {
    EmbeddedSurveyOnly,
    ExamplePageWithMedallia,
    ExampleInviteSurvey,
};
