import React from "react";

const TypographyHeadlines = () => (
    <React.Fragment>
        <h1>h1. CAKE heading</h1>
        <h2>h2. CAKE heading</h2>
        <h3>h3. CAKE heading</h3>
        <h4>h4. CAKE heading</h4>
        <h5>h5. CAKE heading</h5>
    </React.Fragment>
);

const TypographyDisplayHeadlines = () => (
    <React.Fragment>
        <div class="display-1">Display 1</div>
        <div class="display-2">Display 2</div>
        <div class="display-3">Display 3</div>
        <div class="display-4">Display 4</div>
        <div class="display-5">Display 5</div>
    </React.Fragment>
);

const TypographyLinks = () => (
    <a href="#">This is a Link</a>
);

const TypographyLinksNegative = () => (
    <div className="cake-example-negative" id="showBox">
        <a className="link-negative" href="#">This is a negative Link</a>
    </div>
);

const TypographyLists = () => (
    <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
            <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
    </ul>
);

const TypographyListsUnstyled = () => (
    <ul className="list-unstyled">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
            <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
    </ul>
);

export default {
    TypographyHeadlines,
    TypographyDisplayHeadlines,
    TypographyLinks,
    TypographyLinksNegative,
    TypographyLists,
    TypographyListsUnstyled
};
