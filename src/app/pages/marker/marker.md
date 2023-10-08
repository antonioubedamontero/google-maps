# Marker

Marker Google Maps examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps marker you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add Google Maps and Marker tag. Example:

```
<google-map height="400px"
            width="750px"
            [center]="center"
            [zoom]="zoom"
            (mapClick)="addMarker($event)">
  <map-marker *ngFor="let markerPosition of markerPositions"
              [position]="markerPosition"
              [options]="markerOptions"></map-marker>
</google-map>
```

In previous code, map-marker represents each map marker.

Each option has this properties:

- position is the coordinates or current marker.
- option is current marker selected options.
