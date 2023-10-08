import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent {
  // Map center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
  // Rectangle coordinates based on east/north/south/wesy
  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
}
