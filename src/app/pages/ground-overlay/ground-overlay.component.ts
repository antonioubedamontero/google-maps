import { Component } from '@angular/core';

@Component({
  selector: 'app-ground-overlay',
  templateUrl: './ground-overlay.component.html',
  styleUrls: ['./ground-overlay.component.scss'],
})
export class GroundOverlayComponent {
  // Coordinates of center of the map
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
  // Url that will be fixed on the map
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  // Represents a rectange in geographical coordinates
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
}
