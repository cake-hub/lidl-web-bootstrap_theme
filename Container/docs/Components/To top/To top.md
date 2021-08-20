<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# To top

When clicking the button the page jumps to it's top.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ToTopDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ToTopDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ToTopDefault](examples/ToTopDefault.html)

## Dark background

<ContentRack
    fields='
        "preview": {
            "src": "examples/ToTopNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ToTopNegative.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![ToTopNegative](examples/ToTopNegative.html)

## Fade

Use the `.fade` class to provide the fade animation for a smooth display and hiding of the button when scrolling. To prevent the button from beeing clickable, additionally use the class `.invisible`.
You can use our Javascript to show and hide the button while scrolling the page.

## Position

To place the button in the bottom right corner use `.btn-to-top-position` class.

```html
<button class="btn btn-to-top btn-to-top-position">
    [...]
</button>
```


The to top button could overlay content at the very end of the page. To avoid this behavior you could add some space. E.g. add the `.pb-8` utility class to the footer component. This extend the footer padding bottom to `4rem`. Now the button has enough space and does not hide any content anymore.

```html
<footer class="footer pb-8" [...]>
    [...]
</footer>
```

<ContentRack
    fields='
        "preview": {
            "src": "examples/ToTopPosition.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ToTopPosition.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ToTopPosition](examples/ToTopPosition.html)

## JavaScript

The to top does not work without javascript. You can import our javascript bundle `cake.js` to automatically use this feature. You only must ensure that the property `data-controller="totop"` is set on the button element.

### Initialization

To initialize the javascript with default configuration you could simply run the following code:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.toTop ();
});
```

### Customization

To customize the default behavior you can only embedd the `toTop.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.toTop (options = {
        buttonElements = [],
        buttonQuerySelector = '[data-controller="totop"]',
        offset = 20,
        enableSmoothScrolling = true,
    });
});
```

* `buttonElements [Array]` – provide the specific to top button HTMLElements. (optional)
* `buttonQuerySelector [String]` – provide a query-selector to select all to top button elements. (optional, default: `[data-controller="totop"]`)
* `offset [Number]` – number of pixels to use as offset like explained below. (optional, default: `20`).
* `enableSmoothScrolling [Boolean]` – set to `true` to enable the smooth-scrolling for modern browsers or disable it with `false`. More about the scroll behavior can be read below. (optional, default: `true`).

If you do provide the `options.buttonElements` the `options.buttonQuerySelector` option gets ignored. If you do not provide any `options.buttonElements` always the `options.buttonQuerySelector` is used!

### Offset

The button is shown after an offset of (default) `20px`. You can set a custom offset by adding the optional parameter `offset` during the initialisation.

```javascript
totop (60);
```

The above example will set the offset to `60px`.

### Scroll behavior

By default the script will set the `scroll-behavior: smooth` to the document-element of the page for a smooth scroll animation. This functionality is enabled by default but you have the option to disable this behavior. Set `false` as second value to disable smooth scroll animation.

```javascript
totop (60, false);
```

With this initialization the smooth scrolling will be disabled and therefore the site jumps directly to top of the page, when clicking the button.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ToTopScroll.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ToTopScroll.html",
            "type": "content",
            "selector": "#app"
        },
        "JS":{
            "src": "examples/toTop.js",
            "type": "content"
        }
    '
 />

<Iframe src="examples/ToTopScroll.html" scrolling="yes" style="max-height: 62.5rem" title="Default with scroll function" alt="ToTopScroll" />
