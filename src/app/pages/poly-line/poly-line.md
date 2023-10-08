# Polyline

Google Maps Polylines examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps Polylines you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and polyline tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
<map-polyline [path]="vertices"></map-polyline>
</google-map>
```

In this example, vertices are the coordinates that are rendered.
