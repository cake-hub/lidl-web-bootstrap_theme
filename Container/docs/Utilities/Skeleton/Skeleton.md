# Skeleton

![SkeletonAnimated](examples/SkeletonAnimated.html)

Skeletons are elements that are used as placeholders for content that is still loading. The user thus has an indicator that the content is still loading and at the same time gets a visual bridging of the loading time. As a result, the user perceives the loading time to be shorter, which improves the overall user experience.

Our skeletons are build only using HTML and CSS. Therefore you do not need any JavaScript to create the animation or the element itself. However, you still need to toggle the relevant HTML with JavaScript or any framework to replace the skeletons with the content after it has been loaded.

There are certain guidelines or recommendations for the skeletons that you should follow. You can find them in the design tab under [General -> Skeleton](/Lidl/Web/Design/General/Skeleton/Skeleton.md).

 In the following example you will find a typical product tile and its counterpart with our skeletons.

![SkeletonProductTile](examples/SkeletonProductTile.html)

To create skeletons, use the `.skeleton` class on an element, preferably a `<span>`. To specify the width of the skeleton, use a [grid](../../Layout/Grid/Grid.md), our [sizing utitlities](../Sizing/Sizing.md) or fixed values.
Just replace the content of the elements with the `<span>`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SkeletonDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SkeletonDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SkeletonDefault](examples/SkeletonDefault.html)

To get a kind of "wave" or "shimmer" animation, use the additional class `.shimmer` on your `<span>` element.
This animation creates the effect of an active loading content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SkeletonAnimated.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SkeletonAnimated.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SkeletonAnimated](examples/SkeletonAnimated.html)

We have already learned above how to specify the width of a skeleton. However, there are several ways to adjust the height of the skeletons. On the one hand, you can use our three modifier classes `.slim`, `.medium` and `.thick`. In addition, you can of course pass a fixed value to the element at any time.
The height should always be set, otherwise the skeleton element might not be visible.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SkeletonSizes.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SkeletonSizes.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SkeletonSizes](examples/SkeletonSizes.html)

> For more complex elements or larger groups, you should ideally use the aria-label `aria-hidden="true"`. This way the element will be ignored by screen readers. In addition, the tab index should be set to `-1` for links or interactive elements: `tabindex="-1"` together with the style `pointer-events: none;`. This makes them no longer selectable for the user and removes `:hover`, `:active`, `:focus` events as long as there is no relevant content here. However, it should not be forgotten to adjust these values again after loading the content. An perfect example is the product tile.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SkeletonProductTile.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SkeletonProductTile.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SkeletonProductTile](examples/SkeletonProductTile.html)

To make it easier for you to work with media content such as images, we have created two additional modifier classes to give the skeleton a certain image ratio. This way, you only have to specify the width and automatically get the correct aspect ratio.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SkeletonRatios.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SkeletonRatios.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SkeletonRatios](examples/SkeletonRatios.html)
