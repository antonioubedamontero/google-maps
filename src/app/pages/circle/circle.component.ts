import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
  // Coordinates of map center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom Level
  zoom = 4;
  // Coordinates of circle center
  circleCenter: google.maps.LatLngLiteral = {
    lat: 10,
    lng: 15,
  };
  // Radius of circle
  // IMPORTANT: The circle radius is very small. We will need to zoom outward.
  radius = 3;
}
