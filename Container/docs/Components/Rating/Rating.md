<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Rating

The product rating uses the star icon as visual representation of the current vote result.
The default voting only shows the result of the vote and the count of votings.

<ContentRack
    fields='
        "preview": {
            "src": "examples/RatingDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RatingDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RatingDefault](examples/RatingDefault.html)

## Interactive and hoverable rating component

Additionally to the default static rating shown above, there are two interactive variants.
One version is **hoverable** and this variant can be used as link or jumpmark.
To set up your rating component as hoverable variant, simply add the `rating-hoverable` class to the outer `rating` element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/RatingHoverable.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RatingHoverable.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RatingHoverable](examples/RatingHoverable.html)

With the **interactive** variant you can hover or focus the stars to indicate your vote.
To set up your rating component as interactive variant, simply add the `rating-interactive` class to the outer `rating` element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/RatingInteractive.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RatingInteractive.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RatingInteractive](examples/RatingInteractive.html)

## Voting result

The rating component has no fixed values, but can take any result between `0` and `100`. To set your result, just set the style to `width: 80%` at the element `rating-filled`. You can see that the rating automatically displays the correct result.
In the examples below you can see different possible results. There are also interactive examples listed here.

<ContentRack
    fields='
        "preview": {
            "src": "examples/RatingVariants.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RatingVariants.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RatingVariants](examples/RatingVariants.html)

## Usage example

In principle, the rating component can be used anywhere. The following is an example of the rating component in the product tile.

<ContentRack
    fields='
        "preview": {
            "src": "examples/RatingProductTileExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RatingProductTileExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RatingProductTileExample](examples/RatingProductTileExample.html)

## Accessibility

To improve the accessibility of the rating component, please always use the `aria-label` attribute as shown in our examples: `aria-label="Rating of 3.5 from 5 stars."`. This will ensure that also disabled and limited users have a change to discover the voting result.
