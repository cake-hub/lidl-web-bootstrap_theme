# Migration guide

## From version 4.x to 5.x

### IE Support drop

Because of the force installation of Microsoft Edge on all Microsoft OS from Windows 7 and up, we decided to drop the Microsoft Internet Explorer 11 support. We don't delete our extra SCSS/CSS code yet, but new components and changes no longer take IE 11 into account. We can provide much smaller JavaScript files now, due to this change. If you still need a legacy JavaScript set, [let us know](mailto:cake@lidl.com).


### Bootstrap fork vs Bootstrap theme

We decided to simplify things a little bit. In other words, we rebuild our Bootstrap fork to two Bootstrap themes. It should be simpler for us to update bootstrap now. And it is easier to change a theme than to switch Bootstap forks.
That means you need Bootstrap and our theme in your project, if you want to change or add something.


#### Seperated themes

We splitted the Lidl theme and the Schwarz theme in two projects. This change allows us and you to add more modifications individually in the themes and brands. The only common ground is Bootstrap itself and no shared fork with special settings that can slow you down.

To get to the new themes you need to download or add another package via npm or github.

| Type | usage/download | URL |
|---|---|---|
| NPM | `{{ variables.npmPackageName }}` | [{{ variables.npmPackageUrl }}]({{ variables.npmPackageUrl }}) |
| Github | [{{ variables.bundleDownloadUrl }}]({{ variables.bundleDownloadUrl }}) | [{{ variables.repositoryUrl }}]({{ variables.repositoryUrl }}) |

### Asset changes

We've fixed a typo in the icon name of `calender-clock.svg` and renamed it to `calendar-clock.svg`. So if you've used our `icon__sprite.svg` and the icon `calender-clock` you have to adjust the import to the correct typing. Take a look at the following small example of how the change might look.

```html
<svg class="icon" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
    <title>Calendar clock</title>
    <use xlink:href="assets/images/icon__sprite.svg#calendar-clock">
    </use>
</svg>
```


### HTML changes

#### data-* to data-controller

Affected components: `Header`, `Theme-Slider`, `Accordion`, `Alert`.

We changed all `data-toggle` HTML attributes to `data-controller`. So you should change your templates of `Header` and `Theme-Slider`.
Also on `Accordion` we changed the value too, from `data-toggle="accordion-collapse"` to `data-controller="accordion/input"`.
On `Alert` you need to change `data-dismiss="alert"`to `data-controller="alert"`.

#### New icon classes

We changed the class names of the icon sizing to match the grid naming. In order of this change you need to update all usage of this classes too:

* rename `.icon-8` to `.icon-1`,
* rename `.icon-16` to `.icon-2`,
* rename `.icon-24` to `.icon-3`,
* rename `.icon-32` to `.icon-4`.

You use more variations in your product? Feel free to use the corresponding SCSS mixin to generate more classes like the above: `cake-icon-sizes($size)`.

#### Breadcrumb

We added the class `.icon-2` to the icon from the `Breadcrumb`.

### Refactored JavaScript

We added some changes to our JavaScript files for all components that have one. First of all, we removed any standard event listeners like `DOMContentLoaded` to give all of you more control when to initialize the component. Anyways our combined JavaScript file with all Components `cake.js` is still triggerd on `DOMContentLoaded`.
We changed the parameters of all component init functions, they all have an options object now. All functions have a set of standard settings, so you don't have to provide an option object. However if you want to customize the functionality, you can provide it. We hope this opens the door for more flexibility on your side. You can find everything you need to know in the documentation of this components: How this option object work and what things you can change. For example, the default settings and your settings will merge together, so you don't have to set all default things again.
To make it clear again: The `cake.js` is still a simple to use package that runs like before. There is nothing you have to worry about.

