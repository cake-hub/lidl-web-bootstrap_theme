<AlertWarning alertHeadline="Not modifiable">
It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>


# Availability badges

![AvailabilityBadgePreview](examples/AvailabilityBadgePreview.html)

The availability badge is a one tag component and is created by adding the `.av-badge` class. We recommend using a `span`, but `display: inline-block` is set.
Note that the colored dots are added by extending the class list with `.av-badge-dot`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AvailabilityBadgeVariants.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AvailabilityBadgeVariants.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![AvailabilityBadgeVariants](examples/AvailabilityBadgeVariants.html)

## Colors

The default variant is gray, but there are 3 more colors. Just add the color class to the component.
In this example you can see our recommended way to add the group behavior of the component. The availability badge has `text-align: left` set, so it's not effected from it parents. Note that when using a colored availability badge, the `.av-badge-dot` class is not required but added automatically.

* `.av-badge-success`
* `.av-badge-attention`
* `.av-badge-danger`

<ContentRack
    fields='
        "preview": {
            "src": "examples/AvailabilityBadgeColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AvailabilityBadgeColors.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
/>

![AvailabilityBadgeColors](examples/AvailabilityBadgeColors.html)

## Line breaks

Now an example of what happens when there is not enough space for the inner wording.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AvailabilityBadgeLong.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AvailabilityBadgeLong.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![AvailabilityBadgeLong](examples/AvailabilityBadgeLong.html)
