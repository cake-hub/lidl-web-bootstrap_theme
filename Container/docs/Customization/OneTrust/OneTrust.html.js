import React from "react";

export const OneTrust = ( { className="",
                    children,
                    ...props} ) => (
    <div id="onetrust-consent-sdk">
        <div className="onetrust-pc-dark-filter ot-fade-in"></div>
        <div id="onetrust-banner-sdk" className="otCenterRounded ot-iab-2 default vertical-align-content" tabIndex="0">
            <div className="ot-sdk-container" role="alertdialog" aria-describedby="onetrust-policy-text" aria-label="Ihre Privatsphäre ist uns wichtig">
                <div className="ot-sdk-row">
                    <div id="onetrust-group-container" className="ot-sdk-twelve ot-sdk-columns">
                        <div id="onetrust-policy">
                            <div className="banner-header">
                                <div className="banner_logo"></div>
                            </div>
                            <h2 id="onetrust-policy-title">Ihre Privatsphäre ist uns wichtig</h2>
                            <span className="ot-b-addl-desc">Wir verarbeiten auf <a href="#" title="Link zu unseren Webseiten">unseren Webseiten</a> Ihre Daten mittels verschiedener Techniken (u.a. Cookies). Diese sind teilweise technisch notwendig, im Übrigen werden sie von uns oder Dritten für komfortable Webseiteneinstellungen, zur Erstellung von Statistiken oder für personalisierte (Werbe-) Maßnahmen verwendet. Dies schließt auch Datentransfers in Länder außerhalb der EU ohne angemessenes Schutzniveau ein. Unter „Ablehnen“ können Sie nur den Einsatz notwendiger Techniken zulassen. Unter „Anpassen“ können sie einzelne Verwendungszwecke zulassen. Weitere Informationen, auch zu Ihrem jederzeitigen Widerrufsrecht, finden Sie in unseren <a href="/datenschutz" title="link zu den Datenschutzbestimmungen">Datenschutzbestimmungen</a>. Unser Impressum finden Sie <a href="/c/impressum/s10005238" title="Link zum Impressum">hier</a>.</span>
                            <p id="onetrust-policy-text">Wir und unsere Partner speichern und/oder greifen auf Informationen auf einem Gerät zu, z.B. auf eindeutige Kennungen in Cookies, um personenbezogene Daten zu verarbeiten. Sie können Ihre Präferenzen akzeptieren oder verwalten. Klicken Sie dazu bitte unten oder besuchen Sie zu einem beliebigen Zeitpunkt die Seite mit den Datenschutzrichtlinien. Diese Präferenzen werden unseren Partnern signalisiert und haben keinen Einfluss auf die Browserdaten.</p>
                            <div className="ot-dpd-container">
                                <h3 className="ot-dpd-title">Wir und unsere Partner verarbeiten Daten, um Folgendes bereitzustellen:</h3>
                                <div className="ot-dpd-content">
                                    <p className="ot-dpd-desc">Genaue Standortdaten verwenden. Geräteeigenschaften zur Identifikation aktiv abfragen. Informationen auf einem Gerät speichern und/oder abrufen. Personalisierte Anzeigen und Inhalte, Anzeigen- und Inhaltsmessungen, Erkenntnisse über Zielgruppen und Produktentwicklungen. <button className="ot-link-btn onetrust-vendors-list-handler">
                                        Liste der Partner (Lieferanten)
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="onetrust-button-group-parent" className="ot-sdk-twelve ot-sdk-columns has-reject-all-button">
                        <div id="onetrust-button-group">
                            <div className="banner-actions-container"><button id="onetrust-reject-all-handler">Alle ablehnen</button> <button id="onetrust-pc-btn-handler">Zwecke anzeigen</button><button id="onetrust-accept-btn-handler">Akzeptieren</button></div>
                        </div>
                    </div>
                    <div id="onetrust-close-btn-container"></div>
                </div>
            </div>
        </div>
        <div id="onetrust-pc-sdk" className="otPcCenter ot-fade-in ot-ftr-stacked" aria-modal="true" role="alertdialog" aria-describedby="ot-pc-desc" lang="de" aria-label="Ihre Privatsphäre">
            <div className="ot-pc-header">
                <div className="ot-pc-logo" role="img" aria-label="Firmenlogo"></div>
                <button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Schließen" tabIndex="0"></button>
            </div>
            <div id="ot-pc-content" className="ot-pc-scrollbar">
                <h2 id="ot-pc-title">Ihre Privatsphäre</h2>
                <div id="ot-pc-desc">
                    Wir verarbeiten Ihre Daten, um Inhalte oder Anzeigen bereitzustellen, und analysieren die Bereitstellung solcher Inhalte oder Anzeigen, um Erkenntnisse über unsere Website zu gewinnen. Wir geben diese Informationen auf der
                    Grundlage einer Einwilligung an unsere Partner weiter. Sie können auf der Grundlage eines der folgenden bestimmten Zwecke oder auf Partnerebene über den Link unter jedem Zweck Ihr Recht auf Einwilligung ausüben. Diese
                    Entscheidungen werden an unsere Anbieter, die am Transparency and Consent Framework teilnehmen, signalisiert. <br />
                    <a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Weitere Informationen zum Datenschutz, wird in neuer registerkarte geöffnet" tabIndex="0">
                        Weitere Informationen
                    </a>
                </div>
                <section className="ot-sdk-row ot-cat-grp">
                    <h3 id="ot-category-title">Einwilligungspräferenzen verwalten</h3>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0002">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0002" aria-labelledby="ot-header-id-C0002"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-C0002">Präferenzen</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-C0002"
                                    id="ot-group-id-C0002"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="C0002"
                                    aria-labelledby="ot-header-id-C0002"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-C0002"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Präferenzen</span></label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0002">
                                Mithilfe dieser Techniken können wir Ihre tatsächlichen oder vermuteten Präferenzen für die komfortable Nutzung unserer Webseiten berücksichtigen. Beispielsweise können wir anhand Ihrer Einstellungen unsere Webseiten
                                in einer für Sie passenden Sprache anzeigen. Außerdem vermeiden wir auf diese Weise, Ihnen Produkte anzuzeigen, die ggf. in Ihrer Region nicht verfügbar sind. Eine Auflistung aller im Einsatz befindlichen „Präferenz
                                Technologien /Cookies“ finden Sie hier:
                            </p>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-C0001">Technisch notwendig</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">
                                Dies sind Cookies und ähnliche Methoden, ohne die Sie unsere Dienste nicht nutzen können (etwa zur richtigen Anzeige unserer Webseite/von Ihnen gewünschten Funktionen, zum Speichern Ihrer Anmeldung im Login-Bereich
                                etc.). Eine Auflistung aller im Einsatz befindlichen technisch notwendigen Technologien / Cookies finden Sie hier:
                            </p>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0003">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-C0003">Statistiken</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-C0003"
                                    id="ot-group-id-C0003"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="C0003"
                                    aria-labelledby="ot-header-id-C0003"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-C0003"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Statistiken</span></label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0003">
                                Diese Techniken ermöglichen es uns, anonyme Statistiken zur Nutzung unserer Dienste zum Zweck deren bedarfsgerechter Gestaltung zu erstellen. Dadurch können wir beispielsweise bestimmen, auf welche Weise wir unsere
                                Webseiten noch besser auf die Gewohnheiten der Nutzer anpassen können. Eine Auflistung aller im Einsatz befindlichen „Statistik Technologien / Cookies“ finden Sie hier:
                            </p>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0004">
                        <button aria-expanded="true" ot-accordion="true" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-C0004">Marketing</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-C0004"
                                    id="ot-group-id-C0004"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="C0004"
                                    aria-labelledby="ot-header-id-C0004"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-C0004"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Marketing</span></label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0004">
                                Hierdurch können wir Ihnen für Sie passende Werbeinhalte anzeigen, die auf der Analyse Ihres pseudonymen Nutzungsverhaltens basieren. Ihr Nutzungsverhalten kann dabei auch über verschiedene Webseiten, Browser oder
                                Endgeräte Anhand einer User-ID (eindeutige Kennung) nachvollzogen werden. Die auf unseren Webseiten und Diensten erhobenen pseudenyme User-ID und die zugehörigen Nutzungsprofile werden zudem mit folgenden Unternehmen
                                geteilt:<br />
                                <br />
                                <ul>
                                    <li>
                                        Kaufland Dienstleistung GmbH &amp; Co. KG als Betreiber von<br />
                                        <ul>
                                            <li><a href="https://filiale.kaufland.de/" tabIndex="0">www.filiale.kaufland.de</a></li>
                                            <li>des Kaufland Vorteilsprogramms Kaufland Card</li>
                                            <li>der Kaufland App</li>
                                            <li>Betreiber der Kundenterminals im Markt</li>
                                        </ul>
                                    </li>
                                    <li>Kaufland eCommerce GmbH &amp; Co. KG als Betreiber des Kaufland Marktplatzes unter <a href="https://kaufland.de" tabIndex="0">www.kaufland.de</a></li>
                                    <li>An die hier aufgeführten <a href="showPrivacyPolicy" tabIndex="0">Dritten</a>.</li>
                                </ul>
                                <br />
                                Durch Ihre Zustimmung zur Erhebung des pseudonymen Nutzerprofils und dessen Weitergabe mitsamt der pseudonymen User-ID zu Marketingzwecken kann Ihnen auf den anderen Kaufland Webseiten und Diensten und ggfls. anderen
                                Kanälen <a href="showPrivacyPolicy" tabIndex="0">Dritter</a> für Sie relevante Werbeinhalte angezeigt werden, die Ihren mutmaßlichen Interessen entsprechen, die sich aus Ihrem Nutzungsprofil ergeben. Sofern Sie die
                                Einwilligung nicht erteilen oder sie diese mit Wirkung für die Zukunft widerrufen, werden Ihnen nur noch zufällige Inhalte auf den entsprechenden Bannerflächen auf unseren Diensten und Webseiten und bei Dritten
                                angezeigt. Eine Auflistung aller im Einsatz befindlichen 'Marketing Technologien / Cookies' finden Sie hier:
                            </p>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="IABV2_1">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IABV2_1" aria-labelledby="ot-header-id-IABV2_1"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-IABV2_1">Informationen auf einem Gerät speichern und/oder abrufen</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-IABV2_1"
                                    id="ot-group-id-IABV2_1"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="IABV2_1"
                                    aria-labelledby="ot-header-id-IABV2_1"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-IABV2_1">
                                    <span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Informationen auf einem Gerät speichern und/oder abrufen</span>
                                </label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IABV2_1">
                                Für die Ihnen angezeigten Verarbeitungszwecke können Cookies, Geräte-Kennungen oder andere Informationen auf Ihrem Gerät gespeichert oder abgerufen werden.
                            </p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="IABV2_1">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="STACK42">
                        <button aria-expanded="true" ot-accordion="true" aria-controls="ot-desc-id-STACK42" aria-labelledby="ot-header-id-STACK42"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-STACK42">Personalisierte Anzeigen und Inhalte, Anzeigen- und Inhaltsmessungen, Erkenntnisse über Zielgruppen und Produktentwicklungen</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-STACK42"
                                    id="ot-group-id-STACK42"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="STACK42"
                                    aria-labelledby="ot-header-id-STACK42"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-STACK42">
                                    <span className="ot-switch-nob" aria-checked="false" role="switch"></span>
                                    <span className="ot-label-txt">Personalisierte Anzeigen und Inhalte, Anzeigen- und Inhaltsmessungen, Erkenntnisse über Zielgruppen und Produktentwicklungen</span>
                                </label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_2">
                                        <h5>Auswahl einfacher Anzeigen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_2"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_2"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Auswahl einfacher Anzeigen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_2"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Anzeigen können Ihnen basierend auf den Inhalten, die Sie ansehen, der Anwendung, die Sie verwenden und Ihrem ungefähren Standort oder Ihrem Gerätetyp eingeblendet werden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_3">
                                        <h5>Ein personalisiertes Anzeigen-Profil erstellen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_3"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_3"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Ein personalisiertes Anzeigen-Profil erstellen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_3"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante personalisierte Anzeigen einzublenden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_4">
                                        <h5>Personalisierte Anzeigen auswählen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_4"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_4"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Personalisierte Anzeigen auswählen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_4"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Personalisierte Anzeigen können Ihnen basierend auf einem über Sie erstellten Profil eingeblendet werden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_5">
                                        <h5>Ein personalisiertes Inhalts-Profil erstellen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_5"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_5"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Ein personalisiertes Inhalts-Profil erstellen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_5"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante personalisierte Inhalte anzuzeigen.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_6">
                                        <h5>Personalisierte Inhalte auswählen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_6"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_6"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Personalisierte Inhalte auswählen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_6"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Personalisierte Inhalte können Ihnen basierend auf einem über Sie erstellten Profil angezeigt werden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_7">
                                        <h5>Anzeigen-Leistung messen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_7"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_7"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Anzeigen-Leistung messen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_7"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Die Leistung und Wirksamkeit von Anzeigen, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_8">
                                        <h5>Inhalte-Leistung messen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_8"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_8"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Inhalte-Leistung messen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_8"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Die Leistung und Wirksamkeit von Inhalten, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_9">
                                        <h5>Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_9"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_9"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_9"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Marktforschung kann verwendet werden, um mehr über die Zielgruppen zu erfahren, die Dienste oder Anwendungen verwenden und sich Anzeigen ansehen.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-subgrp-cntr">
                                <ul className="ot-subgrps">
                                    <li className="ot-subgrp" data-optanongroupid="IABV2_10">
                                        <h5>Produkte entwickeln und verbessern</h5>
                                        <div className="ot-tgl-cntr ot-subgrp-tgl">
                                            <div className="ot-tgl">
                                                <input
                                                    type="checkbox"
                                                    name="switch"
                                                    id="ot-sub-group-id-IABV2_10"
                                                    aria-checked="false"
                                                    role="switch"
                                                    data-optanongroupid="IABV2_10"
                                                    className="cookie-subgroup-handler"
                                                    aria-label="Produkte entwickeln und verbessern"
                                                    tabIndex="0"
                                                />
                                                <label className="ot-switch" htmlFor="ot-sub-group-id-IABV2_10"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Switch Label</span></label>
                                            </div>
                                        </div>
                                        <p className="ot-subgrp-desc">Ihre Daten können verwendet werden, um bestehende Systeme und Software zu verbessern und neue Produkte zu entwickeln.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="STACK42">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_1">
                        <button aria-expanded="true" ot-accordion="true" aria-controls="ot-desc-id-ISFV2_1" aria-labelledby="ot-header-id-ISFV2_1"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-ISFV2_1">Genaue Standortdaten verwenden</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-ISFV2_1"
                                    id="ot-group-id-ISFV2_1"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="ISFV2_1"
                                    aria-labelledby="ot-header-id-ISFV2_1"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-ISFV2_1"><span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Genaue Standortdaten verwenden</span></label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_1">
                                Ihre genauen Standortdaten können für einen oder mehrere Verarbeitungszwecke genutzt werden. Das bedeutet, dass Ihr Standort bis auf wenige Meter präzise bestimmt werden kann
                            </p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="ISFV2_1">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_2">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISFV2_2" aria-labelledby="ot-header-id-ISFV2_2"></button>
                        <div className="ot-acc-hdr">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-ISFV2_2">Geräteeigenschaften zur Identifikation aktiv abfragen</h4>
                            <div className="ot-tgl">
                                <input
                                    type="checkbox"
                                    name="ot-group-id-ISFV2_2"
                                    id="ot-group-id-ISFV2_2"
                                    aria-checked="false"
                                    role="switch"
                                    className="category-switch-handler"
                                    data-optanongroupid="ISFV2_2"
                                    aria-labelledby="ot-header-id-ISFV2_2"
                                    tabIndex="0"
                                />
                                <label className="ot-switch" htmlFor="ot-group-id-ISFV2_2">
                                    <span className="ot-switch-nob" aria-checked="false" role="switch"></span> <span className="ot-label-txt">Geräteeigenschaften zur Identifikation aktiv abfragen</span>
                                </label>
                            </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_2">Ihr Gerät kann über eine Abfrage seiner spezifischen Merkmale erkannt werden.</p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="ISFV2_2">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_1">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISPV2_1" aria-labelledby="ot-header-id-ISPV2_1"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-ISPV2_1">Sicherheit gewährleisten, Betrug verhindern und Fehler beheben</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_1">
                                Ihre Daten können verwendet werden, um betrügerische Aktivitäten zu identifizieren und zu verhindern, und um sicherzustellen, dass Systeme und Prozesse ordnungsgemäß und sicher funktionieren.
                            </p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="ISPV2_1">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_2">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-ISPV2_2" aria-labelledby="ot-header-id-ISPV2_2"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-ISPV2_2">Anzeigen oder Inhalte technisch bereitstellen</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_2">Ihr Gerät kann Informationen empfangen und senden die notwendig sind, damit Sie Inhalte und Anzeigen sehen und nutzen können.</p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="ISPV2_2">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_1">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_1" aria-labelledby="ot-header-id-IFEV2_1"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-IFEV2_1">Mit Offline-Datenquellen zusammenführen</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_1">
                                * Daten aus Offline-Datenquellen können mit Daten aus Ihren Online-Aktivitäten zusammengeführt werden, um sie für einen oder mehrere Verarbeitungszwecke bzw. besondere Verarbeitungszwecke nutzen zu können. * Daten
                                aus Ihren Online-Aktivitäten können mit Offline-Daten zusammengeführt werden, um sie für einen oder mehrere Verarbeitungszwecke oder besondere Verarbeitungszwecke ergänzend zu nutzen.
                            </p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="IFEV2_1">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_2">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_2" aria-labelledby="ot-header-id-IFEV2_2"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-IFEV2_2">Verschiedene Geräte verknüpfen</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_2">Zur Nutzung für einen oder mehrere Verarbeitungszwecke kann ermittelt werden, ob unterschiedliche Geräte zu Ihnen oder Ihrem Haushalt gehören.</p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="IFEV2_2">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_3">
                        <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-IFEV2_3" aria-labelledby="ot-header-id-IFEV2_3"></button>
                        <div className="ot-acc-hdr ot-always-active-group">
                            <div className="ot-plus-minus"><span></span><span></span></div>
                            <h4 className="ot-cat-header" id="ot-header-id-IFEV2_3">Empfangen und Verwenden automatisch gesendeter Geräteeigenschaften für die Identifikation</h4>
                            <div className="ot-always-active">Immer aktiv</div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                            <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_3">Ihr Gerät kann aufgrund von Informationen, die es automatisch sendet wie z.B. IP-Adresse oder Browsertyp von anderen Geräten unterschieden werden.</p>
                            <div className="ot-vlst-cntr">
                                <button className="ot-link-btn category-vendors-list-handler" aria-label="Mit der Schaltfläche „IAB-Anbieterdetails“ wird das Menü „Anbieterliste“ geöffnet" data-parent-id="IFEV2_3">Liste von IAB-Lieferanten‎</button>
                                <a href="https://tcf.cookiepedia.co.uk?lang=de" rel="noopener" target="_blank" tabIndex="0">
                                    &nbsp;|&nbsp;Vollständigen Rechtstext anzeigen&nbsp;<span className="ot-scrn-rdr">Wird in neuer Registerkarte geöffnet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section id="ot-pc-lst" className="ot-pc-scrollbar ot-hide">
                <div id="ot-pc-hdr">
                    <div id="ot-lst-title">
                        <button className="ot-link-btn back-btn-handler" aria-label="Zurück" tabIndex="0">
                            <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" space="preserve">
                                <title>Zurück</title>
                                <g>
                                    <path
                                        fill="#656565"
                                        d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                            l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                            c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                            s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                            L213.13,222.409z"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                        <h3>Lieferantenliste</h3>
                    </div>
                    <div className="ot-lst-subhdr">
                        <div className="ot-search-cntr">
                            <p role="status" className="ot-scrn-rdr"></p>
                            <label htmlFor="vendor-search-handler" className="ot-scrn-rdr"></label>
                            <input id="vendor-search-handler" type="text" name="vendor-search-handler" tabIndex="0" placeholder="Suchen ..." aria-label="Suche nach Lieferantenlisten" />
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                                <title>Search Icon</title>
                                <path
                                    fill="#2e3644"
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                    s-17-7.626-17-17S14.61,6,23.984,6z"
                                ></path>
                            </svg>
                        </div>
                        <div className="ot-fltr-cntr">
                            <button id="filter-btn-handler" aria-label="Filter-Symbol" aria-haspopup="true">
                                <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" space="preserve">
                                    <title>Filter-Symbol</title>
                                    <g>
                                        <path
                                            fill="#fff"
                                            d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
            c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
            c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
            C402.765,25.895,404.093,19.231,400.858,11.427z"
                                        ></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div id="ot-anchor"></div>
                        <section id="ot-fltr-modal">
                            <div id="ot-fltr-cnt">
                                <button id="clear-filters-handler">Filter zurücksetzen</button>
                                <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                                    <div className="ot-fltr-opts">
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_1-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_1" />
                                                <label htmlFor="IABV2_1-filter"><span className="ot-label-txt">Informationen auf einem Gerät speichern und/oder abrufen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_2-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_2" />
                                                <label htmlFor="IABV2_2-filter"><span className="ot-label-txt">Auswahl einfacher Anzeigen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_3-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_3" />
                                                <label htmlFor="IABV2_3-filter"><span className="ot-label-txt">Ein personalisiertes Anzeigen-Profil erstellen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_4-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_4" />
                                                <label htmlFor="IABV2_4-filter"><span className="ot-label-txt">Personalisierte Anzeigen auswählen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_5-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_5" />
                                                <label htmlFor="IABV2_5-filter"><span className="ot-label-txt">Ein personalisiertes Inhalts-Profil erstellen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_6-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_6" />
                                                <label htmlFor="IABV2_6-filter"><span className="ot-label-txt">Personalisierte Inhalte auswählen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_7-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_7" />
                                                <label htmlFor="IABV2_7-filter"><span className="ot-label-txt">Anzeigen-Leistung messen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_8-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_8" />
                                                <label htmlFor="IABV2_8-filter"><span className="ot-label-txt">Inhalte-Leistung messen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_9-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_9" />
                                                <label htmlFor="IABV2_9-filter"><span className="ot-label-txt">Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IABV2_10-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IABV2_10" />
                                                <label htmlFor="IABV2_10-filter"><span className="ot-label-txt">Produkte entwickeln und verbessern</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="ISFV2_1-filter" type="checkbox" aria-checked="true" className="category-filter-handler" tabIndex="0" data-purposeid="ISFV2_1" defaultChecked />
                                                <label htmlFor="ISFV2_1-filter"><span className="ot-label-txt">Genaue Standortdaten verwenden</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="ISFV2_2-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="ISFV2_2" />
                                                <label htmlFor="ISFV2_2-filter"><span className="ot-label-txt">Geräteeigenschaften zur Identifikation aktiv abfragen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="ISPV2_1-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="ISPV2_1" />
                                                <label htmlFor="ISPV2_1-filter"><span className="ot-label-txt">Sicherheit gewährleisten, Betrug verhindern und Fehler beheben</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="ISPV2_2-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="ISPV2_2" />
                                                <label htmlFor="ISPV2_2-filter"><span className="ot-label-txt">Anzeigen oder Inhalte technisch bereitstellen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IFEV2_1-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IFEV2_1" />
                                                <label htmlFor="IFEV2_1-filter"><span className="ot-label-txt">Mit Offline-Datenquellen zusammenführen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IFEV2_2-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IFEV2_2" />
                                                <label htmlFor="IFEV2_2-filter"><span className="ot-label-txt">Verschiedene Geräte verknüpfen</span></label> <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                        <div className="ot-fltr-opt">
                                            <div className="ot-chkbox">
                                                <input id="IFEV2_3-filter" type="checkbox" aria-checked="false" className="category-filter-handler" tabIndex="0" data-purposeid="IFEV2_3" />
                                                <label htmlFor="IFEV2_3-filter"><span className="ot-label-txt">Empfangen und Verwenden automatisch gesendeter Geräteeigenschaften für die Identifikation</span></label>
                                                <span className="ot-label-status">label</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ot-fltr-btns"><button id="filter-apply-handler">Anwenden</button> <button id="filter-cancel-handler">Abbrechen</button></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section id="ot-lst-cnt" className="ot-pc-scrollbar">
                    <div id="ot-sel-blk">
                        <div className="ot-sel-all">
                            <div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Alle Einwilligungen zulassen</span> <span className="ot-li-hdr">Berechtigtes Interesse</span></div>
                            <div className="ot-sel-all-chkbox">
                                <div className="ot-chkbox" id="ot-selall-hostcntr">
                                    <input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" tabIndex="0" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">Berechtigtes Interesse</span></label>
                                    <span className="ot-label-status">Berechtigtes Interesse</span>
                                </div>
                                <div className="ot-chkbox" id="ot-selall-vencntr">
                                    <input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="true" tabIndex="0" aria-label="Alle Lieferanten auswählen Einwilligung" defaultChecked />
                                    <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">Berechtigtes Interesse</span></label> <span className="ot-label-status">Berechtigtes Interesse</span>
                                </div>
                                <div className="ot-chkbox" id="ot-selall-licntr">
                                    <input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" tabIndex="0" aria-label="Alle Lieferanten auswählen Berechtigtes Interesse" />
                                    <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">Berechtigtes Interesse</span></label> <span className="ot-label-status">Berechtigtes Interesse</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ot-sdk-row">
                        <div className="ot-sdk-column">
                            <ul id="ot-ven-lst">
                                <li className="ot-ven-item">
                                    <button className="ot-ven-box" aria-expanded="false" id="IAB1" name="IAB1" aria-controls="IAB-ACC-TXT1" aria-label="Exponential Interactive, Inc d/b/a VDX.tv"></button>
                                    <section className="ot-acc-hdr" htmlFor="IAB1">
                                        <div className="ot-plus-minus"><span></span><span></span></div>
                                        <div className="ot-ven-hdr">
                                            <h3 className="ot-ven-name">Exponential Interactive, Inc d/b/a VDX.tv</h3>
                                            <a className="ot-ven-link" href="https://vdx.tv/privacy/" rel="noopener" target="_blank" tabIndex="0">
                                                Datenschutzerklärung anzeigen&nbsp;<span className="ot-scrn-rdr">Exponential Interactive, Inc d/b/a VDX.tv Wird in neuer Registerkarte geöffnet</span>
                                            </a>
                                        </div>
                                        <div className="ot-tgl-cntr">
                                            <div className="ot-chkbox ot-ven-ctgl">
                                                <input id="ot-ven-chkbox-0" type="checkbox" aria-checked="true" className="vendor-checkbox-handler" defaultChecked vendorid="1" aria-label="Exponential Interactive, Inc d/b/a VDX.tv" tabIndex="0" />
                                                <label htmlFor="ot-ven-chkbox-0"><span className="ot-label-txt">Exponential Interactive, Inc d/b/a VDX.tv</span></label>
                                            </div>
                                            <div className="ot-arw-cntr">
                                                <svg className="ot-arw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="ot-acc-txt" id="IAB-ACC-TXT1" aria-labelledby="IAB-ACC-TXT1" role="region">
                                        <ul className="ot-ven-dets">
                                            <li className="ot-ven-disc">
                                                <h4>Lebensdauer :</h4>
                                                <span> 3 Monate</span>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Einwilligungszwecke</h4>
                                                <ul>
                                                    <li><p>Informationen auf einem Gerät speichern und/oder abrufen</p></li>
                                                    <li><p>Auswahl einfacher Anzeigen</p></li>
                                                    <li><p>Ein personalisiertes Anzeigen-Profil erstellen</p></li>
                                                    <li><p>Personalisierte Anzeigen auswählen</p></li>
                                                    <li><p>Anzeigen-Leistung messen</p></li>
                                                    <li><p>Inhalte-Leistung messen</p></li>
                                                    <li><p>Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</p></li>
                                                    <li><p>Produkte entwickeln und verbessern</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Besondere Zwecke</h4>
                                                <ul>
                                                    <li><p>Sicherheit gewährleisten, Betrug verhindern und Fehler beheben</p></li>
                                                    <li><p>Anzeigen oder Inhalte technisch bereitstellen</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Funktionen</h4>
                                                <ul>
                                                    <li><p>Mit Offline-Datenquellen zusammenführen</p></li>
                                                    <li><p>Empfangen und Verwenden automatisch gesendeter Geräteeigenschaften für die Identifikation</p></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ot-ven-item">
                                    <button className="ot-ven-box" aria-expanded="false" id="IAB2" name="IAB2" aria-controls="IAB-ACC-TXT2" aria-label="Captify Technologies Limited" disc-vid="2"></button>
                                    <section className="ot-acc-hdr" htmlFor="IAB2">
                                        <div className="ot-plus-minus"><span></span><span></span></div>
                                        <div className="ot-ven-hdr">
                                            <h3 className="ot-ven-name">Captify Technologies Limited</h3>
                                            <a className="ot-ven-link" href="https://www.captifytechnologies.com/privacy-notice/" rel="noopener" target="_blank" tabIndex="0">
                                                Datenschutzerklärung anzeigen&nbsp;<span className="ot-scrn-rdr">Captify Technologies Limited Wird in neuer Registerkarte geöffnet</span>
                                            </a>
                                        </div>
                                        <div className="ot-tgl-cntr">
                                            <div className="ot-chkbox ot-ven-ctgl">
                                                <input id="ot-ven-chkbox-1" type="checkbox" aria-checked="true" className="vendor-checkbox-handler" defaultChecked vendorid="2" aria-label="Captify Technologies Limited" tabIndex="0" />
                                                <label htmlFor="ot-ven-chkbox-1"><span className="ot-label-txt">Captify Technologies Limited</span></label>
                                            </div>
                                            <div className="ot-arw-cntr">
                                                <svg className="ot-arw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="ot-acc-txt" id="IAB-ACC-TXT2" aria-labelledby="IAB-ACC-TXT2" role="region">
                                        <ul className="ot-ven-dets">
                                            <li className="ot-ven-disc">
                                                <h4>Lebensdauer :</h4>
                                                <span> 12 Monate</span>
                                                <p>Dieser Anbieter verwendet neben Cookies auch andere Methoden zum Speichern von oder Zugreifen auf Informationen.</p>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Einwilligungszwecke</h4>
                                                <ul>
                                                    <li><p>Informationen auf einem Gerät speichern und/oder abrufen</p></li>
                                                    <li><p>Auswahl einfacher Anzeigen</p></li>
                                                    <li><p>Ein personalisiertes Anzeigen-Profil erstellen</p></li>
                                                    <li><p>Personalisierte Anzeigen auswählen</p></li>
                                                    <li><p>Anzeigen-Leistung messen</p></li>
                                                    <li><p>Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</p></li>
                                                    <li><p>Produkte entwickeln und verbessern</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Besondere Zwecke</h4>
                                                <ul>
                                                    <li><p>Sicherheit gewährleisten, Betrug verhindern und Fehler beheben</p></li>
                                                    <li><p>Anzeigen oder Inhalte technisch bereitstellen</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Funktionen</h4>
                                                <ul>
                                                    <li><p>Verschiedene Geräte verknüpfen</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Sonderfunktionen</h4>
                                                <ul>
                                                    <li><p>Geräteeigenschaften zur Identifikation aktiv abfragen</p></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ot-ven-item">
                                    <button className="ot-ven-box" aria-expanded="false" id="IAB4" name="IAB4" aria-controls="IAB-ACC-TXT4" aria-label="Roq.ad Inc." disc-vid="4"></button>
                                    <section className="ot-acc-hdr" htmlFor="IAB4">
                                        <div className="ot-plus-minus"><span></span><span></span></div>
                                        <div className="ot-ven-hdr">
                                            <h3 className="ot-ven-name">Roq.ad Inc.</h3>
                                            <a className="ot-ven-link" href="https://www.roq.ad/privacy-policy" rel="noopener" target="_blank" tabIndex="0">
                                                Datenschutzerklärung anzeigen&nbsp;<span className="ot-scrn-rdr">Roq.ad Inc. Wird in neuer Registerkarte geöffnet</span>
                                            </a>
                                        </div>
                                        <div className="ot-tgl-cntr">
                                            <div className="ot-chkbox ot-ven-ctgl">
                                                <input id="ot-ven-chkbox-2" type="checkbox" aria-checked="true" className="vendor-checkbox-handler" defaultChecked vendorid="4" aria-label="Roq.ad Inc." tabIndex="0" />
                                                <label htmlFor="ot-ven-chkbox-2"><span className="ot-label-txt">Roq.ad Inc.</span></label>
                                            </div>
                                            <div className="ot-arw-cntr">
                                                <svg className="ot-arw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="ot-acc-txt" id="IAB-ACC-TXT4" aria-labelledby="IAB-ACC-TXT4" role="region">
                                        <ul className="ot-ven-dets">
                                            <li className="ot-ven-disc">
                                                <h4>Lebensdauer :</h4>
                                                <span> 12 Monate</span>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Einwilligungszwecke</h4>
                                                <ul>
                                                    <li><p>Informationen auf einem Gerät speichern und/oder abrufen</p></li>
                                                    <li><p>Auswahl einfacher Anzeigen</p></li>
                                                    <li><p>Ein personalisiertes Anzeigen-Profil erstellen</p></li>
                                                    <li><p>Personalisierte Anzeigen auswählen</p></li>
                                                    <li><p>Anzeigen-Leistung messen</p></li>
                                                    <li><p>Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</p></li>
                                                    <li><p>Produkte entwickeln und verbessern</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Funktionen</h4>
                                                <ul>
                                                    <li><p>Mit Offline-Datenquellen zusammenführen</p></li>
                                                    <li><p>Verschiedene Geräte verknüpfen</p></li>
                                                    <li><p>Empfangen und Verwenden automatisch gesendeter Geräteeigenschaften für die Identifikation</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Sonderfunktionen</h4>
                                                <ul>
                                                    <li><p>Genaue Standortdaten verwenden</p></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ot-ven-item">
                                    <button className="ot-ven-box" aria-expanded="false" id="IAB1144" name="IAB1144" aria-controls="IAB-ACC-TXT1144" aria-label="Unicredit BankAustria AG" disc-vid="1144"></button>
                                    <section className="ot-acc-hdr" htmlFor="IAB1144">
                                        <div className="ot-plus-minus"><span></span><span></span></div>
                                        <div className="ot-ven-hdr">
                                            <h3 className="ot-ven-name">Unicredit BankAustria AG</h3>
                                            <a className="ot-ven-link" href="https://www.bankaustria.at/rechtliches-datenschutz.jsp" rel="noopener" target="_blank" tabIndex="0">
                                                Datenschutzerklärung anzeigen&nbsp;<span className="ot-scrn-rdr">Unicredit BankAustria AG Wird in neuer Registerkarte geöffnet</span>
                                            </a>
                                        </div>
                                        <div className="ot-tgl-cntr">
                                            <div className="ot-chkbox ot-ven-ctgl">
                                                <input id="ot-ven-chkbox-889" type="checkbox" aria-checked="true" className="vendor-checkbox-handler" defaultChecked vendorid="1144" aria-label="Unicredit BankAustria AG" tabIndex="0" />
                                                <label htmlFor="ot-ven-chkbox-889"><span className="ot-label-txt">Unicredit BankAustria AG</span></label>
                                            </div>
                                            <div className="ot-arw-cntr">
                                                <svg className="ot-arw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="ot-acc-txt" id="IAB-ACC-TXT1144" aria-labelledby="IAB-ACC-TXT1144" role="region">
                                        <ul className="ot-ven-dets">
                                            <li className="ot-ven-disc">
                                                <h4>Lebensdauer :</h4>
                                                <span> 12 Monate</span>
                                                <p>Dieser Anbieter verwendet neben Cookies auch andere Methoden zum Speichern von oder Zugreifen auf Informationen.</p>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Einwilligungszwecke</h4>
                                                <ul>
                                                    <li><p>Informationen auf einem Gerät speichern und/oder abrufen</p></li>
                                                    <li><p>Auswahl einfacher Anzeigen</p></li>
                                                    <li><p>Ein personalisiertes Anzeigen-Profil erstellen</p></li>
                                                    <li><p>Personalisierte Anzeigen auswählen</p></li>
                                                    <li><p>Anzeigen-Leistung messen</p></li>
                                                    <li><p>Inhalte-Leistung messen</p></li>
                                                    <li><p>Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen</p></li>
                                                    <li><p>Produkte entwickeln und verbessern</p></li>
                                                </ul>
                                            </li>
                                            <li className="ot-ven-pur">
                                                <h4>Funktionen</h4>
                                                <ul>
                                                    <li><p>Mit Offline-Datenquellen zusammenführen</p></li>
                                                    <li><p>Verschiedene Geräte verknüpfen</p></li>
                                                    <li><p>Empfangen und Verwenden automatisch gesendeter Geräteeigenschaften für die Identifikation</p></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div className="ot-pc-footer">
                <div className="ot-btn-container">
                    <button className="ot-pc-refuse-all-handler" tabIndex="0">Alle ablehnen</button> <button className="save-preference-btn-handler onetrust-close-btn-handler" tabIndex="0">Meine Auswahl bestätigen</button>
                    <button id="accept-recommended-btn-handler" tabIndex="0">Alle zulassen</button>
                </div>
                <div className="ot-pc-footer-logo">
                    <a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" aria-label="Powered by OneTrust Wird in neuer Registerkarte geöffnet" tabIndex="0">
                        <img alt="Powered by Onetrust" src="https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg" title="Powered by OneTrust Wird in neuer Registerkarte geöffnet" />
                    </a>
                </div>
            </div>
            <span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite"></span><iframe className="ot-text-resize" title="onetrust-text-resize" aria-hidden="true"></iframe>
        </div>
        <div id="ot-sdk-btn-floating" title="Voreinstellungen verwalten" className="ot-floating-button ot-hide ot-pc-open">
            <div className="ot-floating-button__front custom-persistent-icon"><button type="button" className="ot-floating-button__open" aria-label="Präferenzen öffnen"></button></div>
            <div className="ot-floating-button__back custom-persistent-icon">
                <button type="button" className="ot-floating-button__close">
                    <svg role="presentation" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Banner_02" className="ot-floating-button__svg-fill" transform="translate(-318.000000, -725.000000)" fill="#ffffff" fillRule="nonzero">
                                <g id="Group-2" transform="translate(305.000000, 712.000000)">
                                    <g id="icon/16px/white/close">
                                        <polygon id="Line1" points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                                        <polygon id="Line2" transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) " points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
);
