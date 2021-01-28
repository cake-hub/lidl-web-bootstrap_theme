import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    navigationHistoryIdentifiers: [],
    headerElement: null,
    headerQuerySelector: '*[data-controller="header"]',
    headerNavigationContainerElement: null,
    headerNavigationContainerQuerySelector: '[data-controller="header/navigation"]',
    headerBackButtonElement: null,
    headerBackButtonQuerySelector: '[data-controller="header/navigation/back"]',
    headerNavigationsElement: null,
    headerNavigationsQuerySelector: '[data-controller="header/navigation/menu"]',
    headerNavigationLinksElement: null,
    headerNavigationLinksQuerySelector: '[data-controller="header/navigation/link"]',
};

window.cake.subnavigation = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    //Fetch header-element
    const navigationSubmenuVisibleClassName = "header-navigation-submenu-visible";
    const hideClassName = "d-none";
    const header = window.cake.utils.getElement (options.headerElement, options.headerQuerySelector);
    if (!header) {
        return; //If no header element exists, do nothing
    }

    const headerNavigationContainer = window.cake.utils.getElement (options.headerNavigationContainerElement, options.headerNavigationContainerQuerySelector, header);
    const headerBackButton = window.cake.utils.getElement (options.headerBackButtonElement, options.headerBackButtonQuerySelector, header);
    let headerNavigations = null;
    let headerNavigationLinks = null;
    const navigationElementDisplays = [];
    let headerNavigationLinksEventListener = [];
    let headerBackButtonEventListener = null;
    let isMobileNavigationInitialized = false;

    const initializeNavigation = () => {
        if (isMobileNavigationInitialized) {
            return;
        }

        headerNavigations = window.cake.utils.getElements (options.headerNavigationsElement, options.headerNavigationsQuerySelector, header);
        headerNavigationLinks = window.cake.utils.getElements (options.headerNavigationLinksElement, options.headerNavigationLinksQuerySelector, header);

            //Check if required elements exists, otherwise do nothing
        if (!headerNavigationContainer || headerNavigations.length < 1) {
            return;
        }

        //Get Some Position-Specific data of navigation
        const headerNavigationHistory = [
            ...options.navigationHistoryIdentifiers
        ];

        //Fetch all the different mobile-navigations
        const navigationElements = {};
        let activeIdenfitier = "";
        let backActionIdentifier = headerBackButton ? headerBackButton.dataset.target : "";
        headerNavigations.forEach ((headerNavigation, idx) => {
            navigationElementDisplays.push ({
                el: headerNavigation,
                display: headerNavigation.classList.contains (hideClassName),
            });
            navigationElements [headerNavigation.dataset.identifier] = headerNavigation;
            if (headerNavigation.dataset.active) {
                activeIdenfitier = headerNavigation.dataset.identifier;
            }
        });
        if (activeIdenfitier === "") {
            activeIdenfitier = navigationElements [Object.keys (navigationElements)[0]].dataset.identifier;
        }

        //Hide all the Subnavigations expect the active one
        for (let identifier in navigationElements) {
            if (identifier === activeIdenfitier) {
                navigationElements [identifier].classList.remove (hideClassName);
            } else {
                navigationElements [identifier].classList.add (hideClassName);
            }
        }

        //Update Back-Button visibility
        const toggleBackButtonVisibility = () => {
            //Update Back-Button
            if (headerNavigationHistory.length <= 0) {
                //no history left => hide back-button
                headerNavigationContainer.classList.remove (navigationSubmenuVisibleClassName);
                headerBackButton.tabIndex = -1;
            } else {
                //history does exist => show back-button
                headerNavigationContainer.classList.add (navigationSubmenuVisibleClassName);
                headerBackButton.tabIndex = 0;
            }
        };

        //Create method to navigate to different navigations
        const navigateToIdentifier = (identifier, history = true) => {
            //If already on actual identifier, do nothing
            if (identifier === activeIdenfitier) {
                return;
            }

            // Dispatch/Trigger/Fire the event (before the change)
            headerNavigationContainer.dispatchEvent(new CustomEvent("navigation-will-change", {
                detail: {
                    identifier: identifier,
                    previousIdentifier: activeIdenfitier,
                    element: navigationElements [identifier],
                    previousElement: navigationElements [activeIdenfitier],
                },
            }));

            //Update History
            if (history) {
                headerNavigationHistory.push (activeIdenfitier);
            }

            const animateScrollTo = (scrollLeft, callback) => {
                //Scroll this here: headerNavigationContainer.scrollLeft
                const start = headerNavigationContainer.scrollLeft,
                    change = scrollLeft - start,
                    increment = 20,
                    duration = 400;
                let currentTime = 0;

                const animateScroll = () => {
                    currentTime += increment;
                    let val = Math.easeInOutQuad(currentTime, start, change, duration);
                    headerNavigationContainer.scrollLeft = val;
                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    } else {
                        callback ();
                    }
                };
                animateScroll();
            }

            //Update Back-Button
            toggleBackButtonVisibility ();

            //Show new navigation-element
            navigationElements [identifier].classList.remove (hideClassName);
            let scrollLeftPosition = 0;
            if (navigationElements [identifier].offsetLeft > headerNavigationContainer.offsetLeft) {
                headerNavigationContainer.scrollLeft = 0;
                scrollLeftPosition = headerNavigationContainer.clientWidth;
            } else {
                headerNavigationContainer.scrollLeft = headerNavigationContainer.clientWidth;
            }
            animateScrollTo (scrollLeftPosition, () => {
                navigationElements [activeIdenfitier].classList.add (hideClassName);
                // headerNavigationContainer.scrollLeft = 0;

                // Dispatch/Trigger/Fire the event (after the change)
                headerNavigationContainer.dispatchEvent(new CustomEvent("navigation-has-changed", {
                    detail: {
                        identifier: identifier,
                        previousIdentifier: activeIdenfitier,
                        element: navigationElements [identifier],
                        previousElement: navigationElements [activeIdenfitier],
                    },
                }));

                //Update the active identifier
                activeIdenfitier = identifier;
            });
        };

        //Add Event for back-button, if exists
        if (headerBackButton) {
            headerBackButtonEventListener = () => {
                if (backActionIdentifier) {
                    navigateToIdentifier (backActionIdentifier);
                } else if (headerNavigationHistory.length >= 1) {
                    navigateToIdentifier (headerNavigationHistory.pop (), false);
                }
            };
            headerBackButton.addEventListener ("click", headerBackButtonEventListener);
        }

        //Add Events to the navigation links
        headerNavigationLinks.forEach (headerNavigationLink => {
            const clickListener = (e) => {
                e.preventDefault ();
                if (headerNavigationLink.dataset.target) {
                    navigateToIdentifier (headerNavigationLink.dataset.target);
                }
            };
            headerNavigationLinksEventListener.push ({
                listener: clickListener,
                element: headerNavigationLink,
            });
            headerNavigationLink.addEventListener ("click", clickListener);
        });

        //Show/Hide Back-Button according history
        toggleBackButtonVisibility ();

        isMobileNavigationInitialized = true;
    };

    const deconstructMobileNavigation = () => {
        if (!isMobileNavigationInitialized) {
            return;
        }
        //Reset display-stylings
        navigationElementDisplays.forEach (navigationElementDisplay => {
            if (navigationElementDisplay.display) {
                navigationElementDisplay.el.classList.add (hideClassName);
            } else {
                navigationElementDisplay.el.classList.remove (hideClassName);
            }
        });
        //hide back-button
        headerNavigationContainer.classList.remove (navigationSubmenuVisibleClassName);
        //remove navigation-links event listener
        headerNavigationLinksEventListener.forEach ((listenerObject) => {
            listenerObject.element.removeEventListener ("click", listenerObject.listener, false);
        });
        headerNavigationLinksEventListener = [];
        //remove back-button event listener
        headerBackButton.removeEventListener ("click", headerBackButtonEventListener, false);

        isMobileNavigationInitialized = false;
    };

    header.addEventListener ("open", (e) => {
        if (e.detail.opened) {
            initializeNavigation ();
        } else if (e.detail ["breakpoint-has-changed"]) {
            deconstructMobileNavigation ();
        }
    });
};

export default window.cake.subnavigation;
