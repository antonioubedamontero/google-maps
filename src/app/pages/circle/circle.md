# Circle

Google Maps Circle examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps Circle you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and circle tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
  <map-circle [center]="circleCenter"
    [radius]="radius"></map-circle>
</google-map>
```

In this example, center represents the coordinates of circle and radius the radius of circle.
