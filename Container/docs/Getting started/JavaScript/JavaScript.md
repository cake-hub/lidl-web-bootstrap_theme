# JavaScript

Bring CAKE to life with our optional JavaScript plugins built in **vanilla JavaScript**. Learn about each plugin, our data and programmatic API options, and more.

## Default settings

Some of our components provide you some interactive behavior created by our JavaScript libraries. These are all set up with some default settings, which should be just perfect in most of the cases.
To get our available JavaScript libraries working in your project, all you have to do is to import our JavaScript:

```html
<script src="dist/Lidl/js/cake.min.js"></script>
```

If you have applied the correct data-attributes to your html, then this script will do all the rest for you.
It will call all our JavaScript libraries with our default settings and it has also imported all dependencies and so forth.

## Programmatic API

To override our default settings or if you want to use only one or multiple specific JavaScript libraries, you have to import them by your own.

```html
<script src="dist/Lidl/js/themeSlider.min.js"></script>
<script src="dist/Lidl/js/popover.min.js"></script>
```

In this case you have to call the init-function by your own, so that the scripts start working. By calling the initialization functions, you can provide your own individual settings to these libraries as described in the respective component documentation.
When you have imported the required JavaScript libraries, you can access them via a special `cake`-object attatched to the `window` element:

```html
<script type="application/javascript">
    window.cake.themeSlider ({
        …individual settings
    });
    cake.popover ({
        …individual settings
    });
</script>
```

> ### Do not import the `cake(.min).js` file
>
> If you want to use only some of our JavaScript libraries, you are not allowed to import the `cake(.min).js` file. This will cause some errors, because then all of the libraries would get initialized twice!

## Utilities / CAKE-DOM

In addition to the JavaScript for our individual components, we added more utilities with the CAKE DOM (can be found at `./dist/js/cakeDOM(.min).js`) and extended the JavaScript functionality of specific elements. Below you will find all the extensions and utilities made available to you by using our bundle file (`cake(.min).js`) or the CAKE DOM (`cakeDOM(.min).js`).

### Source code

<ContentRack
    fields='
        "<JS>":{
            "src": "examples/cakeDOM.js",
            "type": "content"
        }
    '
/>

### List of extensions and utilities

1. Extensions
    * `Element.prototype.siblingSelector (query)` – This selector can be applied to all objects of the type `Element` to query a **single** sibling element of a given query.
    * `Element.prototype.siblingSelectorAll (query)` – This selector can be applied to all objects of the type `Element` to query **all** sibling elements of a given query
    * `Window.prototype.resizeThrottled (eventMethod[, throttleSpeed = 66])` – This method can be used on the `Window` element to intercept the resize event and execute it in a performant way only at most every `Xms` (default: 66ms).
2. Polyfills
    * `window.CustomEvent` – A polyfill for all browsers that do not natively support the `CustomEvent`.
    * `Element.closest (element)` – A polyfill to make the `closest` method on elements available for all browsers.
    * `NodeList.prototype.forEach (callback[, thisArg])` – The functionality of the `forEach` is added to the `NodeList` type for all browsers.
3. Utilities
    * `window.cake.utils.getElement (element, querySelector[, baseElement = document[, selectorMethod = "querySelector"]])` – This function is used to get a specific element or an element by a query selector within a specific element.
    * `window.cake.utils.getElements (elements, querySelector[, baseElement = document[, selectorMethod = "querySelectorAll"]])` – This function is used to get an element or elements by a query selector within a specific element.
