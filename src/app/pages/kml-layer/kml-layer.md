# Kml Layer

Google Maps kml layer examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## What is a kml layer?

KML Layers specify a set of features (such as place marks, images, polygons, 3D models, textual descriptions, etc.) for display in Earth browser, such as Google Earth and Google Maps.

## Steps:

To add a Google Maps kml layer you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and kml layer tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
  <map-kml-layer [url]="kmlUrl"></map-kml-layer>
</google-map>
```

Where url is the url where the kml layer is placed.
