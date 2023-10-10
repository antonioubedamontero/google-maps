# Direction Renderer (Seems not to be working)

Google Maps Direction Renderer examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps direction renderer you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and directions renderer tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
  <map-directions-renderer *ngIf="(directionsResults$ | async) as directionsResults"
    [directions]="directionsResults"></map-directions-renderer>
</google-map>
```

Basically does a api call to mapDirectionsService with origin and destination coordinates, type of trip and
subscribes to result. Directions is the direction result calculated by service.
