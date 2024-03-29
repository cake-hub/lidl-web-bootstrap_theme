# Change log

## [6.2.0](https://github.com/cake-hub/lidl-web-bootstrap_theme/tree/v6.2.0) - 2021-08-19

### Added

* `Doc`: "Theme-Slider" | added javaScript file content as "JS" tab


## [5.0.0](https://github.com/cake-hub/lidl-web-bootstrap_theme/tree/v5.0.0) - 2021-01-28

### Changed

* `JS`, `Doc`: "Theme-Slider" | updated javascript to provide `options` object for better integration of CAKE
* `HTML`, `Doc`: "Theme-Slider" | refactor all `data-toggle` properties to `data-controller` for unification of all CAKE components
* `SCSS`: "Theme-Slider" | added the variables `$theme-slider-width` and `$theme-slider-width-md-up` to specify the width of theme-slider
* `NPM`: "Theme-Slider" | updated the dependency `tiny-slider` from version `2.9.1` to `2.9.3`


## [3.10.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.10.0) - 2020-02-27

### Added

* `SCSS`: "Theme-Slider" | The card component has a updated "card-body" padding. The theme slider inherit this value. So we have to set the previos value of `.5rem` explicitly. The padding can be modified with the new `$theme-slider-card-body-padding` variable.


## [3.8.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.8.0) - 2019-11-07

### Changed

* `CSS`: "Theme-Slider" | updated `line-height` of theme-slider headlines to be `120%`
* `CSS`: "Theme-Slider" | updated spacing between subheadline and headline to be `0.25rem`
* `SCSS`: "Theme-Slider" | Use mixins for border

### Fixed

* `SCSS`: "Theme-Slider" | Added `!default` to `$theme-slider-outer-gutter`, `$theme-slider-active-color`, `$theme-slider-active-card-body-bg`, `$theme-slider-active-hover-color`, `$theme-slider-card-inner-border-radius`, `$theme-slider-subhead-font-weight`, `$theme-slider-title-font-weight` in `_variables.scss` file.
* `CSS`: "Theme Slider" | updated title `font-size` to `1rem` on MD and `1.125rem` from LG


## [3.7.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.7.0) - 2019-09-30

### Changed

* `JS`: "Theme-Slider" | updated tiny-slider default config to set fixedWith also on breakpoint, if defined
