# Heat Map Layer

Google Maps Heat Map Layer examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

To add a Google Maps Heat Map Layer you have to:

1. Complete steps refered in basic [see here](../basic/basic.md).
2. Modify html script to add visualization library:

```
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM&libraries=visualization">
</script>
```

3. Add google map and heat map layer tags. Example:

```
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  <map-heatmap-layer [data]="heatmapData" [options]="heatmapOptions"></map-heatmap-layer>
</google-map>
```

Filling heatMapData and options.
