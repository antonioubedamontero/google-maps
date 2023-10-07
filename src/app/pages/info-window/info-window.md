# Info Window (vinculated to a marker).

Google Maps Info Window examples.

See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).

## Steps:

To add a Google Maps marker you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Read about use of markers [see here](../marker/marker.md).
3. Add Google map, marker and info window tags. Example:

```
<google-map
  height="400px"
  width="750px"
  [center]="center"
  [zoom]="zoom"
  (mapClick)="addMarker($event)"
>
  <map-marker
    #marker="mapMarker"
    *ngFor="let markerPosition of markerPositions"
    [position]="markerPosition"
    (mapClick)="openInfoWindow(marker)"
  ></map-marker>
  <map-info-window>
    Information vinculated to this marker
  </map-info-window>
</google-map>
```

In the code above we have defined a map, an array of markers (referenced with marker) and map info window tags.

When map is clicked, we open map info window with vinculated marker (passed as parameter).
