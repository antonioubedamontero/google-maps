# Ground overlay

Google Maps Ground overlay examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## What is ground overlay?

A Ground overlay shows an image fixed on the map.

## Steps:

To add a Google Maps Ground Overlay you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and ground-overlay tags. Example:

```
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  <map-ground-overlay
    url="./assets/images/pizza.jpg"
    [bounds]="imageBounds"
  ></map-ground-overlay>
</google-map>
```

Where url is the image that will be fixed on the map, and bounds represents a rectangle in geographical coordinates.
