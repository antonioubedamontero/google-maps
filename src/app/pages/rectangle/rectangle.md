# Rectangle

Google Maps Rectangle examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps Rectangle you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Add google map and rectangle tags. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom">
  <map-rectangle [bounds]="bounds"></map-rectangle>
</google-map>
```

In this example, bound are the coordinates of the rectangle, based on cardinal points.
