import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-layer',
  templateUrl: './traffic-layer.component.html',
  styleUrls: ['./traffic-layer.component.scss'],
})
export class TrafficLayerComponent {
  // Coordinates of maps center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Map zoom
  zoom = 4;
}