* [Accordion](../Components/Accordion/Accordion.md#javascript)
* [Alert](../Components/Alert/Alert.md#javascript)
* [Form](../Components/Form/Form.md#input-group-password-toggle)
* [Header](../Components/Header/Header.md#javascript)
* [Popover](../Components/Popover/Popover.md#colors-javascript)
* [Tab](../Components/Tab/Tab.md#javascript)
* [Theme-Slider](../Components/Theme_slider/Theme_slider.md#usage-via-javascript)
* [To top](../Components/To_top/To_top.md#javascript)


### SCSS changes

#### New SCSS variables

We added a couple of new SCSS variables. Make sure you don't use some of these already.

* $accordion-max-height
* $accordion-padding-y
* $breadcrumb-icon-margin-top
* $header-mobile-height
* $section-head-min-height
* $section-head-min-height-lg-up
* $theme-slider-width
* $theme-slider-width-md-up

#### Renaming of mixins

We can't overide the built in Bootstrap mixins, so we created new ones. Generally speaking, we renamed our updated versions with a `cake-` prefix. So if you use our SCSS mixins you need to change some calls of them, listed now:

| old name | new name |
|---|---|
| `alert-variant` | `cake-alert-variant` |
| `bg-gradient-variant` | `cake-bg-gradient-variant` |
| `build-font-faces` | `cake-build-font-faces` |
| `button-variant` | `cake-button-variant` |
| `button-outline-variant` | `cake-button-outline-variant` |
| `button-size` | `cake-button-size` |
| `button-size-fixed-height` | `cake-button-size-fixed-height` |
| `dynamic-padding-y-for-fixed-height` | `cake-dynamic-padding-y-for-fixed-height` |
| `font-face` | `cake-font-face` |
| `form-validation-state` | `cake-form-validation-state` |
| `gradient-diagonal-line` | `cake-gradient-diagonal-line` |
| `reset-link` | `cake-reset-link` |
| `triangle` | `cake-triangle` |
| `triangle-position` | `cake-triangle-position` |
| `tippyjs-theme` | `cake-tippyjs-theme` |

If you use the `media-breakpoint-*` mixin, be sure you don't need the third param `orientation`, than you can stick to the bootstrap original mixin. If you need the `orientation` param, feel free to use `cake-media-breakpoint-*`. (`*` can be `up`, `down`, `between` and `only`)


### Minor changes

If you used the SCSS variable `$border-radius-lg` before, it now has the right value of `10px` in it.

We updated the third party packages of `tiny-slider` and `tippy.js`. It was only patches, so the usage is exactly the same as before.

The header is now `position: sticky`, so you don't need extra space for the mobile version anymore.


## From version 3.x to 4.x

### New Git Repositories

The project is now at home in the Git repositories of Azure DevOps for development. **And a public distribution of the latest release is also provided on [GitHub](https://github.com/cake-hub/web-css_framework)!**

### New NPM source URL

It is now possible to get the npm package without authentication! We publish our package with public access to npmjs.com.
You can therefore just remove all the credentials and registry definition you've previously needed because the default settings does now work with our package.
Check out the [download section](../Getting%20started/Download/Download.md) for more details.

### License

Our project use now the Ms-RSL license.

### Folder structure and themes

We included themes for "Schwarz" and "Lidl". So our default "Cake" styling is now also a theme. For this reason some assets are moved to theme folder.

All theme relevant files like CSS, JS, images and fonts are now located in `dist/[THEME-OF-YOUR-CHOICE]/`. E.g. `dist/Lidl/`.

#### JavaScript

* Moved collecting JS file `cake.js` from `js/` folder to `themes/Cake/js`. This file contains all JavaScript components.

You didn't want all JS stuff? Only the components you really use? You can compile your own JS file by including the components you wand or you can use the new provided stand alone JS files for each component. You find the files in `dist/[THEME-OF-YOUR-CHOICE]/js`.

#### SCSS / CSS

* Moved SCSS files `cake-cookiebot.scss`, `cake-grid.scss`, `cake-reboot.scss` and `cake.scss` from `scss/` folder to `themes/Cake/scss`. The general files with `_` prefix stays in `scss/`.
* Renamed classes: `.cake-html-default` to `.html-style` and `.cake-body-default` to `.body-style`.

To make general styles for HTML elements more available, we started to add this styles to classes too. In this case you can add the styles for the body element to other containers too, or extend this parts via SCSS. We try to follow the shown naming till now: "What it is" `-style`.

* Renamed `_variables-color.scss` to `_variables-root.scss`

The Word colors is to specific, so we decided to choose a more general name for the use of this file.

### Component Popover

We updated the 3rd party dependency tippy.js from version 4 to 6. So, some adjustments are necessary. Check out the [migration guide from tippy.js](https://github.com/atomiks/tippyjs/blob/master/MIGRATION_GUIDE.md) to dive deeper. Here are the adjustments we did for our examples.

#### JavaScript

You can include `popover.js` like before. We did the magic for you.

If you want to configure some properties checkout the updated property section of Tippy.js.

#### Styling

The styling part was done by JavaScript in the version before. But now you have to include the 3rd party stylesheets.

```SCSS
@import "~tippy.js/dist/tippy";
@import "~tippy.js/dist/border";
```

Like before you include `@import "~{{ variables.npmPackageName }}/scss/popover"` after 3rd party includes.

##### Theme

There is **no theme "gray"** anymore. Please use **"cake"** instead. The styles are applied to this theme keyword.

### Typography scss import

We removed `_typography-content.scss` and added the content to the `_typography.scss`. The `_typography-font-face.scss` isn't called anymore from the `_typography.scss`, you have to add this to your bundle scss file like the `cake.scss`.

```SCSS
@import "~{{ variables.npmPackageName }}/scss/typography-font-face";
@import "~{{ variables.npmPackageName }}/scss/typography";
```

If you have problems with the import order see our `scss/cake.scss` as an example for a working order.
