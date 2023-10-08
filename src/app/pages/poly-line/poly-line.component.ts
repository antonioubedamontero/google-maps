import { Component } from '@angular/core';

@Component({
  selector: 'app-poly-line',
  templateUrl: './poly-line.component.html',
  styleUrls: ['./poly-line.component.scss'],
})
export class PolyLineComponent {
  // Google maps center coordinates
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };

  // Zoom level
  zoom = 4;

  // Array of point coordinates forming poliline
  vertices: google.maps.LatLngLiteral[] = [
    {
      lat: 13,
      lng: 13,
    },
    {
      lat: -13,
      lng: 0,
    },
    {
      lat: 13,
      lng: -13,
    },
  ];
}
