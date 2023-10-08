# Basic

Basic Google Maps examples.

- See more on this [Google Maps Article Reference](https://developers.google.com/maps/documentation/javascript?hl=es-419).
- Go to [main page](../../../../README.md).

## Steps:

1. Install google maps dependency:

```
npm install @angular/google-maps
```

2. Add Google Map to your desired module (ex: AppModule).

```
import { GoogleMapsModule } from '@angular/google-maps'

...

imports: [
    BrowserModule,
    GoogleMapsModule
]
```

3. Add Google Map script with your API Key in index.html

```
 <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

4. Add Google Map tag to your page. Example:

```
<google-map height="400px"
    width="750px"
    [center]="center"
    [zoom]="zoom"
    (mapClick)="moveMap($event)"
    (mapMousemove)="move($event)">
</google-map>
```

In previous code:

- center is a property with coordinates of map center.
- zoom is a property with map zoom level.
- mapClick is an event that fires when click with mouse on a map point.
- mapMousemove is an event that fires when mouse move on the map.
