# Polygon

Google Maps Polygon examples.

See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).

## Steps:

To add a Google Maps Polygon you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and polygon tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
    <map-polygon [paths]="vertices"></map-polygon>
</google-map>
```

In this example, vertices are the coordinates that are rendered.
