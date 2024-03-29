<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Theme slider

A slider component for cycling through elements - theme-cards (image, sub-header and title with a link) - like a carousel. The items are based on the [Card](../Card/Card.md) component and use image, title and subtitle. So you have to **include the Card component CSS** to use the product tile.

Modifier classes represent the difference to Card component. If a modifier is used, a prefix to the original class is added. For example `.card` is original and `.theme-slider-card` the modification.


## Overview

Theme slider rely on the 3rd party library [Tiny-Slider](https://github.com/ganlanyuan/tiny-slider) in version 2.9.3. You must use `themeSlider.js` which contains `tiny-slider.js` in order for theme slider to work!


## How it works

The theme slider is a slider for cycling through a series of theme-cards, built with CSS 3D transforms and a bit of JavaScript. It also includes support for previous/next controls with automatic hide and show.
Please be aware that nested carousels are not supported.
Lastly, if you’re building our JavaScript from source, it requires `themeSlider.js`.


## Theme slider example

Using the following syntax, you can create a theme slider with button controls and multiple theme-cards.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ThemesliderDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ThemesliderDefault.html",
            "type": "content",
            "selector": "#showbox"
        },
        "JS":{
            "src": "examples/themeSlider.js",
            "type": "content"
        }
    '
 />

![ThemesliderDefault](examples/ThemesliderDefault.html)

## Usage

### Via data attributes and built-in javascript

Use data attributes to enable the slider functionality. There are different `data-controller` attributes you have to use for different functionalities and elements:

* `data-controller="theme-slider"`: the surrounding container-element which holds all controls and theme slider elements
* `data-controller="theme-slider-slides"`: the element containing all the slides as child-elements
* `data-controller="theme-slider-previous"`: the control for showing previous page of theme slider
* `data-controller="theme-slider-next"`: the control for showing the next page of theme slider

To make the theme slider work, you have to use all the four `data-controller` attributes and at least one slider-item inside the `theme-slider-slides` element. Besides that, the `theme-slider-slides` element can be a list (`ul`) like in the example above, or simply any other element holding multiple child elements with the related CSS classes.

You can extend and customize the built-in JavaScript library of the theme slider by passing a `tinySliderOptions`-object into the `themeSlider ({…})` constructor.
As we used the [tiny-slider](https://github.com/ganlanyuan/tiny-slider) for the core-functionality of theme slider you can pass all option attributes into the constructor like they are listed on their documentation.
> But be careful, because none of these options are guranteed to work with CAKE's implementation!

As an example, you can set the `arrowKeys` attribute to `true`, if you want to be able to control the theme slider with your keyboard. Or you can `loop` through the elements instead of having a fixed start and end of the slider.

```javascript
themeSlider ({
    tinySliderOptions: {
        arrowKeys: true,
        loop: true
    }
});
```

### Via JavaScript

The theme slider does work without javascript. To enhance the features of the theme slider we recommend to use our javascript.
You can import our javascript bundle `cake.js` to automatically use these features. You only must ensure that the above mentioned `data-controllers` are properly configured.

#### Initialization

To initialize the javascript with default configuration you could simply run the following code:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.themeSlider ();
});
```

#### Customization

To customize the default behavior you can only embedd the `themeSlider.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.themeSlider (options = {
        sliderElements: [],
        sliderQuerySelector: '*[data-controller="theme-slider"]',
        sliderListElements: [],
        sliderListQuerySelector: '*[data-controller="theme-slider-slides"]',
        sliderPreviousButtonElements: [],
        sliderPreviousButtonuerySelector: '*[data-controller="theme-slider-previous"]',
        sliderNextButtonElements: [],
        sliderNextButtonuerySelector: '*[data-controller="theme-slider-next"]',
        tinySliderOptions: {},
        autoInitialize: true,
    });
});
```

* `sliderElements [Array]` – provide the wrapper element(s) of your theme sliders (optional)
* `sliderQuerySelector [String]` – provide a query-selector to select theme slider wrapper elements. (optional, default: `*[data-controller="theme-slider"]`)
* `sliderListElements [Array]` – provide the list (`<ul>`) element(s) of your theme sliders (optional)
* `sliderListQuerySelector [String]` – provide a query-selector to select theme slider list elements. (optional, default: `*[data-controller="theme-slider-slides"]`)
* `sliderPreviousButtonElements [Array]` – provide the previous button element(s) of your theme sliders (optional)
* `sliderPreviousButtonuerySelector [String]` – provide a query-selector to select theme slider previous button elements. (optional, default: `*[data-controller="theme-slider-previous"]`)
* `sliderNextButtonElements [Array]` – provide the next button element(s) of your theme sliders (optional)
* `sliderNextButtonuerySelector [String]` – provide a query-selector to select theme slider next button elements. (optional, default: `*[data-controller="theme-slider-next"]`)
* `tinySliderOptions [Object]` – provide your custom [tiny-slider options](https://github.com/ganlanyuan/tiny-slider#options) (optional, default: `{}`)
* `autoInitialize [Boolean]` – configure if the slider should be initialized on method call (`true`) or if you want to manually call the `slider.initialize ()` method (`false`)

If you do provide the `options.[...]Elements` the `options.[...]QuerySelector` option gets ignored. If you do not provide any `options.[...]Elements` always the `options.[...]QuerySelector` is used!

##### Default tiny-slider configuration

If you pass the `tinySliderOptions` configuration property, you overwrite or extend our default tiny-slider configuration which looks like the following:

```javascript
{
    container: themeSliderListElement,
    controls: false,
    nav: false,
    axis: 'horizontal',
    loop: false,
    swipeAngle: false,
    arrowKeys: false, //prevent slide with arrow-keys
    touch: true,
    mouseDrag: false,
    speed: 350,
    slideBy: 'page',
    gutter: 8,
    fixedWidth: 120, //Needs to be set, to make page-slide possible
    responsive: {
        600: {
            fixedWidth: 160,
        }
    },
},
```

You can implement your own slider-logic and just use the HTML-snippet with styled elements above. But therefore you need to take care of accessibility and cross-browser functionality by your own!
Therefore the `aria-hidden` attributes should be set and the tab-navigation should work as expected.

## Theme slider w/o JavaScript

Besides the normal slider version we also offer a version which works without JavaScript. To display the theme slider without JavaScript you have to add the class `.theme-slider-nojs` to the theme slider element. When there is also no `data-controller="theme-slider"` added to the element, the slider will work with the no-js variant even when there is JavaScript available on the client. This behavior will be shown in the example below.

### w/o JavaScript

<ContentRack
    fields='
        "preview": {
            "src": "examples/ThemesliderWithoutJavaScript.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ThemesliderWithoutJavaScript.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![ThemesliderWithoutJavaScript](examples/ThemesliderWithoutJavaScript.html)

To only use the no-js variant as a fallback, when there is no JavaScript available on the client, you have to add additionally to the `.theme-slider-nojs` class the `data-controller="theme-slider"` to the theme slider element. Besides that you have to add the buttons like in the example above. In that case our JavaScript plugin will automatically remove the class `.theme-slider-nojs` and will show the buttons to slide through the theme slider.

### w/o JavaScript as a fallback

<ContentRack
    fields='
        "preview": {
            "src": "examples/ThemesliderWithFallback.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ThemesliderWithFallback.html",
            "type": "content",
            "selector": "#showbox"
        },
        "JS":{
            "src": "examples/themeSlider.js",
            "type": "content"
        }
    '
 />

![ThemesliderWithFallback](examples/ThemesliderWithFallback.html)
