import { Component } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss'],
})
export class PolygonComponent {
  // Map center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };

  // Map Zoom level
  zoom = 4;

  // Coordinates of points that forms polygon
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
