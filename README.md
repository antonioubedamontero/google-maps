# GoogleMaps

This project is intented to show how Google Maps works with Angular.

The library we are using for developing Google Maps is @angular/google-maps [see here](https://www.npmjs.com/package/@angular/google-maps).

## Google Maps sections

These are some of google maps utilities with examples

### Basic

- Basic use of Google Maps [see this link](./src/app/pages/basic/basic.md).

### Marker

- Use os Google Maps Markers [see this link](./src/app/pages/marker/marker.md).

### Info Window (vinculated to a marker)

- Use of Info Window vinculated to a marker [see this link](./src/app/pages/info-window/info-window.md).

## Google Maps Polyline

- Use of Google Maps Polyline [see this link](./src/app/pages/poly-line/poly-line.md).

## Google Maps Polygon

- Use of Google Maps Polygon [see this link](./src/app/pages/polygon/polygon.md).

## Google Maps Rectangle

- Use of Google Maps Rectangle [see this link](./src/app/pages/rectangle/rectangle.md).

## Google Maps Circle

- Use of Google Maps Circle [see this link](./src/app/pages/circle/circle.md).

## Google Maps Ground Overlay

- Use of Google Maps Ground Overlay [see this link](./src/app/pages/ground-overlay/ground-overlay.md).

## Google Maps Kml Layer

- Use of Google Maps Kml Layer [see this link](./src/app/pages/kml-layer/kml-layer.md).

## Google Maps Traffic Layer

- Use of Google Maps Traffic Layer [see this link](./src/app/pages/traffic-layer/traffic-layer.md).

## Google Maps Transit Layer

- Use of Google Maps Transiet Layer [see this link](./src/app/pages/transient-layer/transit-layer.md).

## Google Maps Bicycle Layer

- Use of Google Maps Bicycle Layer [see this link](./src/app/pages/bcycle-layer/bicycle-layer.md).

## Google Maps Direction Renderer

- Use of Google Maps Direction Renderer [see this link](./src/app/pages/direction-renderer/direction-renderer.md).

## Google Maps Heat Map Layer

- Use of Google Maps Heat Map Layer [see this link](./src/app/pages/heat-map-layer/heat-map-layer.md).

## Reference Article

See [google maps reference article](https://www.c-sharpcorner.com/article/how-to-integrate-google-maps-in-angular-14-app/).

## Steps to Fix tests

- Download google app js (clicking in script url without key):
  [click here to download](https://maps.googleapis.com/maps/api/js?libraries=visualization).

- Place file in a folder (ex: mocks/google-maps-testing.js).
- In angular.json, place this code in test section:

```
    "test": {
        ...
        "scripts": [
              "src/app/mocks/google-maps-testing.js"
        ]
    }
```
