# Traffic Layer

Google Maps Traffic Layer examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## What is a traffic layer?

The Traffic, Transit, and Bicycling layers modify the base map layer to display current traffic conditions, local transit networks, or bicycling route information. These layers are available in select regions.

## Steps:

To add a Google Maps traffic layer you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and traffic layer tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
  <map-traffic-layer [autoRefresh]="false"></map-traffic-layer>
</google-map>
```
