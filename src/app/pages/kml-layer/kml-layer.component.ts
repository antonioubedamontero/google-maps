import { Component } from '@angular/core';

@Component({
  selector: 'app-kml-layer',
  templateUrl: './kml-layer.component.html',
  styleUrls: ['./kml-layer.component.scss'],
})
export class KmlLayerComponent {
  // Coordinates of map center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
  // Url of the kml
  kmlUrl =
    'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
}
