<AlertWarning alertHeadline="Not modifiable">
It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>


# Availability badges

![AvailabilityBadgePreview](examples/AvailabilityBadgePreview.html)

The availability badge is a one tag component and is created by adding the `.av-badge` class. We recommend using a `span`, but `display: inline-block` is set.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AvailabilityBadgePreview.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AvailabilityBadgePreview.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![AvailabilityBadgePreview](examples/AvailabilityBadgePreview.html)

## Colors

The default variant is gray, but there are 3 more colors. Just add the color class to the component. Note that the colored dots are automaticly added.
In this example you can see our recommended way to add the group behavior of the component. The availability badge has `text-align: left` set, so it's not effected from it parents.

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
